import React from "react";

export default({id, prodList})=>{
    const element = prodList[id]
    console.log(element)
    return(
        <div className="mainBasket__list-item">
            <div className="mainBasket__list-item-left">
                <button id="inputCh" className="mainBasket__list-button-all mainBasket__list-item-checked">
                    <div className="inputCh"><input type="checked"/></div>
                </button>
                <div id="equalSides" className="mainBasket__list-item-img">
                    <picture>
                        <source  srcSet={element.url}/>
                        <img src={element.altUrl} alt={element.altText} />
                    </picture>
                </div>
                <div className="mainBasket__list-item-textBox">
                    <div className="mainBasket__list-item-textBox-title">{element.title}</div>
                    <div className="mainBasket__list-item-textBox-params">
                        <div className="mainBasket__list-item-textBox-param">300 гр</div>
                    </div>
                    <div className="mainBasket__list-item-textBox-installment">Частями по {Math.round(element.newPrise/12)} ₽ / мес</div>
                    <div className="mainBasket__list-item-buttonBox">
                        <button className="mainBasket__list-item-button">В избранное</button>
                        <button className="mainBasket__list-item-button">Удалить</button>
                    </div>
                </div>
                <div className="mainBasket__list-item-priseBox">
                    <div className="mainBasket__list-item-priseBox-newPrise">664 ₽</div>
                    <div className="mainBasket__list-item-priseBox-oldPrise">1 023 ₽</div>
                </div>
            </div>
            <div className="mainBasket__list-item-right">
            <div id="select" className="mainBasket__list-item-select">
                    <button className="mainBasket__list-item-select-button"><div id="text"></div> <span/></button>
                    <ul className="mainBasket__list-item-select-list">
                        <li id="selectItem" value={'1'} className="mainBasket__list-item-select-item selected">{1}</li>
                        {[2,3,4,5,6,7,8,9,10].map(el=>{
                            return <li key={`selectItem${el}`} 
                            id="selectItem" value={el} className="mainBasket__list-item-select-item">{el}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}