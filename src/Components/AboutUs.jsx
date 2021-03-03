import React from "react";

const AboutUs = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="ml-3">Om oss</h2>
      </div>
      <div className="row">
        <div className="col-8">
          <p>
            Duis eget volutpat augue. Proin laoreet massa sem, eget vestibulum
            leo fermentum non. Morbi quam lectus, eleifend et imperdiet quis,
            elementum nec odio. Curabitur tincidunt suscipit lacus, faucibus
            tempor velit interdum vel. Suspendisse potenti. Vestibulum suscipit
            venenatis lorem nec laoreet sed lacinia. Fusce ornare facilisis mi
            eget dapibus. Praesent id mi odio.
          </p>
          <p>
            Praesent vestibulum efficitur elit, ut volutpat metus tincidunt et.
            In in ante sit amet nisl convallis placerat. Sed sagittis eget
            augue. Quisque aliquet nisi vitae eros gravida, tempor lacinia sem
            finibus. eget dapibus. Praesent id mi odio. Praesent vestibulum
            efficitur elit, ut volutpat metus tincidunt et.
          </p>
          <p>
            In in ante sit amet nisl convallis placerat. Sed sagittis eget
            augue. Quisque aliquet nisi vitae eros gravida, tempor lacinia sem
            finibus. eget dapibus. Morbi quam lectus, eleifend et imperdiet
            quis, elementum nec odio. Curabitur tincidunt suscipit lacus,
            faucibus tempor velit interdum vel. Suspendisse potenti. Vestibulum
            suscipit venenatis lorem nec laoreet sed lacinia. Fusce ornare
            facilisis mi eget dapibus.
          </p>
        </div>
        <div className="col-4">
          <img
            src={props.woodshopPic}
            id="productPic"
            alt="image of the company founder"
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <h2 className="ml-3">Elba Industri - Klassisk träindustri från landsbygden</h2>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Praesent vestibulum efficitur elit, ut volutpat metus tincidunt et.
            In in ante sit amet nisl convallis placerat. Sed sagittis eget
            augue. Quisque aliquet nisi vitae eros gravida, tempor lacinia sem
            finibus. eget dapibus. Praesent id mi odio. Praesent vestibulum
            efficitur elit, ut volutpat metus tincidunt et.
          </p>
          <p>
            In in ante sit amet nisl convallis placerat. Sed sagittis eget
            augue. Quisque aliquet nisi vitae eros gravida, tempor lacinia sem
            finibus. eget dapibus. Morbi quam lectus, eleifend et imperdiet
            quis, elementum nec odio. Curabitur tincidunt suscipit lacus,
            faucibus tempor velit interdum vel. Suspendisse potenti. Vestibulum
            suscipit venenatis lorem nec laoreet sed lacinia. Fusce ornare
            facilisis mi eget dapibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
