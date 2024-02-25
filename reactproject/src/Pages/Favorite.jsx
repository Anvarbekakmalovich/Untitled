import React from "react";
import united1 from "../Images/united-states-of-america.png";
import loveBirds from "../Images/love-birds 1.png";
import Ellipse3 from "../Images/Ellipse 3.png";
import russia from "../Images/russia 1.png"
import Def0 from "../Images/0Default.png"
import "../CSS/Favorite.css";

function Favorite() {
  return (
    <div className="BOX6">
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
              <div className="restangle14 res14">123</div>
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
      <div className="Main_tarif">
        <div className="menuFavorite">
            <div className="navigation"></div>
        </div>
        <div className="Main_tarif2">
          <div className="tarif_title">
            <p className="tarif_t">Тарифы</p>
          </div>
          <div className="tarif_main">
          <div className="topCard">
            <div className="card_texts">
              <div className="text1">
                <p className="name">Виктор 22</p>
              </div>
              <div className="text2">
                <div className="Ellipse4"></div>
              </div>
            </div>
            <div className="card_texts2">
              <img src={russia} alt="" />
              <p className="rus_text">Россия</p>
            </div>
            <button className="card_button">
              <p className="btn_t">Поприветствовать</p>
              <img src={Def0} alt="" />
            </button>
          </div>
          <div className="topCard card2">
            <div className="card_texts">
              <div className="text1">
                <p className="name">Марина 19</p>
              </div>
              <div className="text2">
                <div className="Ellipse4"></div>
              </div>
            </div>
            <div className="card_texts2">
              <img src={russia} alt="" />
              <p className="rus_text">Россия</p>
            </div>
            <button className="card_button">
              <p className="btn_t">Поприветствовать</p>
              <img src={Def0} alt="" />
            </button>
          </div>
          <div className="topCard card3">
            <div className="card_texts">
              <div className="text1">
                <p className="name">Алексей 34</p>
              </div>
              <div className="text2">
                <div className="Ellipse4"></div>
              </div>
            </div>
            <div className="card_texts2">
              <img src={russia} alt="" />
              <p className="rus_text">Россия</p>
            </div>
            <button className="card_button">
              <p className="btn_t">Поприветствовать</p>
              <img src={Def0} alt="" />
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="FOOOOT">
      <footer className="footer foot_tarif">
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

export default Favorite;
