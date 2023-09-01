// import React, {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom'; 
// import './LoginForm.module.css';
// import signUp from './signUp';

// export default function LoginForm() {

//   const[password, setPassword] = useState('');
//   const[email, setEmail] = useState('');
//   const[psw, setPsw] = useState('');

//   const navigate = useNavigate(); // Get the navigate function

//   const handleSignupClick = () => {
//     navigate('/signup'); // Navigate to the '/signup' route which we have assign in the app.js file
//   };

//   const togglePasswordVisibility = () => {
//     setPassword(password => !password)
//   }

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPsw(e.target.value);
//   };

//   const handlingUser = (e) => {
//     e.preventDefault();
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', psw);
//     setEmail('');
//     setPsw('');
//     alert('Login Successful');
//   }

//   return ( 
//     <div className='main-container'>
//       <div className='container'>
//         <h1 className='login'><span>&#x1F512;</span>Login<span>&#x1F512;</span></h1>
//         <div className='email'>
//           <label htmlFor="mail" className='icon'>
//             <FontAwesomeIcon icon={faEnvelope} />
//           </label>
//           <input className='gmail' type="text" value={email} onChange={handleChangeEmail} placeholder="Enter email..."/>
//         </div>
//         <br/>
//         <div className='psw'>
//           <label htmlFor="password" className='icon'>
//             <FontAwesomeIcon icon={faLock} />
//           </label>
//             <input className='psd' type={password?'text':'password'} value={psw} onChange={handleChangePassword} placeholder="Enter password..."/>
//             <span onClick={togglePasswordVisibility} className='icon'>
//               <FontAwesomeIcon icon={password ? faEyeSlash : faEye} /> 
//           </span>
//         </div>
//         <br/>
//         <div>
//             <button className='button' type="button" onClick={handlingUser}>Login</button>
//         </div>
//         <div className='btn'>
//           {/* <button className='buttn' type="button">Login</button> */}
//           <button className='buttn' type="button" onClick={handleSignupClick}>Sign Up</button>
//         </div>
//       </div>
//     </div>
//   )

// }

import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // for show password
  const [showAlert, setShowAlert] = useState(false); // for show alert message
  
  const handleSumbit = (e) => {
    e.preventDefault();
    if(password.length < 8) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    console.log(email, password)
  }
   
  return <>
    {/*for multipule class name put array inside curly braces*/}
      <form className={styles.form} onSubmit={handleSumbit}> 
      <h1>&#x1F510; Login &#x1F510;</h1>
        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <input type="email" placeholder="Enter email..." value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className={styles.inputErrorContainer}>
        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={styles.icon}/>
          <input type={showPassword?"text":"password"} placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)}
    className={styles.passwordInput}/>
          {
            showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={() => setShowPassword(!showPassword)}/> : <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={() => setShowPassword(!showPassword)}/>
          }
          </div>
          {
            showAlert && <p className={styles.alertMessage}>Password must be at least 8 characters!</p>
          }
          </div>
          <button className={styles.login} type="submit">Login</button>
      </form>
  </>
};