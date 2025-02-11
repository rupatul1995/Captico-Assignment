import { useState } from "react";

function Login(){
const[UserData ,setUserData]=useState({ name:"",email:"",password:''});

function Handlechage(e){
    setUserData({...UserData,[e.target.name]:e.target.value} );
}
    return(
        <div>
         <h1>Login</h1>
         <label>Name</label>
         <br/>
         <input type="text" name="password"     onChange={Handlechage} value={UserData.name}/>
         <br/>
         <label>Emali</label>
         <br/>  
         <input type="email"  name="password" onChange={Handlechage} value={UserData.email}/>
         <br/>
         <label>Password</label>
         <br/>
         <input type="password"  name="password" onChange={Handlechage} value={UserData.password}/>
         <br/>
         <input type="Submit"  name="password" value="Login"/>

        </div>
    );
}
export default Login;



