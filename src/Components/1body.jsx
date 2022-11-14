// import {useState} from "react";
// const image={
//   p:"Are my employees happy at work|",
//   p:"Will my product be a success or a flop?|"
// }
// function Body1(){
//     // const [image,setImage]=useState(image)
//     // setInterval({
//     //       setImage("true")
//     // },3000)
//     return(
       
//         <div style={{alignItems:"center",display:"grid",gap:"20px",textAlign:"center"}}>
//           <p>A global leader in survey software. 20 million questions answered daily.</p>
//           <img  style={{textAlign:"center"}} src="https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png"/>
//           <button style={{backgroundColor:"teal",borderRadius:"20px",width:"4%",height:"100px"}}>Get Started</button>
//         </div>
//     )
// }
// export default Body1
import { useEffect } from "react";
import { useState } from "react";

const ShowSec = () => {
  const first_text = "Are my customers actually satisfied?";

  const [text1, setText1] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);

  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      } else if (text1 === first_text && typing === "istyping") {
        sleep(500).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text1 === first_text && typing === "isdeleting") ||
        typing === "isdeleting"
      ) {
        setText1(first_text.slice(0, text1.length - 1));
        if (text1.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1, typing]);

  return (
    <div className=" flex h-screen justify-center items-center">
      <div className=" h-1/2 w-1/2 bg-black rounded-md flex items-center pl-6">
        <h1 className=" text-white text-2xl blinking-cursor">{text1}</h1>
        <p srtyle={{backgroundColor:"gray"}} className="title-para">A global leader in survey software. 20 million questions answered daily.</p>
        <div className="title-button"><button>Get started</button></div>
      </div>
    </div>
  );
};

export { ShowSec };