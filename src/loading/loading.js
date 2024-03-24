import React, {
    useEffect
} from "react";
import "../App.css"
import logo from "../asset/logo.gif";
// import "../../css/loading/loading.css";
// import "../../css/loading/loader.css";
// import logoMain from '../../../assets/lobby/logo.png';

export default function Loading(props) {
    useEffect(() => {
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqq')
    }, [])
    //setTimeout(()=>{
    // document.getElementsByClassName("loader").style.animationPlayState = "paused";
    // document.getElementById("fgaLoaderSpinner").style.animationPlayState = "paused";
    // props.action("loaded",{});
    // },3000)

    return ( <div className = "loaderCover_Box" >
        <div className = "load_1" >
        <div className = "loadImg" >
        <img src = {
           logo
        }
        /> </div>
        <div className = "loadBox" >
        < div className = "loadBox_2" >
             </div>
              </div>
               </div>
                </div>
    )
}