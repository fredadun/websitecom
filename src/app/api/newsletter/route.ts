import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Define types for responses
type ErrorResponse = {
  success: false;
  error: string;
};

type SubscriptionResult = 
  | { success: true; id: string }
  | { success: true; alreadySubscribed: true }
  | ErrorResponse;

// Initialize Mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
});

async function subscribeToNewsletter(email: string, firstName?: string): Promise<SubscriptionResult> {
  // Log the subscription attempt for debugging purposes
  console.log(`Attempting to subscribe: ${email}${firstName ? `, ${firstName}` : ''}`);
  
  try {
    // Add member to Mailchimp list
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID as string, {
      email_address: email,
      status: 'subscribed', // Use 'pending' for double opt-in
      merge_fields: {
        FNAME: firstName || '',
      },
    });
    
    // Safely access the response properties
    if (response && 'id' in response) {
      console.log('Mailchimp subscription successful:', response.id);
      return { success: true, id: response.id };
    } else {
      throw new Error('Unexpected response format from Mailchimp');
    }
  } catch (error: unknown) {
    // Type guard for error with response property
    const mailchimpError = error as { response?: { status: number; data: { title: string } } };
    // Handle Mailchimp-specific errors
    if (mailchimpError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Mailchimp API error:', mailchimpError.response.data);
      
      // If it's already subscribed, don't treat as error
      if (mailchimpError.response.status === 400 && 
          mailchimpError.response.data.title === 'Member Exists') {
        return { success: true, alreadySubscribed: true };
      }
    }
    
    // Re-throw the error
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Subscribe to newsletter
    const result = await subscribeToNewsletter(email, firstName);
    
    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', ...result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
