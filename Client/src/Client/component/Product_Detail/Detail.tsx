import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../../Redux/API/API"


const Detail = () => {
  const {id} = useParams();
  const {data} = useProductsQuery(id);
  
  return (
    <div className="Wrap_Detail">
      <div className="Detail_title">
        <h1>Products Single</h1>
        <span><a href="/">Home</a> / <a href="/">Shop</a></span>
      </div>
      <div className="Detail_product">
        <div className="Detail_product_wrap">
          <form action="">
            <div className="form_img">
              <div className="wrap_Img">
              <img src={data?.data.Product_Image} alt="" />
              </div>
            </div>
            <div className="form_Product">
                <div className="form_Product_title">
                  <h1>{data?.data.Product_Name}</h1>
                  <p>Offer is End </p>
                  <p>
                  <i className="fa-solid fa-star one" />
                  <i className="fa-solid fa-star one" />
                  <i className="fa-solid fa-star one" />
                  <i className="fa-solid fa-star one" />
                  <i className="fa-solid fa-star two" />
                  <span>(4.2)</span>
                  </p>
                </div>
                <div className="Form_Submit">
                  <div className="Price">
                    <h2>${data?.data.Product_Price} </h2><p>10% off <span>More Available offers</span></p>
                  </div>
                  <div className="handle">
                    <div className="kg">
                      <div className="kg_name">
                        <p>Kilogram : </p>
                      </div>
                      <div className="kg_sl"><p>{data?.data.Product_KG} KG</p></div>
                    </div>
                    <div className="Deliver">
                      <div className="Deliver_name"><p>Deliver to : </p></div>
                      <div className="Deliver_sl"><input type="text" placeholder="Enter your Address..." /></div>
                    </div>
                    <div className="Quantity">
                    <div className="Quantity_name"><p>Deliver to : </p></div>
                      <div className="Quantity_sl"><input type="number" min={1} max={10} placeholder="0"  />
                      <button type="submit" >Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </form>
          <div className="desc">
            <div className="desc_wrap">
              <div className="title_desc">
                <h2>Descrtiption</h2>
              </div>
              <div className="title_content">
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqiuanim vnostrud exerciteation ullamco
                   labesioris nisi ut aliquip eex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                     pariatur. Exciiepteur siesdint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sesdeed ut perspiciatis unde omnis isesdte neseiatus eesrror sit voluptatem accusiantium doloremque laudantium, totam rem aperiam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail