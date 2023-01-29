import React from "react"
import { NavLink } from "react-router-dom"

export default ()=>{
    return(
        <div className="header">
            <div className="header__container">
                <div className="header__box-top">
                        <NavLink to={'/'}>
                            <div className="header__box-top-item">
                                <div className="header__title-box">
                                    <img src="/img/icon/logo.png" alt="" />
                                </div>
                            </div>
                        </NavLink>
                    <div className="header__box-top-item">
                        <button className="header__catalog hover__button">
                            <img src="/img/icon/menu-bar.png" alt="" />
                            Catalog
                        </button>
                    </div>
                    <div className="header__box-top-item header__box-top-item-input">
                        <div className="header__input-box">
                            <div className="header__input-categories-box">
                                <button className="header__input-categories">
                                    <div className="header__input-categories-text">Everywhere</div>
                                    <div className="header__input-categories-arrow"></div>
                                </button>
                                <input className="header__input" type="text" placeholder="Search on Store"/>
                            </div>
                            <button className="header__input-search-box hover__button">
                                <img src="/img/icon/input-seach.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <NavLink to={'/userProfile'} className="header__box-top-item-button">
                        <button className="header__box-top-item">
                            <div className="header__user-button">
                                <img src="/img/icon/user-logo.png" alt="" />
                                <div className="header__user-button-text">Имя пользователя</div>
                            </div>
                        </button>
                    </NavLink >
                    <NavLink to={'/order'} className="header__box-top-item-button">
                        <button className="header__box-top-item ">
                            <div className="header__user-button">
                                <img src="/img/icon/order-logo.png" alt="" />
                                <div className="header__user-button-text">Заказы</div>
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to={'/favorites'} className="header__box-top-item-button">
                        <button className="header__box-top-item ">
                            <div className="header__user-button">
                                <img src="/img/icon/favorites-logo.png" alt="" />
                                <div className="header__user-button-text">Избранное</div>
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to={'/basket'} className="header__box-top-item-button">
                        <button className="header__box-top-item ">
                            <div className="header__user-button">
                                <img src="/img/icon/backet-logo.png" alt="" />
                                <div className="header__user-button-text">Корзина</div>
                            </div>
                        </button>
                    </NavLink>
                </div>
                <div className="header__box-bottom">
                    <button className="header__box-bottom-item">1 Chapter</button>
                    <button className="header__box-bottom-item">2 Chapter</button>
                    <button className="header__box-bottom-item">3 Chapter</button>
                    <button className="header__box-bottom-item">4 Chapter</button>
                    <button className="header__box-bottom-item">5 Chapter</button>
                    <button className="header__box-bottom-item">6 Chapter</button>
                    <button className="header__box-bottom-item">7 Chapter</button>
                    <button className="header__box-bottom-item">8 Chapter</button>
                    <button className="header__box-bottom-item">9 Chapter</button>
                    <button className="header__box-bottom-item">10 Chapter</button>
                </div>
            </div>
        </div>
    )
}