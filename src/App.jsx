import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./resume";
import Resume2 from "./resume2";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/resume2" element={<Resume2 />} />
    </Routes>
  );
}

export default App;