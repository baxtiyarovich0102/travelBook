import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">

            <Routes>
              <Route path="/" exact element={<Main/>}></Route>
              <Route path="/add" element={<AddBook/>}></Route>
              <Route path="/update/:id" element={<UpdateBook/>}></Route>
              
            </Routes>
            
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
