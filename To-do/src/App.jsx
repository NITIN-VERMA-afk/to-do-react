import "./App.css";
import {Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import NoPage from "./Components/NoPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoPage/>}/>
        

      </Route>
    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
