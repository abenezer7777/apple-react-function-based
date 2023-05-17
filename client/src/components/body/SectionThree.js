import React from "react";
import cardLogo from "../../image/logo/card_logo__b0k9gna8xemu_large_2x (1).png";
export default function SectionThree() {
  return (
    <div>
      <section className="third-sec bg-set mt-3">
        <div className="logo-wrapper pt-5">
          <img src={cardLogo} alt="" />
        </div>
        <div className="text-cont text-white mx-auto">
          <h3 className="fs-4 pt-2">
            Save 5% on Apple products with a new Apple Card through December 25.
          </h3>
          <h4 className="fs-5 pt-1">
            Only at Apple. Exclusions and terms apply.
          </h4>
          <ul className="learn-link list-inline mt-1">
            <li className="list-inline-item">
              <a href="#" className="fs-5 link-primary">
                Learn more
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fs-5 link-primary">
                Apply <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
