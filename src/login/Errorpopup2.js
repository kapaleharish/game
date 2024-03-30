import React, { useState } from "react";
import "../App.css"




const Errorpopup2 = (props) => {

    return (
        <>
        <div id="popupWin2" class="popupWin block">
        
            <div className="pop_text poptext2">
                
                <div className="fd m_t_10 clr_b9 text">
                Other Device login Detected With same Userid. Force login here press ok...
                </div>
                <div class="fd">
                    <button className="forcelogin_bt_1 m_t_20 okbtn" onClick={()=>{props.seterrorpopup(false)}}>
                        Ok
                    </button>
                    <button className="forcelogin_bt_1 m_t_20 cancelbtn" onClick={()=>{props.seterrorpopup(false)}}> Cancel</button>
                </div>
            </div>
            </div>
        </>
    )

}


export default Errorpopup2;