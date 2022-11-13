import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body1 from "./Components/1body"
import Body2 from "./Components/Body2"
import Body3 from "./Components/Body3"
import Body4 from "./Components/Body4"
// import  LargeWithAppLinksAndSocial from "./Components/Footer"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body1/>
     <Body2/>
     <Body3/>
     <Body4/>
     {/* < LargeWithAppLinksAndSocial/> */}
    </div>
  );
}

export default App;
