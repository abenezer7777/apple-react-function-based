import React from "react";
import ProductPage from "../Iphone/ProductPage";

export default function SectionOne() {
  return (
    <div>
      <div className="top-50">
        <div className="container-fluid ps-0 pe-0">
          <section className="first-sec bg-set ">
            <div className="text-cont pt-5 mx-auto">
              <h2 className="display-4 fw-bold">iPhone 14</h2>
              <h3 className="fs-3 mt-2">Big and bigger</h3>
              <ul className="learn-link list-inline mt-1">
                <li className="list-inline-item">
                  <a href="/iphone/iphonese" className="fs-5 link-primary">
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
          </section>
        </div>
      </div>
    </div>
  );
}
