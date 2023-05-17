import React from "react";

export default function SectionFour() {
  return (
    <div>
      <div className="forth-sec row ms-md-2 me-md-2 mt-md-2">
        <div className="forth-sec-iphone bg-set mt-3 col-md me-md-2 mt-md-0">
          <div className="text-cont2 text-white pt-5 mx-auto">
            <h2 className="display-5 fw-bold">iPhone 14</h2>
            <h3 className="fs-4 pt-1">Pro. Beyond</h3>
            <ul className="learn-link list-inline mt-1">
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Learn more
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Buy <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="img-wrapper"></div>
          </div>
        </div>
        <div className="forth-sec-ipad bg-set mt-3 col-md mt-md-0">
          <div className="text-cont2 pt-5 mx-auto">
            <h4 className="display-5 fw-bold">iPad</h4>
            <h3 className="fs-4 pt-1">Lovable. Drawable. Magical</h3>
            <ul className="learn-link list-inline mt-1">
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Learn more
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Buy <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
