/**
 * App.jsx
 * Root component — assembles all sections in order.
 * Import order here determines render order on screen.
 */

import Cursor    from './components/Cursor';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Portfolio from './components/Portfolio';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

const App = () => (
  <>
    {/* Custom cursor (hidden on touch devices automatically) */}
    <Cursor />

    {/* Fixed navigation */}
    <Navbar />

    {/* Page sections — in scroll order */}
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>

    {/* <Footer /> */}
  </>
);

export default App;
