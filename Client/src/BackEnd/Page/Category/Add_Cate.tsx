import Header from "../../../LayOut/Component/Header"
import * as yup from "yup";
import { Box, Link, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import {  useCategory_ADDMutation } from "../../../Redux/API/API";
import { useForm } from "react-hook-form";
import { ButtonFig } from "../../../Mui/Component/Product";

const ProductSchame = yup.object().shape({
  Cate_Name: yup.string().required("Please enter Product_Name"),
});

const Add_Cate = () => {
  const [Cate_Add] = useCategory_ADDMutation();
  const { register, handleSubmit, formState : { errors } } = useForm({
    resolver : yupResolver(ProductSchame)
  });
  const HandFormSubmit = async (value: any ) => {
    const {token} = JSON.parse(localStorage.getItem("user")!);
    const currentValue = {
      token,
      value
    }
    console.log(currentValue);
    
    const Alert = await  Cate_Add(currentValue);
    
    alert(Alert.data.message);
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
                  label="Category"
                  helperText={errors.Cate_Name?.message}
                  {...register("Cate_Name")}
                  sx={{ gridColumn: "span 4"}}
                  />
                 <Box >
                 <ButtonFig type="submit" >Submit</ButtonFig>
                  <ButtonFig sx={{ ml : 2 }} >
                    <Link sx={{ color : "white" }} href="Show_Cate" >Show</Link>
                  </ButtonFig>
                 </Box>
                </Box>
              </form>
    </div>
  )
}
export default Add_Cate