import { Formik } from "formik"
import Header from "../../../LayOut/Component/Header"
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useCategory_ADDMutation } from "../../../Redux/API/API";
import { ICate } from "../../../Interface/category";

const Add_Cate = () => {
  const [POST_Category] = useCategory_ADDMutation();
  const initialValues = {
    Cate_Name : "",
  }
  const CategorySchame = yup.object().shape({
    Cate_Name : yup.string().required("Please enter Category")
  })
  const HandSub = async (value : ICate) => {
    const Current : any = await POST_Category(value);
    console.log(Current);
    alert("More success")
  }
  return (
    <div>
      <Header title="Category" subtitle="Well Come to my Category" />
      <Formik initialValues={initialValues} validationSchema={CategorySchame} onSubmit={HandSub}  >
        {
          ({handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
            handleChange}) => (
          <form action="" onSubmit={handleSubmit} >
            <Box width={"100%"} gap={"20px"} >
              <TextField 
              color="secondary"
             fullWidth
             type="text"
             variant="outlined"
             label="Cate_Name"
             name="Cate_Name"
             onBlur={handleBlur}
             onChange={handleChange}
             value={values.Cate_Name}
             helperText ={touched.Cate_Name && errors.Cate_Name}
             error={!!touched.Cate_Name && !!errors.Cate_Name}
              />
               <Button type="submit" sx={{ color: "white", bgcolor : "#4CCEAC" , mt : 2, ":hover":{
                    color: "white", bgcolor : "#4CCEAC"
                  } }} variant="outlined" >Submit</Button>
            </Box>
          </form>
        )
        }
      </Formik>
    </div>
  )
}
export default Add_Cate