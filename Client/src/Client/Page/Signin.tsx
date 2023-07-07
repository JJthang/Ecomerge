import Footer from "../component/Shared_components/Footer"
import Nav from "../component/Shared_components/Nav"
import SignIn_cp from "../component/SignIn_Up/SignIn_cp"

const Signin = () => {
  return (
    <div className="Wall" style={{width : "1518px"}} >
    <Nav />
    <SignIn_cp />
    <Footer />
    </div>
  )
}
export default Signin