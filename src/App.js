import "./index.css";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import Dictionary from "./pages/Dictonary";
import Definition from "./pages/Definition";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/definition' element={<Definition />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
