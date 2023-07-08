import { Iproduct } from "../../../Interface/product";
import { useProductQuery } from "../../../Redux/API/API";

const BestSeller = () => {
  const {data} = useProductQuery();
  const Current = data?.data.slice(0, 8);
  
  
  return (
    <div className="BestSeller_wall">
        <div className="View_wall">
            <div className="wall_child">
                <div className="line">
                    <p></p>
                </div>
                 <div className="View_more">
                    <a href="">View More</a>
                </div>
                <div className="line">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="Banner_wall">
            <div className="Banner_wrapper" >
                <div className="Banner_shoe">
                    <a href="/"><img src="../../../../public/Image/e_mid_banner1.jpg" alt="" /></a>
                </div>
                <div className="Banner_clock">
                <a href="/"><img src="../../../../public/Image/e_mid_banner2.jpg" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="Best_sellproduct">
            <div className="Best_sellproduct_child">
                <div className="Best_sell_title">
                  <h1>Best Seller</h1>
                  <p>Exclusive products have just arrived. Check them out</p>
                </div>
                <div className="Sell_production">
                  {
                    Current?.map((item : Iproduct) => 
                    <div className="item_product"  key={item._id}>
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
                  }

              </div>
            </div>
        </div>
    </div>
  )
}
export default BestSeller;