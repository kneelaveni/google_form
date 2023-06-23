import "./App.css";
import Header from "./components/Header";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody";
import Formheader from "./components/Formheader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Centeredtab from "./components/Tabs";
import Question_form from "./components/Question_form";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/form/:id"
              element={
                <>
                  <Formheader />
                  <Centeredtab />
                  <Question_form />
                </>
              }
            ></Route>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Template />
                  <Mainbody />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
