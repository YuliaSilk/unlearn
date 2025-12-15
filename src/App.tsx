import "./index.css";
import Header from "./components/layout/Header/Header";
import Hero from "./components/Hero";

function App() {
 return (
  <div className="min-h-screen overflow-x-hidden">
   <Header />
   <main>
    <Hero />
   </main>
  </div>
 );
}

export default App;
