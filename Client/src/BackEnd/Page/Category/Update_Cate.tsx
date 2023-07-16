import Header from "../../../LayOut/Component/Header"
import * as yup from "yup";
import { Box, Link, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCategoryQuery, useCategory_PUTMutation, useCategorysQuery } from "../../../Redux/API/API";
import { useForm } from "react-hook-form";
import { ButtonFig } from "../../../Mui/Component/Product";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductSchame  = yup.object().shape({
  Cate_Name: yup.string().required("Please enter Product_Name"),
});

const Update_Cate = () => {
  const [Cate_PUT] = useCategory_PUTMutation();
  const {id}  = useParams();
  const { reset , register, handleSubmit, formState : { errors } } = useForm({
    resolver : yupResolver(ProductSchame)
  });
  const CurrentValue = useCategorysQuery(id);
  const {data} = useCategoryQuery();
  const TakeOneData : any = data?.data.find((item : any) => item._id == id);
  
  useEffect(() => {
    reset(TakeOneData);
  }, [TakeOneData, reset])
  const HandFormSubmit = async (value: any ) => {
    console.log(value);
    Cate_PUT(value);
    alert("Update successful Category");
  };
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
                  helperText={errors.Cate_Name?.message}
                  {...register("Cate_Name")}
                  sx={{ gridColumn: "span 4"}}
                  />
                 <Box >
                 <ButtonFig type="submit" >Update</ButtonFig>
                  <ButtonFig sx={{ ml : 2 }} >
                    <Link sx={{ color : "white" }} href="/Admin/Show_Cate" >Show</Link>
                  </ButtonFig>
                 </Box>
                </Box>
              </form>
    </div>
  )
}
export default Update_Cate