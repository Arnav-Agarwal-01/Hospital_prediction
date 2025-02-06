import { useState } from "react";
import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const data = { name, password };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5555/", data);
            if (response.data.message === "true") {
                console.log(response.data);
                navigate('/dashboard',{replace:true}); 
            } else {
                alert("Invalid user");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="bg">
            <div className="background-image"></div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                </div>
            </div>
        </>
    );
}

export default Login;

// import { useState } from "react";
// import axios from "axios";
// import React from 'react'
// import { useNavigate } from "react-router-dom";
// import '../styles/Login.css'

// const Login = () => {
//     const navigate=useNavigate();
//     const [name,setName]=useState('');
//     const [password,setPassword]=useState('');
//     const data={name,password};
//     async function handleSubmit(e){
//         try{
//             e.preventDefault();
//             const response=await axios.post("http://localhost:5555/",data);
//             if(response.data.message==="true"){
//                 console.log(response.data);
//                 navigate('/dashboard'); 
//             }
//             else{
//                 alert("Invalid user");
//             }
//         }
//         catch(error){
//             console.log(error);
//         }
        
//     }
//     function handleNameChange(e){
//         setName(e.target.value);
//     }
//     function handlePasswordChange(e){
//         setPassword(e.target.value);
//     }
//     return (
//         <>
//         <div className="background-image"></div>
//     <div className="login-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//             <h2>Login</h2>
//             <div className="input-group">
//                 <label htmlFor="username">Username</label>
//                 <input type="text" value={name} onChange={handleNameChange} id="username" name="username" required></input>
//             </div>
//             <div className="input-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" required></input>
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     </div>
//         </>
//   )
// }
// export default Login;