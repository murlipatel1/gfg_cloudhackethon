import { Route, Routes } from "react-router-dom";
import Expendeture from "./components/Expendeture/Expendeture";
import Calc from "./components/Finance Calculator/Calc";
import Plan from "./components/Finance Planning/Plan";
import Login from "./components/login and signup/Login";
import User from "./components/User Detail/User";
import Stats from "./components/Statistics/stats";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <>
    <div className="apps">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/expendeture" element={<Expendeture />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/calc" element={<Calc />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/stats" element={<Stats />} />
        <Route exact path="/users" element={<User />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
