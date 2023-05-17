import React from "react";

export default function SectionTwo() {
  return (
    <div>
      <div className="container-fluid ps-0 pe-0">
        <section className="second-sec row align-items-end bg-set mt-3">
          <div className="text-cont pb-4 text-white mx-auto">
            <h2 className="display-6 fw-bold">Give WOW.</h2>
            <h3 className="fs-4 pt-2">
              This holiday season, find the perfect gift for everyone on your
              list.
            </h3>
            <ul className="learn-link list-inline mt-1">
              <li className="list-inline-item">
                <a href="#" className="fs-5 link-primary">
                  Shop the gift guide
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
