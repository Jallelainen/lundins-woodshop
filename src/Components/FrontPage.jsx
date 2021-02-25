import React from "react";

const FrontPage = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            className="mx-auto d-block rounded m-3 shadow mb-4 bg-light"
            id="woodshopPic"
            src={props.woodshopPic}
            alt="Picture of Workshop"
          />
        </div>
        <div className="col-8">
          <h4 className="mt-4 ml-2">Ett företag med anor från svensk träindustri</h4>
          <p className="ml-2">
            Duis eget volutpat augue. Proin laoreet massa sem, eget vestibulum
            leo fermentum non. Morbi quam lectus, eleifend et imperdiet quis,
            elementum nec odio. Curabitur tincidunt suscipit lacus, faucibus
            tempor velit interdum vel. Suspendisse potenti. Vestibulum suscipit
            venenatis lorem nec laoreet sed lacinia. Fusce ornare facilisis mi
            eget dapibus. Praesent id mi odio. Praesent vestibulum efficitur
            elit, ut volutpat metus tincidunt et. In in ante sit amet nisl
            convallis placerat. Sed sagittis eget augue. Quisque aliquet nisi
            vitae eros gravida, tempor lacinia sem finibus.
            eget dapibus. Praesent id mi odio. Praesent vestibulum efficitur
            elit, ut volutpat metus tincidunt et. In in ante sit amet nisl
            convallis placerat. Sed sagittis eget augue. Quisque aliquet nisi
            vitae eros gravida, tempor lacinia sem finibus.
            eget dapibus. 
          </p>
        </div>
      </div>
      <hr className="mb-5"/>
      <div className="row">
        <div className="col">
          <img className="rounded-circle mx-auto d-block shadow mb-4 bg-white" id="circlePics" src={props.furniturePic} alt="Furniture" />
          <p className="text-center">Våra handtillverkade möbler skapas med ett öga för detaljer.</p>
        </div>
        <div className="col">
          <img className="rounded-circle mx-auto d-block shadow mb-4 bg-white" id="circlePics" src={props.windowPic} alt="Windows" />
          <p className="text-center">
            Med kunskap inom fönsterrenovering återställer vi dina gamla fönster
            till nyskick.
          </p>
        </div>
        <div className="col">
          <img className="mx-auto d-block rounded-circle shadow mb-4 bg-light" id="circlePics" src={props.sundeckPic} alt="Renovation" />
          <p className="text-center">
            Vi utför gärna mindre byggnadsprojekt. Tveka inte att kontakta oss!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
