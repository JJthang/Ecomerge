import Body_CheckOut from "../component/Cart/Body_CheckOut";
import Footer from "../component/Shared_components/Footer";
import Nav from "../component/Shared_components/Nav";

const CheckOut = () => {
  return (
    <div className="Wall" style={{width : "1519px"}} >
      <Nav />
      <Body_CheckOut />
      <Footer />
    </div>
  )
}
export default CheckOut;