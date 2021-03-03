import React, { Component } from "react";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    isValid: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      rePassword,
    } = this.state;

    console.log(this.state);

    return (
      <div className="container">
        <div className="row justify-content-center">
          <form className="m-4">
            <h2 className="mb-4 text-center">Ny användare</h2>
            <div className="form-group form-inline">
              <label htmlFor="firstName" className="mr-2">
                Förnamn:
              </label>
              <input
                type="text"
                className="form-control mr-2"
                placeholder="Förnamn..."
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <label htmlFor="lastName" className="mr-2">
                Efternamn:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Efternamn..."
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userName">Användarnamn:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Användarnamn..."
                name="userName"
                id="userName"
                value={userName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-postadress:</label>
              <input
                type="e-mail"
                className="form-control"
                placeholder="E-post..."
                name="email"
                id="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Lösenord..."
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rePassword">Bekräfta lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Bekräfta lösenord..."
                name="rePassword"
                id="rePassword"
                value={rePassword}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-outline-primary">
                Skapa konto
              </button>
              <button
                type="button"
                className="btn btn-outline-danger ml-4"
                onClick={() => this.props.openSignIn()}
              >
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
