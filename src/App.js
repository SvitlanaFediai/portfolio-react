import "./App.css";
import "./styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Theme from "./components/themeToggle/theme";
import AnimatedRoutes from "./components/animatedRoutes/animatedRoures";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <Header />
        <Navbar />
        <Theme />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
