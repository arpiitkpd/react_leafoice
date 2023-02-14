import React from 'react'

function ShopItem(props) {
  return (
    <>
    <div className="shopItem" style={{margin:"0px 5px 0px 5px"}}>
          <div className={`${props.itemImg}`}></div>
           <a href="/" className='details'>{props.details} </a>
           <div className='d-flex justify-content-between price'>{props.price} <a href="/" className='shop-btn'>&rarr;</a> </div>
          
           
 </div>
    </>
  )
}

export default ShopItem