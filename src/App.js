import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shoes from "./Components/Shoes/Shoes";

function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="shoes" element={<Shoes/>}/>
    </Routes>
    <Shoes/>
  </div>;
}

export default App;
