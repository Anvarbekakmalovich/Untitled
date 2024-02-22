import React from "react";
import "../CSS/LogIn.css";
import Vector3 from "../Images/Vector (3).png";
import Vector4 from "../Images/Vector (4).png";
import united1 from "../Images/united-states-of-america.png";
import loveBirds from "../Images/love-birds 1.png";

function LogIn() {
  return (
    <div className="Box2">
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
      <div className="Nav">
        <div className="Navbar">
          <div className="logo">
            <img src={loveBirds} alt="" className="birdLogo" />
            <p className="bird_text">Znakomstva.com</p>
          </div>
          <div className="Create">
            <p className="create_ac">Впервые здесь?</p>
            <button className="createBtn">
              <a href="" className="cr_btn_t">
                Регистрация
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="Main3">
        <div className="InMain3">
          <p className="inMain_h">Знакомства без преград</p>
          <p className="pText">
            Для современного мира сплочённость команды профессионалов однозначно
            фиксирует необходимость системы обучения кадров, соответствующей
            насущным потребностям.
          </p>
          <form className="parol">
            <div className="cr_input Email">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                className="inpCr email"
                placeholder="Введите электронную почту"
              />
            </div>
            <div className="cr_input Email Password">
              <i class="fa-solid fa-lock block"></i>
              <input
                type="email"
                className="inpCr email"
                placeholder="Введите пароль"
              />
              <i class="fa-solid fa-eye block"></i>
            </div>
            <button className="btnCreate">Создать аккаунт</button>
            <a href="#" className="forgot">
              Я не помню пароль
            </a>
          </form>
        </div>
      </div>
      <footer className="footer foot1 foot2">
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
      <div className="Images">
        <img src={Vector3} alt="" />
        <img src={Vector4} alt="" />
      </div>
    </div>
  );
}

export default LogIn;
