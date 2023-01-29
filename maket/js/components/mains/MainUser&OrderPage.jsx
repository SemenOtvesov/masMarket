import React from "react";
import { NavLink } from "react-router-dom";

export default (props)=>{
    if(props.user.id){
        return(
            <div className="mainUserProfile">
                <div className="mainUserProfile__container">
                    <div className="mainUserProfile__left">
                        <div className="mainUserProfile__info-item">
                            <div id="equalSides" className="mainUserProfile__info-logo">
                                <img src={props.user.urlLogo} alt="loading error logo image" />
                            </div>
                            <div className="mainUserProfile__info-name">{`${props.user.name} ${props.user.subname}`}</div>
                            <button className="mainUserProfile__info-button">Изменить профиль</button>
                        </div>

                        <div className="mainUserProfile__info-item">
                            <div className="mainUserProfile__info-title">Личная информация</div>
                            <ul className="mainUserProfile__info-list">
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/userProfile'}>Главная</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Баллы и бонусы</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Сохраненные карты</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Store Premium</NavLink></li>
                            </ul>
                        </div>
                        <div className="mainUserProfile__info-item">
                            <div className="mainUserProfile__info-title">Заказы</div>
                            <ul className="mainUserProfile__info-list">
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Моя корзина</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/order'}>Мои заказы</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои возвраты</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Купленные товары</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Электронные чеки</NavLink></li>
                            </ul>
                        </div>
                        <div className="mainUserProfile__info-item">
                            <div className="mainUserProfile__info-title">Отзывы и вопросы о товарах</div>
                            <ul className="mainUserProfile__info-list">
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои отзывы</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Мои вопросы и ответы</NavLink></li>
                            </ul>
                        </div>
                        <div className="mainUserProfile__info-item">
                            <div className="mainUserProfile__info-title">Подписки</div>
                            <ul className="mainUserProfile__info-list">
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Избранное</NavLink></li>
                                <li className="mainUserProfile__info-list-item"><NavLink to={'/'}>Настройки уведомлений</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mainUserProfile__right">
                        <props.rigthContent prodList={props.prodList}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="mainUserProfile__nonDef">
                <div className="mainUserProfile__nonDef-title">Вы ещё не вошли в аккаунт</div>
                <button className="mainUserProfile__nonDef-button hover__button">Войти</button>
            </div>
        )
    }
}