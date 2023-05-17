import React from "react";
import promoLogoAirPod from "../../image/logo/promo_logo_airpods_holiday__uzkw355klvmy_large_2xxx.png";
import promoLogoWatch from "../../image/logo/promo_logo_apple_watch_ultra__ebzaahharnue_large_2x.png";
export default function SectionFifth() {
  return (
    <div>
      <div className="fifth-sec row ms-md-2 me-md-2 mt-md-2">
        <div className="fifth-sec-airPod bg-set mt-3 col-md me-md-2 mt-md-0 justify-content-evenly">
          <div className="logo-wrapper pt-5">
            <img src={promoLogoAirPod} alt="" />
          </div>
          <div className="text-cont2 pt-1 mx-auto">
            <h2 className="display-6 fw-bold">AirPods</h2>
            <h3 className="fs-4 pt-1">Share the joy</h3>
            <ul className="learn-link list-inline mt-1">
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Shop <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="img-wrapper"></div>
          </div>
        </div>
        <div className="fifth-sec-ultra bg-set mt-3 col-md mt-md-0">
          <div className="logo-wrapper pt-5">
            <img src={promoLogoWatch} alt="" />
          </div>
          <div className="text-cont2 pt-1 mx-auto">
            <h3 className="fs-4 pt-1">Adventure awaits.</h3>
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
