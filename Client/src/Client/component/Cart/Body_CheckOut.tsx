import { useForm, SubmitHandler } from 'react-hook-form'
import { useGet_One_CartQuery, usePost_CheckOutMutation } from '../../../Redux/API/API';

type FormValues = {
    name: string;
    email: string;
    number: number;
    address : string,
    payment : string,
    id_user : string,
  };

const Body_CheckOut = () => {   
    const { register, handleSubmit } = useForm<FormValues>();
    const {user} = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(user._id);
    const [Post_CheckOut] = usePost_CheckOutMutation();
    
    const {data} = useGet_One_CartQuery(user._id);
    const User_value = {
        id_user : user._id,
        List_Product : data?.data.List_Product,
    }
    const HandCheckOut : SubmitHandler<FormValues> = (event) => {
        const CurrentValue = Object.assign(event, User_value);
        Post_CheckOut(CurrentValue);
        alert("Create Order Successfully")
    }

  return (
    <div className="Wrap_body_Check">
        <div className="Check_title">
           <h2>Shopping Cart</h2>
           <p><a href="/">Home</a> / <a href="">Cart</a></p>
        </div>
        <div className="Check_Body">
            <div className="Check_Wrap">
                <div className="Check_form">
                    <div className="Check_form_title">
                        <h2>Check Out</h2>
                    </div>
                    <div className="body_formchek">
                        <form action="" onSubmit={handleSubmit(HandCheckOut)} >
                        <div className="Information_form">
                            <div className="Information_form_title">
                                <h2>CONTACT INFORMATION</h2>
                            </div>
                            <div className="Information_form_input">
                                <div className="Information_form_name">
                                    <label htmlFor="">Name</label>
                                    <input type="text" {...register("name")} placeholder="Enter Your Name..." />
                                </div>
                                <div className="Information_form_Email">
                                <label htmlFor="">Email</label>
                                    <input type="text" {...register("email")} placeholder="Enter Your Email..." />
                                </div>
                            </div>
                        </div>
                        <div className="Add_Ressform">
                            <div className="Add_RessTitle">
                            <h2>SHIPPING ADDRESS</h2>
                            </div>
                            <div className="Add_Ress_container">
                                <div className="Phone_number">
                                    <label htmlFor="">Number </label>
                                    <input type="text" {...register("number")} placeholder="Enter Your Number..." />
                                </div>
                                <div className="location">
                                <label htmlFor="">Address </label>
                                    <input type="text" {...register("address")} placeholder="Enter Your Address..." />
                                </div>
                                <div className="Payment">
                                    <div className="Payment_title">
                                        <h2>CONTACT INFORMATION</h2>
                                    </div>
                                    <div className="Payment_container">
                                    <input type="radio" {...register("payment")} value={"directly"} />  <label htmlFor="">Payment on delivery</label>
                                    <br />
                                    <button type='submit'>Proceed To Checkout</button>
                                    
                                    </div>

                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="Check_total">
                    <div className="Check_total_wrap">
                        <div className="Check_total_wrapchild">
                            <div className='Check_total_title'>
                            <h2>Cart Totals Summary</h2>
                            </div>
                            <div className='Subtotal'>
                                <h2>Subtotal : <span>$2,240</span></h2>
                                <h2>Quantity : <span>7</span></h2>
                                <h2>Shipping : <span>$22</span></h2>
                            </div>
                            <div className='Global_total'>
                            <h2>Grand Total : <span>$2200</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Check_Bottom">

        </div>
    </div>
  )
}
export default Body_CheckOut;