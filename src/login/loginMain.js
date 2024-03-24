import React, { useState } from "react";
import "../App.css"
import logo from "../asset/logo.gif";



const LoginMain=()=>{
const[flag,setflag]=useState(true)
let checkedfun=()=>{
if(flag==true){
    document.getElementsByClassName("chBox")[0].style.display="block";
    document.getElementsByClassName("chBox1")[0].style.display="none";
    setflag(false);
}
else{
    document.getElementsByClassName("chBox")[0].style.display="none";
    document.getElementsByClassName("chBox1")[0].style.display="block";
    setflag(true);

}
}
    return(
        <>
        <div className="fgaLoginMain">
        <div className="loginMain">
        <button id="closeBtn" className="windoClose">
            <img src="https://img.icons8.com/color/48/close-window.png"/>
            </button>
        <div class="languageSelection">
            <select id="MyLangSelect">
                <option value="English"> English </option>
                <option value="తెలుగు"> తెలుగు </option>
                <option value="বাংলা"> বাংলা </option>
                <option value="मराठी"> मराठी </option>
                <option value="हिंदी"> हिंदी </option>
                <option value="ਪੰਜਾਬੀ"> ਪੰਜਾਬੀ </option>
                <option value="ગુજરાતી"> ગુજરાતી </option>
                </select>
                </div>
        <div className="loginDiv">
            <div class="fd inp_elm logDf">
        <div class="fd df">
            <label class="fieldLabel" id="username" for="userName" style={{fontSize: "60px"}}> Username </label>
            <span class="funFx"> FUN </span>
            <input minlength="9" maxlength="9"  pattern="^[0-9]*$" inputMode="numeric" name="username" placeholder="Username" id="fgaUserName" autocomplete="off"   style={{fontSize: "50px"}}></input>
            </div>
            <div class="fd df m_t_15">
                <label class="fieldLabel" id="password" for="password" style={{fontSize: "60px"}}>
                     Password </label>
                     <input type="password" placeholder="Password" name="password" id="fgaPassword" minlength="6" maxlength="6" autocomplete="off" inputMode="numeric" style={{fontSize: "50px"}}></input>
                     </div>
            <div class="fd m_t_30 ">
            <label class="checkBoxLable" id="chkBxLbl">
            <img src="https://img.icons8.com/emoji/48/check-box-with-check-emoji.png" alt="check-box-with-check-emoj" className="chBox"/> 
            <img src="https://img.icons8.com/ios/50/40C057/unchecked-checkbox.png" alt="check-box-with-check-emoj" className="chBox1"/> 
            <input class="checkbox_1" type="checkbox" name="checkbox" id="rememberMe" value="false" checked="" onChange={()=>checkedfun()}/>
            &nbsp; Remember password
            </label>
            </div>
            <div class="fd logBtns">
                <div class="row">
                    <div class="col-5">
                        <button id="submitBtn" type="submit" class="btn_1 fd logSubmt" value="Login">Login 
                         </button>
                         </div>
                         <div class="col-0"> 
                         </div><div class="col-5">
                            <button id="regBtn" disabled="" type="submit" class="btn_1 fd disableBtn" value="Login"> 
                            Register</button>
                            </div>
                            </div>
                            </div>
                            <div class="fd logBtns">
                                <div class="row">
                                    <div class="col-5">
                                        <button id="frgPwd" disabled="" type="submit" class="btn_1 fd disableBtn" value="Login"> 
                                        Forgot password </button>
                                        </div>
                                        <div class="col-0"> 
                                        </div>
                                        <div class="col-5">
                                            <button id="frgPin" disabled="" type="submit" class="btn_1 fd disableBtn" value="Login">
                                                 Forgot PIN </button>
                                                 </div>
                                                 </div>
                                                 </div>
            </div>
        </div>
        <div className="LogoLogBox">
        <img src={logo}/>
        </div>
        </div>
        </div>
        </>
    )
}
export default LoginMain;