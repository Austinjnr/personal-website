import './App.css';
import Register from './componets/forn/Register';
import SignIn from './componets/forn/Signup';
import Header from './componets/header/Header';
import Nav from './componets/nav/Nav';
import About from './componets/about/About';
import Experience from './componets/experience/Experience';
import Service from './componets/services/Service';
import Portfolio from './componets/portfolio/Portfolio';
import Testimonial from './componets/testimonials/Testimonial';
import Contact from './componets/contact/Contact';
import Footer from './componets/footer/Footer';


function App() {
  return (
    <div>
      <Register />
      <SignIn />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
