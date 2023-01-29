import React from "react";
import BasketProducts from "@midleComponents/BasketProducts.jsx";

export default (props)=>{
    return(
        <div className="mainBasket">
            <div className="mainBasket__container">
                <div className="mainBasket__title">Корзина</div>
                <div className="mainBasket__box">
                    <div className="mainBasket__left bchGray">
                        <div className="mainBasket__list">
                            <div className="mainBasket__list-top">
                                <button id="inputCh" className="mainBasket__list-button-all">
                                    <div className="inputCh"><input type="checked"/></div>
                                    <span>Выбрать все</span>
                                </button>
                                <button className="mainBasket__list-button-del">Удалить выбранные</button>
                            </div>
                            <div className="mainBasket__list-bottom">
                                <BasketProducts idList={[11, 38]} prodList={props.prodList}/>
                            </div>
                        </div>
                    </div>
                    <div className="bchGray mainBasket__right">
                        <div className="mainBasket__right-item">
                            <button className="mainBasket__right-button">Перейти к оформлению</button>
                            <div className="mainBasket__right-text">
                                Доступные способы и время доставки можно выбрать при оформлении заказа
                            </div>
                        </div>
                        <div className="mainBasket__right-item">
                            <div className="mainBasket__right-item-box">
                                <div className="mainBasket__right-item-title">Ваша корзина</div>
                                <div className="mainBasket__right-item-text gray fz12">2 товара • 595 гр</div>
                            </div>
                            <div className="mainBasket__right-item-box">
                                <div className="mainBasket__right-item-text">Товары (2)</div>
                                <div className="mainBasket__right-item-text bold">2 100 ₽</div>
                            </div>
                            <div className="mainBasket__right-item-box">
                                <div className="mainBasket__right-item-minibox">
                                    <div className="mainBasket__right-item-text">Скидка</div>
                                    <div className="mainBasket__right-item-text blue">Подробнее</div>
                                </div>
                                <div className="mainBasket__right-item-text bold red">- 887 ₽</div>
                            </div>
                        </div>
                        <div className="mainBasket__right-item">
                            <div className="mainBasket__right-item-box">
                                <div className="mainBasket__right-item-title">Общая стоимость</div>
                                <div className="mainBasket__right-item-title-prise">1 213 ₽</div>
                            </div>
                            <div className="mainBasket__right-item-box">
                                <div className="mainBasket__right-item-text">При оплате Ozon Картой</div>
                                <div className="mainBasket__right-item-text green">1 200 ₽</div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}