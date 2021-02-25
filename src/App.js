import React, { Component } from "react";
//-------PICS-----------
import woodshopPic from "./Pics/Woodshop.jpg";
import sundeckPic from "./Pics/sundeck.jpg";
import windowPic from "./Pics/Window-Replacement.jpg";
import furniturePic from "./Pics/furniture-making.jpeg";
import stolPic from "./Pics/trästol.jpg";
//-------COMPONENTS-------
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductGrid from "./Components/ProductGrid";
import FrontPage from "./Components/FrontPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AboutUs from "./Components/AboutUs";

class App extends Component {
  state = {
    productList: [
      {
        Id: 0,
        Name: "Trästol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Id: 1,
        Name: "Matbord",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2100,
      },
      {
        Id: 2,
        Name: "Gungstol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 3300,
      },
      {
        Id: 3,
        Name: "Spegel",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 890,
      },
      {
        Id: 4,
        Name: "Träbänk",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2399,
      },
      {
        Id: 5,
        Name: "Handräcke",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 240,
      },
      {
        Id: 6,
        Name: "Trästol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Id: 7,
        Name: "Matbord",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2100,
      },
      {
        Id: 8,
        Name: "Gungstol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 3300,
      },
      {
        Id: 9,
        Name: "Spegel",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 890,
      },
      {
        Id: 10,
        Name: "Träbänk",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2399,
      },
      {
        Id: 11,
        Name: "Handräcke",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 240,
      },
    ],
    shoppingCart: [],
    showSignIn: false,
    showSignUp: false,
    showProducts: false,
    showAbout: false,
  };

  addToCart = (event) => {
    const product = event.target;
    this.setState({});
  };

  openAbout = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showSignUp: false,
      showAbout: true,
    });
  };

  openProducts = () => {
    this.setState({
      showSignIn: false,
      showSignUp: false,
      showAbout: false,
      showProducts: true,
    });
  };

  openFrontPage = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showSignUp: false,
      showAbout: false,
    });
  };

  render() {
    const {
      productList,
      showProducts,
      showSignIn,
      showSignUp,
      showAbout,
    } = this.state;

    return (
      <div id="main-container">
        <Header
          openProducts={this.openProducts}
          openFrontPage={this.openFrontPage}
          openAbout={this.openAbout}
        />
        {showProducts ? (
          <ProductGrid products={productList} stolPic={stolPic} />
        ) : showSignIn ? (
          <SignIn />
        ) : showSignUp ? (
          <SignUp />
        ) : showAbout ? (
          <AboutUs 
          woodshopPic={woodshopPic}
          furniturePic={furniturePic} />
        ) : (
          <FrontPage
            woodshopPic={woodshopPic}
            windowPic={windowPic}
            sundeckPic={sundeckPic}
            furniturePic={furniturePic}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
