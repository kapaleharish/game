import React, { useEffect, useState } from "react";
import "../App.css"
import image from "../asset/fun-target-bg_1.fdd9f10c.png"
import chip from "../asset/chip_delete.524cd33d.png"
import targetTimerTitle from "../asset/targetTimerTitle.176964eb.png"
import jackpot1 from "../asset/jackpot1.e3038b47.png"
import jackpot2 from "../asset/jackpot2.2b772fa3.png"
import jackpot3 from "../asset/jackpot2.2b772fa3.png"
import jackpot4 from "../asset/jackpot4.47fa7479.png"
import jackpot5 from "../asset/jackpot5.ab9e36fc.png"
import jackpot6 from "../asset/jackpot6.72394d52.png"
import jackpot7 from "../asset/jackpot7.d3e52070.png"
import jackpot8 from "../asset/jackpot8.1d3aa072.png"
import jackpot9 from "../asset/jackpot9.b0783dab.png"
import fttNumBg from "../asset/ftt_num_bg.77dfb17e.png"
import wheel2 from "../asset/wheel_2.5fe4c94a.png"
import wheel1 from "../asset/wheel_1.d408a1c9.png"

const FunTargetTimer = () => {
     
    let [layerone, setlayerone]=useState(false);
    let [count, setcount]=useState(1);
    
    useEffect(() => {
        const timer = setInterval(() => {
        setcount(count+1);
        count%2==0?setlayerone(true):setlayerone(false);
            console.log(count, layerone)
        }, 200);
                   // clearing interval
        return () => clearInterval(timer);
      });

    return (

        <>
            <div class="gamePage" style={{backgroundImage: "url("+image+")"}}>
                <div class="fd">
                    <div class="row">
                        <div class="target_chips">
                            <div class="fd p_5 clr_ff font_20 arial ftt_handIdCls">
                                ID: 67389 <br />
                                P ID: 21002022</div>
                            <div class="fd chips funTarget_chips">
                                <div class="row">
                                    <div id="chipImg_1" class="col-4 text-center Select">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_10" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip}/>
                                    </div>
                                    <div id="chipImg_25" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip}/>
                                    </div>
                                    <div id="chipImg_50" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_100" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_500" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_1000" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_5000" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip} />
                                    </div>
                                    <div id="chipImg_0" class="col-4 text-center UnSelect">
                                        <img class="ftt_chp_img" src={chip}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="target_table">
                            <div class="fd">
                                <div class="fd text_center">
                                    <img class="trgeImg_timer" src={targetTimerTitle} alt="./static/media/targetTimerTitle.176964eb.png" />
                                </div>
                                <div class="wheelBox_1_ftt m_t_10" style={{height: "660px"}}>
                                    <img class="jack_1" src="" />
                                    <div class="ftt_overallBox" id="ftt_marqueeTag">
                                        <div class="ftt_mainTrans" id="imageMarquee" style={{transform: "translateX(-660px)"}}>
                                            <img src={jackpot2} name="xImgs" class="act" />
                                            <img src={jackpot1} name="xImgs" class="act" /><img src={jackpot3}name="xImgs" class="act" />
                                            <img src={jackpot4} name="xImgs" class="act" /><img src={jackpot5} name="xImgs" class="act" />
                                            <img src={jackpot6} name="xImgs" class="act" /><img src={jackpot7}name="xImgs" class="act" />
                                            <img src={jackpot8} name="xImgs" class="act" /><img src={jackpot9} name="xImgs" class="act" />
                                        </div>
                                    </div>
                                    <div id="ftt_wheelWraper"><div class="ftt_wheelAnimOne">
                                        <div class="ftt_wheelAnim" id="ftt_wheelAnim" style={{transition: "all 0s ease 0s",transform: "rotate(144deg)"}}>
                                            <img src={fttNumBg} />
                                        </div>
                                    </div>
                                        <div class="ftt_wheelBorder">
                                            {   layerone==true?
                                                <img src={wheel2}/>:
                                                <img src={wheel1}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="target_btns">
                            <div class="FTT_Close"><button class="cursor_none" id="closeBtn">
                                <img id="close_img" src="https://img.icons8.com/color/48/close-window.png" alt="./static/media/am_close.b86aec00.svg" style={{opacity: "1"}} />
                            </button>
                            </div>
                            <div class="fd">
                                <div class="ftt_userLbl">
                                    <img class="user" src="https://img.icons8.com/ios-glyphs/30/FA5252/name.png" alt="./static/media/user.f2b49fcc.svg" />
                                    FUN21002022</div>
                            </div>
                            <div class="fd m_b_15"><div class="funTargetWinImg" id="funTargetWinImg" />
                            </div>
                            <div id="funTargetCover" class="funTargetCover" style={{display: "none"}}>
                            </div>
                            <div class="timer_SecFTT timerYelloBorder" id="timer">
                                <span class="" id="timeSpan" style={{display: "block"}}> 08 </span>
                            </div>
                        
                        <div class="fd">
                            <div class="funTrgtTBoard"><div>For Amusement Only. Your minimum Bet 10 and the maximum Bet 50000 </div>
                            </div>
                            <div class="fd m_t_5"><table class="ftt_HistoryTbl ftTBg Century_Gothic_B" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>5</td>
                                        <td>8</td>
                                        <td>7</td>
                                        <td>9</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr><tr>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td>
                                        <td>1x</td><td>1x</td></tr></tbody></table>
                            </div></div></div></div></div>
                <div class="bottomFixFuntarget">
                    <div class="fd fun_trg_timer_btns p_lr_10 gothic_1">
                        <div class="ftt_leftPanl">
                            <div class="fl_1">
                                <div class="funBal fd">
                                    <div>1</div>
                                    <div>BALANCE</div>
                                </div>
                            </div>
                            <div class="fl_1"><div class="funBal fd">
                                <div>0</div>
                                <div>TOTAL BET</div>
                            </div></div>
                            <div class="fl_1">
                                <div class="funBal fd">
                                    <div>0</div>
                                    <div>WINNING</div>
                                </div></div>
                        </div>
                        <div class="ftt_btnPanel">
                            <div class="fl_1">
                                <button class="fd ar_bt_1 z_10" disabled="" name="PREV">PREV</button>
                            </div>
                            <div class="fl_1">
                                <button class="fd ar_bt_1" disabled=""> CLEAR</button>
                            </div>
                            <div class="fl_1"><button class="fd ar_bt_1">DOUBLE  </button>
                            </div>
                        </div>
                    </div>
                    <div class="fd ">
                        <div class="FGAfunTargetTimerBetPanel">
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_1">
                                <div class="buttonZeroBg"><span><div class="valueOne">1</div>
                                    <div class="valueTwo"></div>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_2">
                                <div class="buttonZeroBg"><span><div class="valueOne">2</div>
                                    <div class="valueTwo">
                                    </div>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet">
                                <div class="buttonZero" id="FTTboxSml_3">
                                    <div class="buttonZeroBg">
                                        <span>
                                            <div class="valueOne">3</div>
                                            <div class="valueTwo"></div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_4">
                                <div class="buttonZeroBg">
                                    <span>
                                        <div class="valueOne">4</div>
                                        <div class="valueTwo">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_5">
                                <div class="buttonZeroBg"><span><div class="valueOne">5</div>
                                    <div class="valueTwo">
                                    </div>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_6">
                                <div class="buttonZeroBg">
                                    <span>
                                        <div class="valueOne">6</div>
                                        <div class="valueTwo">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_7">
                                <div class="buttonZeroBg">
                                    <span>
                                        <div class="valueOne">7
                                        </div>
                                        <div class="valueTwo">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_8">
                                <div class="buttonZeroBg"><span><div class="valueOne">8</div>
                                    <div class="valueTwo">
                                    </div>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_9">
                                <div class="buttonZeroBg">
                                    <span>
                                        <div class="valueOne">9</div>
                                        <div class="valueTwo">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            </div>
                            <div class="funTTBet"><div class="buttonZero" id="FTTboxSml_0">
                                <div class="buttonZeroBg">
                                    <span>
                                        <div class="valueOne">0</div>
                                        <div class="valueTwo">
                                        </div>
                                    </span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunTargetTimer