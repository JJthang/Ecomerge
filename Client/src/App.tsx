import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import OutletBe from './LayOut/OutletBE'
import theme from "./Mui/theme";
import { Container } from "@mui/material";
import Add_Product from './BackEnd/Page/Product/Add_Product';
import Add_Cate from './BackEnd/Page/Category/Add_Cate';
import Home from './Client/Page/Home';
import Show_Product from './BackEnd/Page/Product/Show_Product';
import Update_Product from './BackEnd/Page/Product/Update_Product';
import Show_Cate from './BackEnd/Page/Category/Show_Cate';
import Update_Cate from './BackEnd/Page/Category/Update_Cate';
import Product from './Client/Page/Product';
import Register from './Client/Page/Register';
import Signin from './Client/Page/SignIn';
import Product_Detail from './Client/Page/Product_Detail';
import Cart from './Client/Page/Cart';
import CheckOut from './Client/Page/CheckOut';
import Show_Cart from './BackEnd/Page/Cart/Show_Order';
import Contact from './Client/Page/Contact';

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
          //todo Cart Start

          <Route path='Show_Cart' element={<Show_Cart />} />
          <Route path='Show_Cart/:id' element={<Show_Cart />} />

        </Route>
      </Routes>
      </BrowserRouter>
        </Container>

    </ThemeProvider>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Product_Detail/:id' element={<Product_Detail />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/SignIn' element={<Signin />} />
            <Route path='/CheckOut' element={<CheckOut />} />
            <Route path='/Contact' element={<Contact />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
