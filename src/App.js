import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/detail";

function App() {
  return (
    <Router>
      <Routes>
        {/* 'element' prop을 사용하여 컴포넌트를 전달 */}
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
