import { Slider } from "@mui/material"
import { Iproduct } from "../../../Interface/product";
import { useEffect, useState } from "react";

type List_props ={
    List_data : Iproduct[],
}
const List_Product = ({List_data} : List_props) => {
    const [ItemPage ] = useState(6);
    const [CurrentPage , setCurrentPage] = useState(1);
    const [PageMaxLimit ] = useState(3);
    const [PageMinLimit] = useState(0);
    const [Find_data , SetFind_data] = useState<any[]>([]);
    const FindPrice = (event : any) =>  {
      const CurrentData : any = List_data?.filter((item : any) => item.Product_Price >=0 && item.Product_Price  <= parseInt(event.target.value))
      SetFind_data(CurrentData)
    }
    const Leng_Data = List_data?.length;
    const page = [];
    const IndexOfLastItem : number =  CurrentPage * ItemPage;
    const IndexOfFistItem : number = IndexOfLastItem - ItemPage;
    const CurrentItem = List_data?.slice(IndexOfFistItem,IndexOfLastItem);
    if (Leng_Data) {
        for (let i = 1; i <= Math.ceil(Leng_Data/ ItemPage); i++) {
            page.push(i);
        }
    }
    const HandClick = (event : any) => {
      setCurrentPage(event);
    }
    const HandNext = () => {
      setCurrentPage(CurrentPage + 1);
      if (CurrentPage >= 3) {
        setCurrentPage(1);
      }
    }
    const HandPrev = () => {
      setCurrentPage(CurrentPage - 1);
      if (CurrentPage <= 0) {
        setCurrentPage(3);
      }
    }
    const renderPage = page.map((item) => {
      if (item < PageMaxLimit + 1 && item > PageMinLimit) {
        return <li key={item} className={CurrentPage == item ? "active" : ""}  onClick={() => HandClick(item)} >{item}</li>
      }
    })   
    function valuetext(value: number) {
        return `${value}°C`;
      }
  return (
    <div className="Wrap_product">
        <div className="Title_Wrap">
            <h1>Products Category</h1>
        </div>
        <div className="Product">
            <div className="Product_wrap">
                <div className="Production">
                    <div className="Production_title">
                        <p>Showing items 1 to 12 of 40 total</p>
                    </div>
                    <div className="Production_List">
                      {
                       Find_data.length > 0 ? Find_data?.map((item : any) => <div className="item" key={item._id}>
                       <div className="item_heading">
                         <div className="item_heading_img">
                           <img src={item.Product_Image} alt="" />
                         </div>
                         <div className="item_heading_title">Available Colors</div>
                       </div>
                       <div className="item_bottom">
                         <div className="item_bottom_name">
                           <a href={`/Product_Detail/${item._id}`}>{item.Product_Name}</a>
                         </div>
                         <div className="item_bottom_price">
                           <p>${item.Product_Price}</p>
                         </div>
                       </div>
                     </div>) : CurrentItem?.map((item : any) => 
                        <div className="item" key={item._id}>
                        <div className="item_heading">
                          <div className="item_heading_img">
                            <img src={item.Product_Image} alt="" />
                          </div>
                          <div className="item_heading_title">Available Colors</div>
                        </div>
                        <div className="item_bottom">
                          <div className="item_bottom_name">
                            <a href={`/Product_Detail/${item._id}`}>{item.Product_Name}</a>
                          </div>
                          <div className="item_bottom_price">
                            <p>${item.Product_Price}</p>
                          </div>
                        </div>
                      </div>)
                      }
            </div>
                    <div className="Production_pagation">
                        <ul className="Fix_Page">
                          <li className="Prev" >
                            <button onClick={HandPrev} >Prev</button>
                          </li>
                            {renderPage}
                            <li className="Next">
                            <button onClick={HandNext} >Next</button>
                          </li>
                        </ul>
                    </div>
                </div>
                <div className="Category">
                    <div className="Cate_List">
                        <div className="Cate_title"><h1>PRODUCT CATEGORIES</h1></div>
                        <div className="Cate_list_product">
                            <ul>
                                <li>Man</li>
                                <li>Women</li>
                                <li >Kids & Baby</li>
                                <li>Granparents</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Cate_price">
                        <div className="Cate_price_title">
                            <h1>FILTER BY PRICE</h1>
                        </div>
                    <Slider 
                        onChange={FindPrice}
                        className="slider"
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={50}
                        marks
                        min={10}
                        max={1000}
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List_Product