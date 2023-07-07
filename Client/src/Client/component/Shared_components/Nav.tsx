const Nav = () => {
  return (
    <div className="Wall_Nav">
        <div className="Notification">
          <div className="nt_lef">
            <p>Free shipping on all orders over $99!</p>
          </div>
          <div className="nt_right">
            <div className="Account">
              <a href="">My Account</a>
            </div>
            <div className="Signin">
              <a href="">Sign In</a> <span>or</span> <a href="">Register</a>
            </div>
          </div>
        </div>
        <div className="Nav_menu">
          <div className="Nav_logo">
            <img src="../../../public/Image/logo.png" alt="" />
          </div>
          <div className="Menu_List">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="/Product">Products</a>
            <a href="">Cart</a>
            <a href="">Contact</a>
          </div>
          <div className="Nav_cart">
          <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
    </div>
  )
}
export default Nav