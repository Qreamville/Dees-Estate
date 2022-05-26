import {
  Navbar,
  Hero,
  Brand,
  Products,
  Footer,
  Testimonials,
} from "./components";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <Products />
      <Feature />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
