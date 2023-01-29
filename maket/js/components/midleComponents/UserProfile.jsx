import React from "react";
import ElementAdvertisement from "@elementUI/ElementAdvertisement.jsx"

export default (props)=>{
    return(
        <>
            <ElementAdvertisement type='line' sorce={{url:"./img/Advertisement/midleAdvertisement-sale-image.jpg", 
            className:'bold', altText:''}}/>

            <div className="mainUserProfile__element">
                <div className="mainUserProfile__element-title">Мои данные</div>
                <div className="mainUserProfile__element-item-box">
                    <div className="mainUserProfile__element-item bchGray">
                        <div className="mainUserProfile__element-item-data-title ">Оформить подписку</div>
                        <div className="mainUserProfile__element-item-data-main">
                            <img src="./img/icon/user-prem.png" alt="" />
                            <span>Premium</span>
                        </div>
                    </div>
                    <div className="mainUserProfile__element-item bchGray">
                    <div className="mainUserProfile__element-item-data-title">Балы и бонусы</div>
                        <div className="mainUserProfile__element-item-data-main">
                            <img src="./img/icon/user-point.png" alt="" />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mainUserProfile__element">
                <div className="mainUserProfile__element-title">Финансы</div>
                <div className="mainUserProfile__element-item-box">
                    <div className="mainUserProfile__element-item notHover bigItem bchGray">
                    <div className="mainUserProfile__element-item-data-title">Используйте промокод</div>
                        <form className="mainUserProfile__element-item-form" action="">
                            <input onInput={inputDisabledFn} className="mainUserProfile__element-item-input" 
                            type="text" placeholder="Введите промокод или сертификат" />
                            <button disabled className="mainUserProfile__element-item-button">Применить</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mainUserProfile__element ">
                <div className="mainUserProfile__element-title">Сервис и помощь</div>
                <div className="mainUserProfile__element-item-box ">
                    <div className="mainUserProfile__element-item bchGray">Условия оплаты</div>
                    <div className="mainUserProfile__element-item bchGray">Условия возврата</div>
                </div>
            </div>
        </>
    )
}

function inputDisabledFn(event){
    const button = event.target.nextSibling
    if(!!event.target.value){
        button.classList.add('unlock')
        button.disabled = false
    }else{
        button.classList.remove('unlock')
        button.disabled = true
    }
}
