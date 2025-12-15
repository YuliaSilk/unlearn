import "./styles/index.css";
import Header from "./components/layout/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
 return (
  <div className="min-h-screen overflow-x-hidden">
   <Header />
   <main>
    <HomePage />
   </main>
  </div>
 );
}

export default App;
