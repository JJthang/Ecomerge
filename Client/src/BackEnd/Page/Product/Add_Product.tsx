import Header from "../../../LayOut/Component/Header"
import * as yup from "yup";
import { Box, FormControl, InputLabel, Link,  MenuItem, Select, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCategoryQuery, useProduct_ADDMutation } from "../../../Redux/API/API";
import { useForm } from "react-hook-form";

const ProductSchame = yup.object().shape({
  Product_Name: yup.string().required("Please enter Product_Name"),
  Product_Price: yup.number().required("Please enter Product_Price"),
  Product_KG: yup.number().required("Please enter Product_KG"),
  Product_Image : yup.string(),
  Product_Desc: yup.string().required("Please enter Category"),
  Category: yup.string().required("Please Choose Category"),
});

const Add_Product = () => {
  const [Image , SetImage] = useState<string>("");
  const {data} = useCategoryQuery<any>();
  const [Product_Add] = useProduct_ADDMutation();
  const { register, handleSubmit, formState : { errors } } = useForm({
    resolver : yupResolver(ProductSchame)
  });
  const HandFormSubmit = async (value: any ) => {
    const {token} : any= JSON.parse(localStorage.getItem('user')!);
    value.Product_Image = await SubmitImage();
    const CurrentValue = {
      value,
      token,
    }
    const Aleart = await Product_Add(CurrentValue);
    alert(Aleart.data.message)

  };
  const SubmitImage = async () => {
    const data  = new FormData();
    const cloud_name = "dsbiugddk";
    const upload_preset = "demo-ECMA";
    data.append("file", Image);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name)
    data.append("folder", "Upload_ECMA1")
    const takeData = await  axios.post(`https://api.cloudinary.com/v1_1/dsbiugddk/image/upload`, data)
    .then((data:any) =>  data);
    return takeData.data.secure_url
}
  return (
    <div>
       <Header title="Add Product" subtitle="Well Come to my Product" />
        <form onSubmit={handleSubmit(HandFormSubmit)}  >
                <Box sx={{ width : "100%"}}  display={"grid"}
              gap={"30px"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr))"} >
                  <TextField 
                  color="secondary"
                  fullWidth
                  type="text"
                  label="Product"
                  helperText={errors.Product_Name?.message}
                  {...register("Product_Name")}
                  sx={{ gridColumn: "span 4"}}
                  />
                     <TextField 
                  color="secondary"
                  fullWidth
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  label="Product Price"
                  helperText={errors.Product_Price?.message}
                  {...register("Product_Price")}
                  sx={{ gridColumn: "span 4"}}
                  />
                        <TextField 
                  color="secondary"
                  fullWidth
                  type="number"
                  label="Product_KG"
                  {...register("Product_KG")}
                  helperText={errors.Product_KG?.message}
                  sx={{ gridColumn: "span 4"}}
                  />
                  <TextField 
                  color="secondary"
                  fullWidth
                  type="file"
                  {...register("Product_Image")}
                  helperText={errors.Product_Image?.message}
                  onChange={(e : any) => SetImage(e.target.files[0])}
                  sx={{ gridColumn: "span 4"}}
                  />
                  <Box  sx={{display : "flex", justifyContent : "space-between" , gridColumn: "span 4" }} >
                    <Box sx={{ width : "65%" }} >
                  <TextField
                  type="text"
                   placeholder="Text description"
                   
                  {...register("Product_Desc")}
                    multiline
                    minRows={2}
                    maxRows={4}
                    sx={{
                      width : "100%"
                    }}
                     />

                  </Box>
                  <Box sx={{ width : "30%" }} >
                  <FormControl fullWidth>
                         <InputLabel sx={{ color : "white" }} id="demo-simple-select-label">Category</InputLabel>
                         <Select
                         {...register("Category")}
                           sx={{
                            color: "white",
                            '.MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                               borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '.MuiSvgIcon-root ': {
                              fill: "white !important",
                            },
                            ":focus" : {
                              color : "white"
                            }
                           }}
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           label="Category"
                         >
                          {
                            data?.data.map((item : any) => <MenuItem key={item._id} value={item._id}>{item.Cate_Name}</MenuItem>)
                          }
                         </Select>
                       </FormControl>
                       <Box display={"flex"}>
                       <Button type="submit" sx={{ color: "white", bgcolor : "#4CCEAC" , mr : 4 , mt : 2, ":hover":{
                    color: "white", bgcolor : "#4CCEAC"
                  } }} variant="outlined" >Submit</Button>
                  <Link sx={{
                    width : "100px",
                    height : "45px",
                    backgroundColor : "#4CCEAC",
                    color : "white",
                    mt :2,
                    borderRadius : 1,
                    textDecoration : "none",
                    textAlign : "center",
                    alignItems : "center",
                    lineHeight : 3
                  }} href="/Admin/Show_Product" >Show</Link>
                       </Box>
                 
                    </Box>
                  </Box>
                </Box>
              </form>
    </div>
  )
}
export default Add_Product