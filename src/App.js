import React, { Component } from "react";
//-------PICS-----------
import woodshopPic from './Pics/Woodshop.jpg'
import sundeckPic from './Pics/sundeck.jpg'
import windowPic from './Pics/Window-Replacement.jpg'
import furniturePic from './Pics/furniture-making.jpeg'
//-------COMPONENTS-------
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductGrid from "./Components/ProductGrid";
import FrontPage from "./Components/FrontPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

class App extends Component {
  state = {
    productList: [
      {
        Name: "Trästol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Name: "Matbord",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Name: "Gungstol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
    ],
    showSignIn: false,
    showSignUp: false,
    showProducts: false,
  };

  openProducts = () => {
    this.setState({ showProducts: true, showSignIn: false, showSignUp: false })
    
  }

  openFrontPage = () => {
    this.setState({ showProducts: false, showSignIn: false, showSignUp: false })
  }

  render() {
    const { productList, showProducts, showSignIn, showSignUp } = this.state;


    return (
      <div className="Container">
        <Header
        openProducts={this.openProducts}
        openFrontPage={this.openFrontPage}  />
        {showProducts ? (
          <ProductGrid 
          products={productList} />
        ) : showSignIn ? (
          <SignIn />
        ) : showSignUp ? (
          <SignUp />
        ) : (
          <FrontPage 
          woodshopPic={woodshopPic}
          windowPic={windowPic}
          sundeckPic={sundeckPic}
          furniturePic={furniturePic}/>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
