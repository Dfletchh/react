import "./index.css";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import Dictionary from "./components/Dictonary";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/dictionary' element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
