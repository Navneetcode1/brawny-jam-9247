import {useState} from "react";
const image={
  p:"Are my employees happy at work|",
  p:"Will my product be a success or a flop?|"
}
function Body1(){
    // const [image,setImage]=useState(image)
    // setInterval({
    //       setImage("true")
    // },3000)
    return(
       
        <div style={{alignItems:"center",display:"grid",gap:"20px",textAlign:"center"}}>
          <p>A global leader in survey software. 20 million questions answered daily.</p>
          <img  style={{textAlign:"center"}} src="https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png"/>
          <button style={{backgroundColor:"teal",borderRadius:"20px",width:"4%",height:"100px"}}>Get Started</button>
        </div>
    )
}
export default Body1