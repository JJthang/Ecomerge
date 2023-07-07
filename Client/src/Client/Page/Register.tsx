import Footer from "../component/Shared_components/Footer";
import Nav from "../component/Shared_components/Nav";
import Form_SignUp from "../component/SignIn_Up/SignUp";


const Signin = () => {
  return (
    <div className="Wall" style={{width : "1518px"}} >
    <Nav />
    <Form_SignUp />
    <Footer />
    </div>
  )
}
export default Signin;