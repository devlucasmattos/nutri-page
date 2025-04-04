import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Process />
          <Plans />
          <CtaBanner />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;