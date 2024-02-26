import React from "react";
import united1 from "../Images/united-states-of-america.png";
import loveBirds from "../Images/love-birds 1.png";
import Ellipse3 from "../Images/Ellipse 3.png";
import russia from "../Images/russia 1.png";
import Def0 from "../Images/0Default.png";
import "../CSS/PersonalAccount.css";

function PersonalAccount() {
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
          <div className="navigation">
            <div className="text">
              <div className="icon_text">
                <i class="fa-solid fa-user i5"></i>
                <p className="profil"><a href="" className="profil">Профиль</a></p>
              </div>
            </div>
            <div className="text text4">
              <div className="icon_text i_t2">
                <i class="fa-solid fa-bookmark i5"></i>
                <p className="profil"><a href="" className="profil">Избранное</a></p>
              </div>
            </div>
            <div className="text text4">
              <div className="icon_text">
                <i class="fa-solid fa-wallet i5"></i>
                <p className="profil"><a href="" className="profil">Личный счет</a></p>
              </div>
            </div>
            <div className="text text4 bot">
              <div className="icon_text">
                <i class="fa-solid fa-right-from-bracket i5"></i>
                <p className="profil"><a href="" className="profil">Личный счет</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="Main_tarif2">
          <div className="tarif_title">
            <p className="tarif_t">Личный счет</p>
          </div>
          <div className="tarif_main">
            <div className="tarif_main2">
                <div className="text_acc">
                    <p className="acc_text">Статус подписки</p>
                    <p className="acc_text">На месяц, до 20.11.2021</p>
                </div>
                <hr className="hr_account" />
                <div className="text_acc">
                    <p className="acc_text">Текущий баланс</p>
                    <p className="acc_text">2548 руб</p>
                </div>
                <div className="btn_acc">
                <button className="account_btn">Пополнить</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FOOOOT">
        <footer className="footer foot_tarif">
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

export default PersonalAccount;
