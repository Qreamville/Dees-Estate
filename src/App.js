import { Navbar, Hero, Brand, Products } from "./components";
import Feature from "./components/feature/Feature";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brand />
      <Products />
      <Feature />
    </div>
  );
}

export default App;
