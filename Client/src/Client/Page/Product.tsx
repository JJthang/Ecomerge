import { useProductQuery } from "../../Redux/API/API";
import List_Product from "../component/Product_Cate/List_Product";
import Footer from "../component/Shared_components/Footer";
import Nav from "../component/Shared_components/Nav";


const Product = () => {
  const {data} = useProductQuery();
  return (
    <div className="Wall" style={{width : "1518px"}} >
    <Nav />
    <List_Product List_data={data?.data} />
    <Footer />
    </div>
  )
}
export default Product;