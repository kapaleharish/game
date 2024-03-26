import React, { useState } from "react";
import "../App.css"

const MyAccount = (props) => {
  const [activeContent, setactiveContent]=useState(1);
    return (
        <>
            <div class="myAccountPop">
                <div class="Myaccount">
                    <div class="fd">
                        <div class="tabList">
                            <button class={activeContent === 1 ? "tabbtnActive" : "tabbtn"} id="PointTransfer" onClick={()=>setactiveContent(1)}>
                                Point Transfer</button>
                            <button class={activeContent === 2 ? "tabbtnActive" : "tabbtn"} id="Receivables" onClick={()=>setactiveContent(2)}>
                                Receivables</button>
                            <button class={activeContent === 3 ? "tabbtnActive" : "tabbtn"} id="Transferables" onClick={()=>setactiveContent(3)}>
                                Transferables</button>
                            <button class={activeContent === 4 ? "tabbtnActive" : "tabbtn"} id="ChangePwd" onClick={()=>setactiveContent(4)}>
                                Change Password</button>
                            <button class={activeContent === 5 ? "tabbtnActive" : "tabbtn"} id="ChangePin" onClick={()=>setactiveContent(5)}>
                                Change Pin</button>
                            <div class="chipsDiv chipBal">
                                <img src="https://img.icons8.com/color/48/roulette-chips.png" /> 1
                            </div>
                            <button class="close_2" onClick={()=>props.myaccountclose()}>
                                <img width="95" src="https://img.icons8.com/color/48/close-window.png" />
                            </button>
                        </div>
                        <div class={activeContent===1?"tabContentActive fd":"tabContent fd"}>
                            <div class="inputTabs">
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <div class="fd">
                                    <span class="funFx_1">
                                        FUN </span>
                                    <input minlength="9" maxlength="9" pattern="^[0-9]*$" inputmode="numeric" name="accountNum" placeholder="To account" id="accountNum" autocomplete="off" />
                                </div>
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="pin" placeholder="Pin" id="pin" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric" autocomplete="off" />
                                <div><img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="number" name="amount" placeholder="Amount" pattern="[0-9]*" id="amount" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <button id="okBtn" class="myaccountClose disableBtn" disabled="">Ok</button>
                                <div class="col_2">
                                </div>
                                <div class="respTxt">
                                    <p id="amtsndres">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class={activeContent===2?"tabContentActive fd":"tabContent fd"}>
                            <div>
                                <table class="acntPopTable" cellpadding="0" cellspacing="0">
                                    <thead class="acntPopHead"><tr><th>To</th><th>From</th><th>
                                        Amount </th>
                                        <th>  Date </th>
                                    </tr></thead></table>
                                <table class="pointsData">
                                    <tbody id="recData">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                         <div class={activeContent===3?"tabContentActive fd":"tabContent fd"}>
                            <div class="fd">
                                <table class="acntPopTable" cellpadding="0" cellspacing="0">
                                    <thead class="acntPopHead">
                                        <tr>
                                            <th> To</th>
                                            <th>From</th>
                                            <th>Amount</th>
                                            <th>Date</th></tr>
                                    </thead></table>
                                <table class="pointsData">
                                    <tbody id="recData2">
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                         <div class={activeContent===4?"tabContentActive fd":"tabContent fd"}>
                            <div class="inputTabs">
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="pwd" placeholder="Password" id="pwd" maxlength="6" inputmode="numeric" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="newPwd" placeholder="New Password" id="nPwd" maxlength="6" inputmode="numeric" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="cnfPwd" placeholder="Confirm Password" id="cPwd" maxlength="6" inputmode="numeric" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <button id="okBtn2" class="myaccountClose disableBtn" disabled="">Ok</button>
                            </div>
                            <div class="fd respTxt">
                                <p id="pwdres"></p>
                            </div></div> 
                         <div class={activeContent===5?"tabContentActive fd":"tabContent fd"}>
                            <div class="inputTabs">
                                <div><img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="pin" placeholder="PIN" id="opin" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="newPin" placeholder="New PIN" id="nPin" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="password" name="cnfPin" placeholder="Confirm PIN" id="cPin" minlength="4" maxlength="4" pattern="[0-9]*" inputmode="numeric" autocomplete="off" />
                                <div><img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <button id="okBtn3" class="myaccountClose disableBtn" disabled="">Ok</button>
                            </div>
                            <div class="fd respTxt"><p id="pinres">
                            </p>
                            </div>
                        </div> 
                         <div class={activeContent===6?"tabContentActive fd":"tabContent fd"}>
                            <div class="inputTabs">
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="email" name="email" placeholder="Current Email" id="oldEmail" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="email" name="newEmail" placeholder="New Email" id="newEmail" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <input type="number" pattern="^[0-9]*$" name="otp" maxlength="6" placeholder="Enter OTP" id="otp" autocomplete="off" />
                                <div>
                                    <img class="myAccImg" src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-equivalent-math-vol-1-outline-outline-black-m-oki-orlando.png" />
                                </div>
                                <button class="close_1 m_r_10" id="otp_btn">Send OTP</button>
                                <button class="close_1" id="otp_validate">Validate OTP</button>
                                <div class="fd p_t_10 respTxt"><p id="emailres"></p></div>
                                <div id="timerDiv" class="fd"><div class="timerDis">0<span id="timer"></span></div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="transrespTxt"><p class="" id="receiveres"></p>
                        <p class="" id="transferres"></p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyAccount