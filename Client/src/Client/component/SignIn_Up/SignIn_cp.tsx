
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation} from "../../../Redux/API/API";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const ShameRegister = yup.object().shape({
  User_password : yup.string().required("Please enter Password"),
  User_email : yup.string().required("Please enter email"),
})

const SignIn_cp = () => {

  const { register, handleSubmit, formState : {errors} } = useForm({resolver : yupResolver(ShameRegister)});
  const [Login_User] = useLoginMutation();
  const navigate = useNavigate();
  const SubmitForm = async (e : any ) => {
    const Aleart = await Login_User(e);
    if (Aleart.data.user) {
      const Obj_User : any = {
        token : Aleart.data.accessTokent,
        user : Aleart.data.user,
      }
      localStorage.setItem('user', JSON.stringify(Obj_User));
      const retrievedObject : any = JSON.parse(localStorage.getItem('user')!);
      console.log(retrievedObject);
      if (retrievedObject.user.User_role == "admin") {
        navigate("/Admin")
        alert("Admin login successful")
      }else{
        alert("Login successful")
        navigate("/")
      }
    }else{
      alert(Aleart.data.message);
    }
  }
  return (
    <div className="Wrap_sign">
      <div className="Wrap_sign_title">
        <h1>Sign in</h1>
        <p><a href="/">Home</a> / <a href="/">Shop</a> </p>
      </div>
      <div className="FormSubmit">
        <div className="FormSubmit_wrap">
          <div className="FormSubmit_title">
            <h3>Sign In</h3>
          </div>
          <div className="form_container">
            <form onSubmit={handleSubmit(SubmitForm)}>
              <div className="form_child_In">
              <div className="item_form">
                <label htmlFor="">Email Address</label>
                <input type="email" {...register("User_email")} placeholder="Enter Your Email" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.User_email?.message}</p>
              </div>
              <div className="item_form" style={{ marginBottom : "150px" }}>
                <label htmlFor="">Password</label>
                <input type="password" {...register("User_password")} placeholder="Enter Your Password" />
                <p style={{color : "red", marginLeft : "15px"}} >{errors && errors.User_password?.message}</p>
              </div>
              </div>
              <div className="form_action">
                <button type="submit" >Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn_cp