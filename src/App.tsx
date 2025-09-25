import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <UiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:slug" element={<GamePage />} />
        </Routes>
      </Router>
    </UiProvider>
  );
}

export default App;
