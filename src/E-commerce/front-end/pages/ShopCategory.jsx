import React, { useContext } from 'react'
import './CSS/shopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/item/Item'


const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='Shop-category'>
      <img className="shopccategory-banner"src={props.banner} alt="" id='img-banner'/>
      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out f 36 products 
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">

        {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>

    </div>
  )
}

export default ShopCategory