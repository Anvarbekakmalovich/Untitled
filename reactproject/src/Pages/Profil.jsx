import React from "react";
import united1 from "../Images/united-states-of-america.png";
import loveBirds from "../Images/love-birds 1.png";
import Ellipse3 from "../Images/Ellipse 3.png";
import Restangle16 from "../Images/Rectangle 16.png";
import Restangle17 from "../Images/Rectangle 17.png";
import Restangle18 from "../Images/Rectangle 18.png";
import Restangle19 from "../Images/Rectangle 19.png";
import Vector5 from "../Images/Vector (5).png";
import Def0 from "../Images/0Default.png";
import "../CSS/Profil.css";

function Profil() {
  return (
    <div className="BOX">
      <div className="nav">
        <div className="navIn">
          <div className="nav_text">Знакомства по всему миру</div>
          <div className="accord">
            <div className="accordion1">
              <img className="USA" src={united1} alt="" />
              <div className="nav_text2">Америка</div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="nav2">
          <div className="logo">
            <img src={loveBirds} alt="" className="birdLogo" />
            <p className="bird_text">Znakomstva.com</p>
          </div>

          <div className="menu">
            <div className="aBox">
              <a href="#" className="menuA">
                Анкеты
              </a>
            </div>
            <div className="aBox">
              <a href="#" className="menuA">
                Сообщения
              </a>
            </div>
            <div className="aBox">
              <a href="#" className="menuA">
                Подписка
              </a>
            </div>
          </div>

          <div className="location">
            <p className="location_text">Россия</p>
            <i class="fa-solid fa-chevron-down i1"></i>
          </div>

          <div className="group1">
            <div className="icons">
              <i class="fa-solid fa-magnifying-glass i1"></i>
              <i class="fa-solid fa-bell i1"></i>
              <div className="restangle14">123</div>
            </div>
          </div>

          <div className="user">
            <div className="image">
              <img src={Ellipse3} alt="" />
            </div>
            <p className="img_t">Иван Иванов</p>
          </div>
          <div className="menu_Group">
            <i class="fa-solid fa-bars i2"></i>
          </div>
        </div>
      </div>
      <div className="Main5">
        <div className="main5">
          <div className="Ellipse3">
            <i class="fa-solid fa-chevron-left i"></i>
          </div>
          <div className="CardsPr">
            <div className="Card">
              <div className="img_foto">
                <div className="Icon_love">
                  <div className="imgLove">
                    <img src={Vector5} alt="" />
                  </div>
                  <div className="iconLove">
                    <div className="loveCircle">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pr_icon">
                <img src={Restangle16} alt="" className="foto" />
                <img src={Restangle17} alt="" className="foto" />
                <img src={Restangle18} alt="" className="foto" />
                <img src={Restangle19} alt="" className="foto" />
              </div>
            </div>
            <div className="Texts">
              <div className="user1">
                <div className="username">
                  <p className="name2">Виктор 22</p>
                </div>
                <div className="onlayn">
                  <div className="onl"></div>
                </div>
              </div>
              <div className="But">
                <button className="card_button c_b">
                  <p className="btn_t">Поприветствовать</p>
                  <img src={Def0} alt="" />
                </button>
              </div>
              <div className="InText5">
                <div className="inT1">
                  <div className="inTexts1">
                    <div className="inT_11">
                      <p className="komp">Ставка</p>
                    </div>
                    <div className="inT_12">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11">
                      <p className="komp">15 654 руб</p>
                    </div>
                  </div>
                  <div className="inTexts1">
                    <div className="inT_11">
                      <p className="komp sm">Рост</p>
                    </div>
                    <div className="inT_12 sm1">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11">
                      <p className="komp">186 см</p>
                    </div>
                  </div>
                  <div className="inTexts1">
                    <div className="inT_11">
                      <p className="komp">Вес</p>
                    </div>
                    <div className="inT_12">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11">
                      <p className="komp">80 кг</p>
                    </div>
                  </div>
                  <div className="inTexts1">
                    <div className="inT_11 bg">
                      <p className="komp">Цвет глаз</p>
                    </div>
                    <div className="inT_12 bg1">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11">
                      <p className="komp">голубые</p>
                    </div>
                  </div>
                  <div className="inTexts1">
                    <div className="inT_11 bg">
                      <p className="komp">Цвет волос</p>
                    </div>
                    <div className="inT_12 bg1">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11">
                      <p className="komp">светлые</p>
                    </div>
                  </div>
                  <div className="inTexts1">
                    <div className="inT_11 bg2">
                      <p className="komp">Цель знакомства</p>
                    </div>
                    <div className="inT_12 bg3">
                      <hr />
                    </div>
                    <div className="inT_13 inT_11 bg4">
                      <p className="komp">пока не знаю</p>
                    </div>
                  </div>
                </div>
                <div className="inT1">
                    <p className="Bosh bot">О себе</p>
                    <p className="bigText bot1">Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития. 
                    Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.</p>
                    <p className="sayt">На сайте с 21.08.2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Ellipse3 el4">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="Foott">
      <footer className="footer foot1 foot5">
                <div className="links1 link100">
                    <a href="" className="about">О нас</a>
                    <a href="" className="about">Поддержка</a>
                    <a href="" className="about">Советы</a>
                    <a href="" className="about">Контакты</a>
                    <a href="" className="about">Правила оплаты</a>
                </div>
                <div className="links2 link100">
                    <a href="" className="about">Политика обработки персональных данных</a>
                </div>
                <div className="links3 link100">
                    <p className="link3_lang">RU</p>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="links4 link100">
                    <p className="link4_text">© Company 2021</p>
                </div>
            </footer>
            </div>
    </div>
  );
}

export default Profil;
