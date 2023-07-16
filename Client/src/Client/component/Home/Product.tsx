import { ICate } from "../../../Interface/category";
import { Iproduct } from "../../../Interface/product";
import { useCategoryQuery, useCategorysQuery } from "../../../Redux/API/API"
import { useState } from "react";


const Product = () => {
  const {data : product} = useCategoryQuery();
  console.log(product);
  const [Current = product?.data[0]._id , SetCurrent] = useState(product?.data[0]._id);
     const TakeIdData = (id : any) => {
      SetCurrent(id)
     };
     const {data : GetOne} = useCategorysQuery(Current);
     
  return (
    <div className="Wall_Product" >
      <div className="Title_Product">
        <div className="heading_title" ><h2>NEW ARRIVALS</h2></div>
        <div className="heading_subtitle" ><p>New Top Trendy Fashion Winter Clothes</p></div>
      </div>
      <div className="menu_product">
        <div className="menu_nav" > 
         <div className="menu_ul">
          <ul>
            {
              product && product?.data.map((item : ICate) => <li key={item._id} onClick={() => TakeIdData(item._id)} >{item.Cate_Name}</li>)
            }
          </ul>
         </div>
         </div>
        <div className="menu_product_list" >  
        <div className="menu_wall">
          {
            GetOne?.data.Product.map((item : Iproduct) => {
              return   (      
                <div className="item" key={item._id} >
                <div className="item_heading">
                  <div className="item_heading_img">
                    <img src={item.Product_Image} alt="" />
                  </div>
                  <div className="item_heading_title">Available Colors</div>
                </div>
                <div className="item_bottom">
                  <div className="item_bottom_name">
                    <a href={`/Product_Detail/${item._id}`}>{item.Product_Name}</a>
                  </div>
                  <div className="item_bottom_price">
                    <p>${item.Product_Price}</p>
                  </div>
                </div>
              </div>)
            })
          }

        </div>
        </div>
      </div>
    </div>
  )
}
export default Product