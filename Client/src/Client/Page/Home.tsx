import BestSeller from "../component/Home/BestSeller"
import Footer from "../component/Shared_components/Footer"
import Slideshow from "../component/Home/Header"
import Product from "../component/Home/Product"
import Nav from "../component/Shared_components/Nav"

const Home = () => {

  return (
    <div className="Wall" style={{width : "1518px"}} >
      <Nav />
      <Slideshow />
      <Product />
      <BestSeller />
      <Footer />
    </div>
  )
}
export default Home