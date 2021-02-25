import React, { Component } from "react";

class SignUp extends Component {
    state = {
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        IsValid: false,
    }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <form className="m-4">
            <h2 className="mb-4 text-center">Ny användare</h2>
            <div className="form-group form-inline">
              <label for="UserName" className="mr-2">Förnamn:</label>
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Förnamn..."
                id="FirstName"
              />
              <label for="UserName" className="mr-2">Efternamn:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Eftarnamn..."
                id="LastName"
              />
            </div>
            <div className="form-group">
              <label for="UserName">Användarnamn:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Användarnamn..."
                id="UserName"
              />
            </div>
            <div className="form-group">
              <label for="UserName">E-postadress:</label>
              <input
                type="e-mail"
                className="form-control"
                placeholder="E-post..."
                id="E-mail"
              />
            </div>
            <div className="form-group">
              <label for="Password">Lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Lösenord..."
                id="pwd"
              />
            </div>
            <div className="form-group">
              <label for="Re-Password">Bekräfta lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Bekräfta lösenord..."
                id="pwd-re-check"
              />
            </div>
            <div className="text-center mt-5">
                <button type="submit" className="btn btn-outline-primary">
              Skapa konto
            </button>
                <button type="button" className="btn btn-outline-danger ml-4" onClick={() => this.props.openSignIn()}>
                Avbryt
            </button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
