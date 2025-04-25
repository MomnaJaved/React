import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="App-header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <Navbar />
      </header>

      <div className="container mx-auto px-4 py-10 space-y-6">
        <Card
          title="React"
          description="A JavaScript library for building fast, component-based user interfaces."
        />
        <Card
          title="Tailwind CSS"
          description="A utility-first CSS framework for rapidly styling your UI directly in HTML."
        />
        <Counter />
      </div>
    </div>
  );
}

export default App;
