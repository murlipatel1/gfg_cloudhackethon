// import './App.css';
import {Route, Routes} from "react-router-dom"
import Expendeture from './components/Expendeture/Expendeture';
import Calc from "./components/Finance Calculator/Calc";
import Plan from "./components/Finance Planning/Plan";
import HomePage from './components/HomePage';
import Login from './components/login and signup/Login';

function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/expendeture" element={<Expendeture />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/calc" element={<Calc />} />
        <Route exact path="/plan" element={<Plan />} />
      </Routes>
    </>
      );
}

export default App;