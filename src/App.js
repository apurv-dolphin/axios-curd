import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Create from "./Curd/Create";
import Read from "./Curd/Read";
import Update from "./Curd/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// {/* <Router>
// <div className="main">
//   <div>
//     <h3>React Crud Operations</h3>
//   </div>

//   <div>
//     <Route exact path="/" element={<Create />} />
//   </div>

//   {/* <div style={{ marginTop: 20 }}>
//   <Route exact path='/read' component={Read} />
// </div>

// <Route path='/update' component={Update} /> */}
// // </div>
// // </Router> */}


