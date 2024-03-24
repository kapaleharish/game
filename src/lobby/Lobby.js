import React, { useState } from "react";
import "../App.css"
// import user from "../media/user.f2b49fcc.svg"
import chip from "../media/chip_delete.524cd33d.png";
import logo_anime from "../asset/logo_anim.4b36cc8f.gif";
import MATKA_NON from "../asset/MATKA_NON.c0d20112.png";
import EUROPEAN_ROULETTE from "../asset/EUROPEAN_ROULETTE.af4b6f45.png";
import ROULETTE from "../asset/ROULETTE.1e65e1b9.png"
import TARGET from "../asset/TARGET.89c0c9ae.png"
import FUN_CARD from "../asset/FUN_CARD.13fdcb5a.png"
import MATKA1 from "../asset/MATKA1.5b76c008.png"
import EUROPEAN_ROULETTE_TIMER from "../asset/EUROPEAN_ROULETTE_TIMER.cca57ffb.png"
import FUN_ROULETTE from "../asset/FUN_ROULETTE.d8c5bdf3.png"
import FUN_TARGET from "../asset/FUN_TARGET.5cf6db12.png"
import SORAT_TIMER from "../asset/SORAT_TIMER.3e2d4480.png"
import MyAccount from "./MyAccount";

const Lobby = (props) => {

const [myaccount ,setmyaccount]=useState();
const myaccountclick=()=>{
    setmyaccount(true);
}
const myaccountclose=()=>{
    setmyaccount(false);
}
    return (
        <>
        { myaccount &&<MyAccount myaccountclose={myaccountclose}/>}
           {!myaccount && <div class="fgaLobby p_lr_15">
                <div class="fd" style={{ display: "block" }}>
                    <div class="blk_bg"><div class="fd">
                        <div class="fd"><div class="row center_content">
                            <div class="col_h1">
                                <ul class="box_blk fd">
                                    <li>
                                        <div class="blk">
                                            <img class="p_coins" src="https://img.icons8.com/color/48/roulette-chips.png" />
                                            1</div>
                                    </li>
                                    <li>
                                        <div class="blk">
                                            {/* <img class="user" src=" ../media/user.f2b49fcc.svg" alt="../media/user.f2b49fcc.svg"/> */}
                                            <img class="user" src="https://img.icons8.com/color/48/roulette-chips.png" alt="../media/user.f2b49fcc.svg" />
                                            FUN21002022
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col_h2">
                                <img class="fd logo_height" src={logo_anime} alt="../media/logo_anim.4b36cc8f.gif" />
                            </div>
                            <div class="col_h1">
                                <ul class="box_btns fd">
                                    <li>
                                        <div class="fd ">
                                            <button type="button" class="btn_1 btn_myAcount" onClick={()=>myaccountclick()}>
                                                My Account </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="fd">
                                            <button id="logoutBtn" type="button" class="btn_1 btn_logout" onClick={()=>props.loginMainClose()}>
                                                Logout </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="fgaLobbygameButtons" style={{ display: "block" }}>
                    <div class="fd"><div class="fd">
                        <div class="fd d-flex wrap text-center">
                            <div class="fd btnsGaMe">
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={SORAT_TIMER} />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={FUN_TARGET} alt="FUN_TARGET" />
                                    </div>
                                </div>
                                <div class="col_5_boxes"><div class="gameOne">
                                    <img src={FUN_ROULETTE} alt="FUN_ROULETTE" />
                                </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={EUROPEAN_ROULETTE_TIMER} alt="EUROPEAN_ROULETTE_TIMER" />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={MATKA1} alt="MATKA1" />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={FUN_CARD} alt="FUN_CARD" />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={TARGET} alt="TARGET" />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={ROULETTE} alt="ROULETTE" />
                                    </div>
                                </div>
                                <div class="col_5_boxes">
                                    <div class="gameOne">
                                        <img src={EUROPEAN_ROULETTE} alt="EUROPEAN_ROULETTE" />
                                    </div>
                                </div>
                                <div class="col_5_boxes"><div class="gameOne">
                                    <img src={MATKA_NON} alt="MATKA_NON" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
export default Lobby;