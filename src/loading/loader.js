import React, { useState } from "react";
import "../App.css"
import logoMain from "../asset/logo1.png"
const Loader=()=> {

    return ( 
       <div className="loaderCover_Box1">
                            <div className="loader_1">
                                <div className="loaderImg">
                                    <img src={logoMain} />
                                </div>
                               
                                <div className="loaderCount "> Loading &nbsp; <div className="counter_nm"></div>%... </div>
                            </div>
                        </div> 
        
        
    )
}
export default Loader;