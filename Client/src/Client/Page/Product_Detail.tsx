import Detail from "../component/Product_Detail/Detail"
import Footer from "../component/Shared_components/Footer"
import Nav from "../component/Shared_components/Nav"

const Product_Detail = () => {
  return (
    <div className="Wall" style={{width : "1518px"}} >
    <Nav />
    <Detail />
    <Footer />
    </div>
  )
}
export default Product_Detail