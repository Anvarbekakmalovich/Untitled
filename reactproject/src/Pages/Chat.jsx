import React from "react";
import Ellipse6 from "../Images/Ellipse 6.png";
import Ellipse61 from "../Images/Ellipse 6 (1).png";
import Ellipse62 from "../Images/Ellipse 6 (2).png";
import Ellipse63 from "../Images/Ellipse 6 (3).png";
import Ellipse9 from "../Images/Ellipse 9.png"
import Send from "../Images/send 1.png"
import "../CSS/Chat.css";

function Chat() {
  return (
    <div className="BOX1">
      <div className="BOX2">
        <div className="Chat">
          <div className="Chat1">
            <div className="chat1_in">
              <div className="chat_human">
                <div className="humanIn">
                  <div className="Inline">
                    <img src={Ellipse6} alt="error" />
                  </div>
                  <div className="Inline1">
                    <div className="online">
                      <div className="chatName_online">
                        <p className="chat_name">Марина</p>
                      </div>
                      <div className="chatOnl">
                        <div className="onl_online"></div>
                      </div>
                    </div>
                    <p className="chat_text">Привет! Как дела?</p>
                  </div>
                  <div className="Inline2">
                    <div className="message">1</div>
                  </div>
                </div>
              </div>
              <div className="chat_human">
                <div className="humanIn">
                  <div className="Inline">
                    <img src={Ellipse61} alt="error" />
                  </div>
                  <div className="Inline1">
                    <div className="online">
                      <div className="chatName_online">
                        <p className="chat_name">Алена</p>
                      </div>
                      <div className="chatOnl">
                        <div className="onl_online"></div>
                      </div>
                    </div>
                    <p className="chat_text">Чем занимаешься?</p>
                  </div>
                  <div className="Inline2">
                    <div className="message">1</div>
                  </div>
                </div>
              </div>
              <div className="chat_human">
                <div className="humanIn">
                  <div className="Inline">
                    <img src={Ellipse62} alt="error" />
                  </div>
                  <div className="Inline1">
                    <div className="online">
                      <div className="chatName_online">
                        <p className="chat_name">Вика</p>
                      </div>
                      <div className="chatOnl">
                        <div className="onl_online"></div>
                      </div>
                    </div>
                    <p className="chat_text">Хорошо. До встречи</p>
                  </div>
                  <div className="Inline2">
                    <div className="message">1</div>
                  </div>
                </div>
              </div>
              <div className="chat_human">
                <div className="humanIn">
                  <div className="Inline">
                    <img src={Ellipse63} alt="error" />
                  </div>
                  <div className="Inline1">
                    <div className="online">
                      <div className="chatName_online">
                        <p className="chat_name">Анастасия</p>
                      </div>
                      <div className="chatOnl">
                        <div className="onl_online"></div>
                      </div>
                    </div>
                    <p className="chat_text">Привет! Как дела?</p>
                  </div>
                  <div className="Inline2">
                    <div className="message">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Chat2">
            <div className="chat2_in">
                <div className="title">
                    <div className="title_user">Алёна 22</div>
                    <div className="onl3">
                        <div className="onl_online1"></div>
                    </div>
                </div>
                <div className="Messages">
                        <div className="message1">
                            <div className="foto">
                                <img src={Ellipse61} alt="" className="small"/>
                            </div>
                            <div className="mess">
                                <div className="meesage_frame">
                                    <p className="hello">Привет</p>
                                    <p className="hello">Как дела?</p>
                                </div>
                            </div>
                        </div>
                        <div className="message1 top right">
                        <div className="mess right">
                                <div className="meesage_frame blue">
                                    <p className="hello">Хорошо</p>
                                    <p className="hello">А у тебя?</p>
                                </div>
                            </div>
                            <div className="foto right">
                                <img src={Ellipse9} alt="" className="small"/>
                            </div>
                        </div>
                        <div className="message1 top">
                        <div className="foto">
                                <img src={Ellipse61} alt="" className="small"/>
                            </div>
                            <div className="mess">
                                <div className="meesage_frame">
                                    <p className="hello left">У меня тоже все хорошо. Чем занимаешся?</p>
                                </div>
                            </div>
                        </div>
                        <div className="message1 top right">
                        <div className="mess right">
                                <div className="meesage_frame blue auto">
                                    <p className="hello">Да я просто отдыхаю</p>
                                    <p className="hello">Только что с спортзала пришёл</p>
                                    <p className="hello">Сейчас буду ужинать</p>
                                </div>
                            </div>
                            <div className="foto right">
                                <img src={Ellipse9} alt="" className="small"/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="input_chek">
                <div className="inp_chek">
                    <input type="text" className="inp_message" placeholder="Написать сообщение..."/>
                    <img src={Send} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
