import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link,
  
  Navigate

} from "react-router-dom";

import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/Home";
import Settings from "./pages/home/settings/Settings";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Error from "./pages/error/Error";


function App() {
  return (
    <Router>
      <TopBar />
        <Link to={"/"}> Home </Link>
        <Link to={"/write"}> Write </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/Login"}> Login </Link>
        <Link to={"/Register"}> Register </Link>
        <Link to={"/Settings"}> Settings </Link>
        <Link to={"/Single"}> Single </Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Single" element={<Single />} />
    
      

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
   

  );

}

export default App;


// https://reactrouter.com/docs/en/v6/getting-started/tutorial