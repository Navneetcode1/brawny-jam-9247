import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import  { ShowSec } from "./Components/1body"
import Body2 from "./Components/Body2"
import Body3 from "./Components/Body3"
import Body4 from "./Components/Body4"
import Body5 from './Components/Bdoy5';
import Login from './Components/Login';
import Body6 from './Components/Body6';

// import  LargeWithAppLinksAndSocial from "./Components/Footer"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <ShowSec/>
     <Body2/>
     <Body3/>
     <Body4/>
     <Body5/>
     <Body6/>
     <Login/>
     {/* <Footer/> */}
        {/* < LargeWithAppLinksAndSocial/> */}
  
    </div>
  );
}

export default App;
