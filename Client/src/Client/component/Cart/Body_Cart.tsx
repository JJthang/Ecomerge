import { Iproduct } from "../../../Interface/product";
import { useGet_One_CartQuery } from "../../../Redux/API/API";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Body_Cart = () => {
    const User = localStorage.getItem("user")
    const Take_user = JSON.parse(User || '{}');
    const {data} = useGet_One_CartQuery(Take_user.user._id);
    let total = 0;
    let product_total = 0;
  return (
    <div className="Wrap_body_Cart">
        <div className="Cart_title">
            <h2>Shopping Cart</h2>
            <p><a href="/">Home</a> / <a href="">Cart</a></p>
        </div>
        <div className="Cart_table">
            <div className="Cart_table_container">
                <div className="table_child">
                 <table className="table">
                     <thead>
                        <tr>
                         <th scope="col">Name</th>
                         <th scope="col">Image</th>
                         <th scope="col">Price</th>
                         <th scope="col">quantity</th>
                         <th scope="col">Total Price</th>
                         <th scope="col">Action</th>
                   </tr>
                     </thead>
                     <tbody>
                        {
                            User && data?.data.List_Product.length > 0 ? data?.data.List_Product.map((item : any, index : number) => 
                            <tr key={index}  >
                            <td >{item.Product_Name}</td>
                            <td><img src={item.Product_Image} alt="" /></td>
                            <td>{item.Product_Price}</td>
                            <td>{item.Quantity}</td>
                            <td>{parseInt(item.Product_Price) * parseInt(item.Quantity) }</td>
                            <td><button><i className="fa-solid fa-x"></i></button></td>
                       </tr>) : <tr>
                            <td ></td>
                            <td></td>
                            <td></td>
                            <td><ShoppingBagIcon /> <p>no orders</p></td>
                            <td></td>
                            <td></td>
                       </tr>
                        }
                     </tbody>
                  </table>
                </div>
                <div className="table_total">
                    <div className="table_total_wrap">
                        <div className="table_total_tit">
                            <h6>Cart Totals Summary</h6>
                        </div>
                        <div className="table_total_Price">
                        {
                        User && data?.data.List_Product.length > 0 ? data?.data.List_Product.map((item : any, index : number) =>{
                            total += parseInt(item.Product_Price) * parseInt(item.Quantity);
                            product_total += parseInt(item.Quantity);
                            return <div className="Subtotal" key={index}>
                            <div className="Subtotal_child">
                                <div className="Subtotal_child_name"><p>Grand Total : </p></div>
                                <div className="Subtotal_child_price">${total}</div>
                            </div>  
                            <div className="Subtotal_child">
                                <div className="Subtotal_child_name"><p>the number of products:</p></div>
                                <div className="Subtotal_child_price">{product_total}</div>
                            </div> 
                        </div>
                        }) :  <div className="Subtotal">
                        <div className="Subtotal_child">
                            <div className="Subtotal_child_name"><p>Grand Total : </p></div>
                            <div className="Subtotal_child_price">$0</div>
                        </div>  
                        <div className="Subtotal_child">
                            <div className="Subtotal_child_name"><p>the number of products:</p></div>
                            <div className="Subtotal_child_price">0</div>
                        </div> 
                    </div>
                        }
         
                        </div>
                    </div>
                    <div className="CheckOut">
                        <button type="submit" >Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Body_Cart