// import logo from './logo.svg'; 
import './App.css';
import { useEffect, useState } from 'react';
import LoginMain from "./login/loginMain"
import Loading from './loading/loading';
import Lobby from './lobby/Lobby';
import MyAccount from './lobby/MyAccount';
import FunTargetTimer from './games/FunTargetTimer';

function App() {
   const[gbw, setgbw]=useState(2350);
  const[gbh, setgbh]=useState(1250);
  const[cnt, setcnt]=useState(0);
  const[flag, setflag]=useState(true);
  const[loginmain, setloginmain]=useState();
  useEffect(()=>{
      resize();
       
  },[cnt])

  useEffect(()=>{
    const myTimeout = setTimeout(myGreeting, 2000);
  function myGreeting() {
  setflag(false)
}

},[cnt])
 const resize = () => {
    let windHt;
    let windWd;
    setgbw(2350);
    setgbh(1250);
    windHt = window.innerHeight;
    windWd = window.innerWidth;
    // windHt = window.innerHeight - 10;
    // windWd = window.innerWidth - 10;

    console.log("Window windHt: " + windHt);
    console.log("Window windWd: " + windWd);

    let marg_left = (windHt * gbw / gbh - windWd) / 2;
    let marg_top = (windWd * gbh / gbw - windHt) / 2;
    let lndscp_1 = (windHt / gbw * gbh);
    let lndscp_2 = (lndscp_1 - windWd) / 2 * -1;
    console.log(lndscp_1)
    console.log(lndscp_2)
    let marg_left_lndscp = (Math.round(lndscp_2) - Math.round(lndscp_1)) / 2;
    console.log(marg_left_lndscp)

    let checkWid = windHt *(gbw / gbh);

     let gameBox = document.getElementById('gameBox');

    let gamewinMargin = (windWd - Math.round(checkWid)) / 2
     gameBox.style.transform = "scale(" + windWd / gbw + "," + windHt / gbh + ")";
}

const loginhandle=()=>{
     setloginmain(false);

}
const loginMainClose=()=>{
  setloginmain(true);

}
  return (
    <>
      <div id ="gameBox">
         { flag && <Loading/>}
        {/* { loginmain &&<LoginMain loginhandler={loginhandle} />}
        {!loginmain &&<Lobby loginMainClose={loginMainClose}/>} */}
        {/* {<MyAccount/>} */}
        {<FunTargetTimer/>}
      
     </div>
   </>  );
}

export default App;
