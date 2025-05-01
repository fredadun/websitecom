import Layout from '../components/layout/layout';
import Hero from '../components/sections/hero';
import Expertise from '../components/sections/expertise';
import Services from '../components/sections/services';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';
import Blog from '../components/sections/blog';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Expertise />
      <Services />
      <Projects />
      <About />
      <Blog />
      <Contact />
    </Layout>
  );
}
