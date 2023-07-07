import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import OutletBe from './LayOut/OutletBE'
import theme from "./Mui/theme";
import { Container } from "@mui/material";
import Add_Product from './BackEnd/Page/Product/Add_Product';
import Add_Cate from './BackEnd/Page/Category/Add_Cate';
import Show_Order from './BackEnd/Page/Order/Show_Order';
import Home from './Client/Page/Home';
import Show_Product from './BackEnd/Page/Product/Show_Product';
import Update_Product from './BackEnd/Page/Product/Update_Product';
import Show_Cate from './BackEnd/Page/Category/Show_Cate';
import Update_Cate from './BackEnd/Page/Category/Update_Cate';
import Product from './Client/Page/Product';

function App() {

    

  return (
    <>
    <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ bgcolor : "#141B2D"}} >
        <BrowserRouter>
      <Routes>
       <Route path='/Admin' element={<OutletBe />} >
          //todo Product Start
          <Route path='Product' element={<Add_Product />} />
          <Route path='Show_Product' element={<Show_Product />} />
          <Route path='Update_Product/:id' element={<Update_Product />} />
          //todo Product End

          //todo Category Start
          <Route path='Cate' element={<Add_Cate />} />
          <Route path='Show_Cate' element={<Show_Cate />} />
          <Route path='Update_Cate/:id' element={<Update_Cate />} />

          //todo Category End


          <Route path='Order' element={<Show_Order />} />
        </Route>
      </Routes>
      </BrowserRouter>
        </Container>

    </ThemeProvider>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Product' element={<Product />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
