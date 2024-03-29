import React, { useState } from "react";
import "../App.css"




const Errorpopup = (props) => {

    return (
        <>
        <div id="popupWin" class="popupWin block">
        
            <div class="pop_text">
                <div class="fd font_30 clr_00">
                    Login Failed
                </div>
                <div class="fd m_t_10 clr_b9">
                    Invalid Username or password
                </div>
                <div class="fd">
                    <button class="forcelogin_bt_1 m_t_20" onClick={()=>{props.seterrorpopup(false)}}>
                        Ok
                    </button>
                </div>
            </div>
            </div>
        </>
    )

}


export default Errorpopup;