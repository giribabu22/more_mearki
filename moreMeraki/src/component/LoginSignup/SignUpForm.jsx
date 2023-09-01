// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; //faEyeSlash, faEye


// export default function SignUp() {
//     return (
//         <div className="signUpContainer">
//             <div className="signContainer">
//                 <h1 className="signUp">SignUp</h1>
//                 <div className="signname">
//                     <label htmlFor="name" className='signicon'>
//                         <FontAwesomeIcon icon={faUser} />
//                     </label>
//                     <input type="text" className="signName" name="name" placeholder="Enter your name" />
//                 </div>
//                 <div className="signemail">
//                     <label htmlFor="email" className='signicon'>
//                         <FontAwesomeIcon icon={faEnvelope} />   
//                     </label>
//                     <input type="email" className="signgmail" name="email" placeholder="Enter your email" />
//                 </div>
//                 <div className="signPsd">
//                     <label htmlFor="password" className='signicon'>
//                         <FontAwesomeIcon icon={faLock} />
//                     </label>
//                     <input type="password" className="signpsd" name="password" placeholder="Enter your password" />
//                 </div>
//                 <p>already have an Account</p>
//             </div>
//         </div>
//     )
// }

// import React from "react";
import React, { useState } from 'react';
import styles from "./signUpStyle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; //faEyeSlash, faEye


export default function SignUpPage() {
    const [user , setUser] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const [showAlert , setShowAlert] = useState(false);

    const handleSumbit =(e) =>{
        e.preventDefault();
        if(password.length < 8){
            setShowAlert(true);
        }
        console.log(user, email, password, confirmPassword)
    }

    return <>
        <form className={styles.form} onSubmit={handleSumbit}>
            <h1 className={styles.signUp}>SignUp</h1>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input type="text" className={styles.signName} name="name" placeholder="User name" value={user} onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <input type="email" className={styles.signgmail} name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {/* <div> */}
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                <input type={showPassword? "text":"password"} className={styles.signpsd} name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/> : <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/>}
            </div>
            {/* {showAlert && <p className={styles.errortMessage}>Password must be at least 8 characters!</p>} */}
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                <input type={showPassword? "text":"password"} className={styles.signConfirmPsd} name="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                {showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=> setShowPassword(!showPassword)}/>: <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=> setShowPassword(!showPassword)}/>}
                
            </div>
            <button className={styles.signUpButton} type="submit" >SignUp</button>
        </form>   
    </>
}