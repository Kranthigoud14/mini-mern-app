import "./App.css"
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Userslist from "./components/Userslist.jsx";
import User from "./components/User.jsx";
import TestRefTypes from "./components/TestRefTypes.jsx";
import APIDemo from "./components/APIDEMO.jsx";
import FormDemo from "./components/FormDemo.jsx";
import CreateForm from "./components/CreateForm.jsx";
//class component
//function component
function App(){
  //to create a component
  //contains states(optional) and  need to return react element(compulsory)
  //state
  return (
    <div>
      <CreateForm/>
    </div>
  );
}
export default App;
