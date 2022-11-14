function Body4(){
    return(
        <div style={{display:"flex",gap:"20px"}}>
          <div style={{height:"500px",width:"30%",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}}>
            <p style={{backgroundColor:"green"}}>Basic</p>
            <h1>Rs.10,000</h1>
            <img  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brand-protection-guard-safety-secure-shield-verify-32655.png"/>
            <button style={{backgroundColor:"teal",height:"60px",width:"50px"}}>Sign up</button>
            <h2>Send unlimited surveys with up to 10 questions. Response limits apply.</h2>
          </div>
          <div style={{height:"500px",width:"30%",alignItems:"center"}}>
            <p style={{backgroundColor:"blue"}}>Individual Advantage</p>
            <h1>Rs.19,000</h1>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brand-98774.png"/>
            <button style={{backgroundColor:"gold",height:"80px",width:"50px"}}>See all the features</button>
            <h2>Get our most popular features for creating, sending & analyzing surveys.</h2>
          </div>
          <div style={{height:"500px",width:"30%",gap:"30px"}}> 
          <p style={{backgroundColor:"pink"}}>Team Advantage</p>
          <h1>Rs.18,000</h1>
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brand-2652360-2210350.png"/>
          <button style={{backgroundColor:"yellow",height:"80px",width:"50px"}}>See all feature</button>
          <h2>Collaboration tools and survey features that help your team work more efficiently.</h2>
          </div>
        </div>
    )
}
export default Body4;