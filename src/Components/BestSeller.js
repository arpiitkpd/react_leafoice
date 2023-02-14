import React from 'react'
import ShopItem from './ShopItem'

function BestSeller() {
  return (
    <>
    <div className="head d-flex justify-content-around"><h2>Best Seller..</h2>
        <a href="/"className='shop-arr'>Shop&rarr;</a>

    </div>
    <div className="container d-flex justify-content-center">
        <ShopItem price="$67.9" details="Cactus" itemImg="cactus-img"/>
        <ShopItem price="$67.9" details="High and Metra" itemImg="high-img"/>
        <ShopItem price="$67.9" details="Metaphor" itemImg="metaphor-img"/>
        
    </div>
    </>
  )
}

export default BestSeller