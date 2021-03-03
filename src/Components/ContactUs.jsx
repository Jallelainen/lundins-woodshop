import React, {Component} from "react";

class ContactUs extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-5 border border-top-0 border-left-0 border-bottom-0">
            <h2>Skriv till oss</h2>
          <form>
              <div className="form-group">
                <label>E-post:</label>
                <input className="form-control" type="email" placeholder="Vänligen skriv in din mail.."/>
              </div>
              <div className="form-group">
                <label>Meddelande:</label>
                <textarea className="form-control" rows="5" placeholder="Skriv ett meddelande..."/>
              </div>
              <input type="submit" className="btn btn-primary" value="Skicka"/>
          </form>
        </div>
        <div className="col-7">
          <div className="row">
            <h2 className="ml-3 mb-4">Kontakt</h2>
          </div>
          <div className="row">
            <div className="col-4 pt-2">
              <img
                src={this.props.furniturePic}
                id="productPic"
                alt="Picture of Jonathan Lundin"
              />
            </div>
            <div className="col-8">
              <h4>Jonathan Lundin(VD)</h4>
              <p>
                <b>Telefon:</b> 070-123 45 67
              </p>
              <p>
                <b>E-post:</b> jonathan.lundin@elbaindustri.se
              </p>
              <p>
                  <b>Adress:</b> Gatanvägen 123, 507 79, Berga
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
