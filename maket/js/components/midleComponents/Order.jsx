import React, {useEffect, useMemo}from "react";
import { NavLink } from "react-router-dom";
import OrderEl from "@elementUI/OrderItem.jsx";

//fetch
const userOrders = [
    {number:'1', prodId:'10', date: '1673982817732', endDate:'16734982817732', state: true, prise: 379},
    {number:'3', prodId:'30', date: '1673982817742', endDate:'16739828147732', state: false, prise: 3379},
    {number:'5', prodId:'56', date: '1673982817752', endDate:'167398218174732', state: true, prise: 3749},
    {number:'314', prodId:'14', date: '1673982817602', endDate:'161739828417732', state: false, prise: 35479},
]
const yearOrders = [2021, 2020, 2001, 2023].sort((a,b)=>a-b)

export default (props)=>{
    return(
        <div className="mainOrder">
            <div className="mainOrder__title-box">
            <NavLink className="mainOrder__title" to={'/order'}>Заказы</NavLink>
            <NavLink className="mainOrder__title" to={'/purchasedGoods'}>Купленные товары</NavLink>
            </div>
            <div id="select" className="mainOrder__select">
                <button className="mainOrder__select-button"></button>
                <ul className="mainOrder__select-list">
                    <li id="selectItem" value={'Все'} className="mainOrder__select-item selected">Все</li>
                    <li id="selectItem" value={'Ожидают оплаты'} className="mainOrder__select-item">Ожидают оплаты</li>
                    <li id="selectItem" value={'В работе'} className="mainOrder__select-item">В работе</li>
                    <li id="selectItem" value={'Выполненные'} className="mainOrder__select-item">Выполненные</li>
                    <li id="selectItem" value={'Отменённые'} className="mainOrder__select-item">Отменённые</li>
                </ul>
            </div>
            <div className="mainOrder__year-box">
                {yearOrders.map(el=><div key={el} className="mainOrder__year">{el} г.</div>)}
            </div>
            <div className="mainOrder__list">
                {userOrders.map(el=><OrderEl key={el.date} order={el} prodList={props.prodList}/>)}
            </div>
        </div>
    )
}