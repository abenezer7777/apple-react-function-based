import React from "react";
import promoLogoAppleWatch from "../../image/logo/promo_logo_apple_watch_series_8__ee6riplsucuq_large_2x.png";
export default function SectionSix() {
  return (
    <div>
      <div className="six-sec row ms-md-2 me-md-2 mt-md-2">
        <div className="six-sec-watch8 bg-set mt-3 col-md me-md-2 mt-md-0 justify-content-evenly">
          <div className="logo-wrapper pt-5">
            <img src={promoLogoAppleWatch} alt="" />
          </div>
          <div className="text-cont2 text-white pt-1 mx-auto">
            <h3 className="fs-4 pt-1">A healthy leap ahead.</h3>
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
        <div className="six-sec-pro bg-set mt-3 col-md mt-md-0">
          <div className="text-cont2 text white pt-5 mx-auto">
            <h4 className="display-5 fw-bold">iPad Pro</h4>
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
