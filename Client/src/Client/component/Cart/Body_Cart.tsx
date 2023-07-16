
import { useGet_One_CartQuery, usePut_One_CartMutation } from "../../../Redux/API/API";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Body_Cart = () => {
    const User = localStorage.getItem("user")
    const Take_user = JSON.parse(User || '{}');
    const {data, refetch} = useGet_One_CartQuery(Take_user.user._id);
    console.log(data?.data.List_Product);
    let total = 0;
    let product_total = 0;
    const CurrentData = data?.data.List_Product.map((item : any, index : number) =>{
        console.log(1);
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
    })
   const LastData = CurrentData && CurrentData[CurrentData?.length - 1];
   const [Delete_Cart] = usePut_One_CartMutation();
   const HandDelete_Cart = (id : string) => {
    const Hand_data = {
        id_user : Take_user.user._id,
        _id : id,
    }
    if (confirm("Are you sure you want to delete this order")) {
        Delete_Cart(Hand_data);
        alert("Order deleted successfully");
        refetch();
    }
   }

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
                            <td><button onClick={() => HandDelete_Cart(item._id)} ><i className="fa-solid fa-x"></i></button></td>
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
                        User && data?.data.List_Product.length > 0 ? LastData :  <div className="Subtotal">
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
                        <a href="/CheckOut">Proceed To Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Body_Cart