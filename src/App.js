import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Analytics from "./Analytics"; // Importamos el código de Google Analytics
import Home from "./Home"; // Página principal
import About from "./About"; // Otra página

function App() {
  return (
    <Router>
      <Analytics /> {/* Aquí se ejecutará Google Analytics en cada cambio de URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
