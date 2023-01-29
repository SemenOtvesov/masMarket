import React from 'react'

export default (props)=>{
    return (
        <div className="topProduct">
            <div className="topProduct__title"><span>Top product</span> have time to buy!</div>
            <div className="topProduct__products">
             {createProduts(props)}
            </div>
        </div>
    )
}

function createProduts({idList, prodList}){
    return idList.map(elem=>{
        if(prodList[elem]){
            return(
                <div key={prodList[elem].url} className='topProduct__product'>
                    <div id='equalSides' className="topProduct__product-top">
                        <div className="img-mask"></div>
                        <img src={prodList[elem].url} alt="" />
                    </div>
                    <div className="topProduct__product-bottom">
                        <div className="topProduct__product-oldPrise">
                            <span className='topProduct__product-oldPrise-text'>{prodList[elem].oldPrise} ₽</span>
                            <span className='topProduct__product-oldPrise-percent'>
                                -{Math.floor((prodList[elem].oldPrise - prodList[elem].newPrise)/prodList[elem].oldPrise*100)}%
                            </span>
                        </div>
                        <div className="topProduct__product-newPrise">{prodList[elem].newPrise} ₽</div>
                        <div className="topProduct__product-quantity">
                            <div className="topProduct__product-quantity-text">{prodList[elem].quantity} шт.</div>
                            <div className="topProduct__product-quantity-line">
                                <span style={{width:prodList[elem].quantity/prodList[elem].fullQuantity*100+'%'}}></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })
    console.log(element)
}