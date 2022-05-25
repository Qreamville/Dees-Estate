import { Navbar, Hero, Brand, Products, Footer } from "./components";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <Products />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
