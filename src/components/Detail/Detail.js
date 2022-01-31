import React from "react";
import "./Detail.css";

import { BiArrowBack } from "react-icons/bi";

const Detail = ({ countries }) => {
  return (
    <div className="detail">
      <div className="detail__nav">
        <BiArrowBack />
        <div className="detail__nav-text">Back</div>
      </div>
      <div className="detail__country">
        <img
          src={countries[0] && countries[0].flags.svg}
          alt="country-flag"
          className="detail__country-flag"
        />
        <div className="detail__country-info">
          <div className="detail__country-info__header">
            {countries[0] && countries[0].name}
          </div>

          <div className="detail__country-info__middle">
            <div className="detail__country-info__left">
              <div className="text">
                Native Name:{" "}
                <span>{countries[0] && countries[0].nativeName}</span>
              </div>
              <div className="text">
                Population:{" "}
                <span>{countries[0] && countries[0].population}</span>
              </div>
              <div className="text">
                Region: <span>{countries[0] && countries[0].region}</span>
              </div>
              <div className="text">
                Sub Region:{" "}
                <span>{countries[0] && countries[0].subRegion}</span>
              </div>
              <div className="text">
                Capital: <span>{countries[0] && countries[0].capital}</span>
              </div>
            </div>

            <div className="detail__country-info__right">
              <div className="text">
                Top Level Domain:{" "}
                <span>{countries[0] && countries[0].topLevelDomain[0]}</span>
              </div>
              <div className="text">
                Currencies:{" "}
                <span>{countries[0] && countries[0].currencies[0].code}</span>
              </div>
              <div className="text">
                Languages:{" "}
                <span>{countries[0] && countries[0].languages[0].name}</span>
              </div>
            </div>
          </div>

          <div className="country-info__footer">
            <div className="text">
              Border Countries:{" "}
              <span>{countries[0] && countries[0].borders[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
