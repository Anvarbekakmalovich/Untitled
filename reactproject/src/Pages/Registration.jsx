import React from "react";
import "../CSS/Registration.css"
import Vector from "../Images/Vector (1).png"
import Vector1 from "../Images/Vector (2).png"
import united1 from "../Images/united-states-of-america.png"
import loveBirds from "../Images/love-birds 1.png"
import girl from "../Images/0 - Default.png"
import boy from "../Images/1 - Default.png"

function Registration() {
    return(
        <div className="Box1">
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
            <div className="Navbar">
                <div className="logo">
                    <img src={loveBirds} alt="" className="birdLogo"/>
                    <p className="bird_text">Znakomstva.com</p>
                </div>
                <div className="Create">
                    <p className="create_ac">Уже есть аккаунт?</p>
                    <button className="createBtn">
                        <a href="" className="cr_btn_t">Войти</a>
                    </button>
                </div>
            </div>
            <div className="Create_main">
                <div className="Cr_account">
                    <p className="cr_acc">Создай новый аккаунт</p>
                    <p className="acc_text">Присоединяйся к сообществу из 518 млн человек!</p>
                    <form className="Form">
                        <div className="cr_input">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" className="inpCr" placeholder="Ваше имя"/>
                        </div>
                    </form>
                    <div className="Data">
                        <div className="data">
                            <p className="data_text acc_text">Дата рождения</p>
                        </div>
                        <div className="inputs">
                            <div className="Day">
                                <input type="text" className="day" placeholder="День"/> 
                            </div>
                            <div className="Month">
                                <input type="text" className="month" placeholder="Месяц"/> 
                                <i class="fa-solid fa-chevron-down"></i> 
                            </div>
                            <div className="Year">
                                <input type="text" className="year" placeholder="Год"/>
                            </div>
                        </div>
                        <div className="gender">
                            <div className="boy">
                                <img src={boy} alt="" />
                            </div>
                            <div className="boy girl">
                                <img src={girl} alt="" />
                            </div>
                        </div>
                        <form className="parol">
                            <div className="cr_input Email">
                                <i class="fa-solid fa-envelope"></i>
                                <input type="email" className="inpCr email" placeholder="Введите электронную почту"/>
                            </div>
                            <div className="cr_input Email Password">
                                <i class="fa-solid fa-lock block"></i>
                                <input type="email" className="inpCr email" placeholder="Введите пароль"/>
                                <i class="fa-solid fa-eye block"></i>
                            </div>
                            <button className="btnCreate">Создать аккаунт</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer foot1">
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
            <div className="images">
                <img src={Vector} alt="" className="img_vector"/>
                <img src={Vector1} alt="" className="img_vector1"/>                
            </div>
        </div>
    )
}

export default Registration;