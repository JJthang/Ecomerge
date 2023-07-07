import { Slider } from "@mui/material"
import { Iproduct } from "../../../Interface/product";
import { useState } from "react";

type List_props ={
    List_data : Iproduct[],
}
const List_Product = ({List_data} : List_props) => {
    const [ItemPage , SetItemPage] = useState(8);
    const Leng_Data = List_data?.length;
    const page = [];
    if (Leng_Data) {
        for (let i = 1; i <= Math.ceil(Leng_Data/ ItemPage); i++) {
            page.push(i);
        }
    }
    const renderPage = page.map((item) => {
        return <li key={item} >{item}</li>
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
                    <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item_heading">
              <div className="item_heading_img">
                <img src="../../../../public/Image/12.png" alt="" />
              </div>
              <div className="item_heading_title">Available Colors</div>
            </div>
            <div className="item_bottom">
              <div className="item_bottom_name">
                <a href="">Winter Sweater</a>
              </div>
              <div className="item_bottom_price">
                <p>6,145</p>
              </div>
            </div>
          </div>
            </div>
                    <div className="Production_pagation">
                        <ul className="Fix_Page">
                            {renderPage}
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