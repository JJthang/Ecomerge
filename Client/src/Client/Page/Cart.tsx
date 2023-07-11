import Body_Cart from "../component/Cart/Body_Cart"
import Footer from "../component/Shared_components/Footer"
import Nav from "../component/Shared_components/Nav"

const Cart = () => {
  return (
    <div className="Wall" style={{width : "1518px"}} >
      <Nav />
      <Body_Cart />
      <Footer/>
    </div>
  )
}
export default Cart