import React from "react";
import united1 from "../Images/united-states-of-america.png";
import loveBirds from "../Images/love-birds 1.png";
import Ellipse3 from "../Images/Ellipse 3.png";
import "../CSS/number404.css";

function Number() {
  return (
    <div className="BOX6">
      <div className="back"></div>
      <div className="back1"></div>
      <div className="back2"></div>
      <div className="back3"></div>
      <div className="back4"></div>
      <div className="back5">
        <div className="num404">
          <p className="num4">404</p>
          <p className="text4">Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
        </div>
        <div className="btn404">
          <button className="button404"><i class="fa-solid fa-chevron-left i44"></i> <a href="" className="t444"><p className="text444">Вернуться назад</p></a></button>
        </div>
      </div>
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

      <div className="FOOOOT">
        <footer className="footer foot404">
          <div className="links1 link100">
            <a href="" className="about">
              О нас
            </a>
            <a href="" className="about">
              Поддержка
            </a>
            <a href="" className="about">
              Советы
            </a>
            <a href="" className="about">
              Контакты
            </a>
            <a href="" className="about">
              Правила оплаты
            </a>
          </div>
          <div className="links2 link100">
            <a href="" className="about">
              Политика обработки персональных данных
            </a>
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

export default Number;
