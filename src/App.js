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
import ContactUs from "./Components/ContactUs";
import ShoppingCart from "./Components/ShoppingCart";

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
        Name: "Hatthylla",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Id: 7,
        Name: "Garderob",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2100,
      },
      {
        Id: 8,
        Name: "Bordslampa",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 3300,
      },
      {
        Id: 9,
        Name: "Dörrgavel",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 890,
      },
      {
        Id: 10,
        Name: "Dalahäst",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2399,
      },
      {
        Id: 11,
        Name: "Trälist",
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
    showContact: false,
  };

  addToCart = (props) => {
    console.log(props);
    const { value } = props;
    let i;

    this.setState({});
  };

  openSignIn = () => {
    this.setState({
      showProducts: false,
      showSignUp: false,
      showAbout: false,
      showContact: false,
      showSignIn: true,
    });
  };

  openSignUp = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showAbout: false,
      showContact: false,
      showSignUp: true,
    });
  };

  openContact = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showAbout: false,
      showSignUp: false,
      showContact: true,
    });
  };

  openAbout = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showSignUp: false,
      showContact: false,
      showAbout: true,
    });
  };

  openProducts = () => {
    this.setState({
      showSignIn: false,
      showSignUp: false,
      showAbout: false,
      showContact: false,
      showProducts: true,
    });
  };

  openFrontPage = () => {
    this.setState({
      showProducts: false,
      showSignIn: false,
      showSignUp: false,
      showAbout: false,
      showContact: false,
    });
  };

  render() {
    const {
      productList,
      shoppingCart,
      showProducts,
      showSignIn,
      showSignUp,
      showAbout,
      showContact,
    } = this.state;

    return (
      <div className="container">
        <Header
          openProducts={this.openProducts}
          openFrontPage={this.openFrontPage}
          openContact={this.openContact}
          openAbout={this.openAbout}
          openSignIn={this.openSignIn}
        />
        {showProducts ? (
          <ProductGrid
            products={productList}
            stolPic={stolPic}
            addToCart={this.addToCart}
          />
        ) : showSignIn ? (
          <SignIn openSignUp={this.openSignUp} />
        ) : showSignUp ? (
          <SignUp openSignIn={this.openSignIn} />
        ) : showAbout ? (
          <AboutUs woodshopPic={woodshopPic} />
        ) : showContact ? (
          <ContactUs furniturePic={furniturePic} />
        ) : (
          <FrontPage
            woodshopPic={woodshopPic}
            windowPic={windowPic}
            sundeckPic={sundeckPic}
            furniturePic={furniturePic}
          />
        )}
        <ShoppingCart shoppingCart={shoppingCart} />
        <Footer />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous"
        />
      </div>
    );
  }
}

export default App;
