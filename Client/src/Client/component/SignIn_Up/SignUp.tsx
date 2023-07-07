import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../../../Redux/API/API";

// eslint-disable-next-line react-refresh/only-export-components
const ShameRegister = yup.object().shape({
  Name_user : yup.string().required("Please enter Product_Name"),
  User_password : yup.string().required("Please enter Password"),
  User_email : yup.string().required("Please enter email"),
  confirmPassword : yup.string().required("Please enter Password"),
})

const Form_SignUp = () => {

  const { register, handleSubmit, formState : {errors} } = useForm({resolver : yupResolver(ShameRegister)});
  const [Regis_User] = useRegisterMutation();
  const SubmitForm = async (e : any ) => {
    const Aleart = await Regis_User(e);
    alert(Aleart?.data.message);
  }
  return (
    <div className="Wrap_sign">
      <div className="Wrap_sign_title">
        <h1>Register</h1>
        <p><a href="/">Home</a> / <a href="">Shop</a> </p>
      </div>
      <div className="FormSubmit">
        <div className="FormSubmit_wrap">
          <div className="FormSubmit_title">
            <h3>Register an account</h3>
          </div>
          <div className="form_container">
            <form onSubmit={handleSubmit(SubmitForm)}>
              <div className="form_child">
              <div className="item_form">
                <label htmlFor="">Full Name</label>
                <input type="text" {...register("Name_user")}  placeholder="Enter Your Name" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.Name_user?.message}</p>
              </div>
              <div className="item_form">
                <label htmlFor="">Email Address</label>
                <input type="email" {...register("User_email")} placeholder="Enter Your Email" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.User_email?.message}</p>

              </div>
              <div className="item_form">
                <label htmlFor="">Password</label>
                <input type="password" {...register("User_password")} placeholder="Enter Your Password" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.User_password?.message}</p>

              </div>
              <div className="item_form">
                <label htmlFor="">ConfirmPassword</label>
                <input type="password" {...register("confirmPassword")} placeholder="Enter Your ConfirmPassword" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.confirmPassword?.message}</p>

              </div>
              </div>
              <div className="form_action">
                <button type="submit" >Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form_SignUp