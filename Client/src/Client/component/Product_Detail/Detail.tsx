import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { usePost_CartMutation, useProductsQuery } from "../../../Redux/API/API"
import { useState } from "react";


const Detail = () => {
  const [size, setsize] = useState({});
  const {id} = useParams();
  const {data} = useProductsQuery(id);
  const { register , handleSubmit } = useForm();
  const [Post_Cart] = usePost_CartMutation();
  const Submitform = async (e : any) => {
    const targetObject = Object.assign(e, data?.data, size);
    const id_user = JSON.parse(localStorage.getItem("user") || '{}') ;
    if (id_user) {
      const Detail_product = {
        id_user : id_user.user._id,
        List_Product : targetObject,
      }
      const Alert = await Post_Cart(Detail_product)
      alert(Alert?.data.message);
    }else{
      alert("Please login")
    }
  }
  const TakeSize = (e : React.ChangeEvent<HTMLInputElement>) => {
    setsize({...size, [e.target.name] : e.target.value});
  }
  


  return (
    <div className="Wrap_Detail">
      <div className="Detail_title">
        <h1>Products Single</h1>
        <span><a href="/">Home</a> / <a href="/">Shop</a></span>
      </div>
      <div className="Detail_product">
        <div className="Detail_product_wrap">
          <form action="" onSubmit={handleSubmit(Submitform)} >
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
                    <div className="Size">
                      <div className="Size_name">
                        <p>Size : </p>
                      </div>
                      <div className="Size_sl">
                        <div className="S">
                        <input name="size" required onChange={TakeSize} value={"S"} type="radio" />
                        <label htmlFor=""><p>S</p></label>
                        </div>
                        <div className="M">
                        <input name="size" required onChange={TakeSize} value={"M"} type="radio" />
                        <label htmlFor=""><p>M</p></label>
                        </div>
                        <div className="L">
                        <input name="size" required onChange={TakeSize} value={"L"} type="radio" />
                        <label htmlFor=""><p>L</p></label>
                        </div>
                      </div>
                    </div>
                    <div className="Deliver">
                      <div className="Deliver_name"><p>Deliver to : </p></div>
                      <div className="Deliver_sl"><input {...register("code")} required type="text" placeholder="Enter your pincode..." /></div>
                    </div>
                    <div className="Quantity">
                    <div className="Quantity_name"><p>Quantity : </p></div>
                      <div className="Quantity_sl"><input {...register("Quantity")} type="number" min={1} defaultValue={1} max={10}   />
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