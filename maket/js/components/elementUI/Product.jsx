import React from "react";



export default ({idProd, prodList})=>{
    const element = prodList[idProd]
    return(
        <div className="product bchGray">
            <div id="equalSides" className="product__top">
                <picture>
                    <source srcSet={element.url}/>
                    <img src={element.altUrl} alt={element.altText} />
                </picture>
                <img src={element.url} alt="" />
                <div className="img-mask"></div>
                <div className="product__sale">-{Math.floor((element.oldPrise - element.newPrise)/element.oldPrise*100)}%</div>
            </div>
            <div className="product__bottom">
                <div className="product__prise">
                    <div className="product__prise-new">{element.newPrise} ₽</div>
                    <div className="product__prise-old">{element.oldPrise} ₽</div>
                </div>
                <div className="product__title">{element.title}</div>
                <button className="product__button">В корзину</button>
            </div>
        </div>
    )
}