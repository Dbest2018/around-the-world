import React from "react";
import "./Detail.css";

import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

const Detail = ({ countries }) => {
  let params = useParams();
  console.log(params.id);
  return (
    <div className="detail">
      <Link to="/" className="detail__link">
        <div className="detail__nav">
          <BiArrowBack />
          <div className="detail__nav-text">Back</div>
        </div>
      </Link>
      <div className="detail__country">
        <img
          src={countries[params.id] && countries[params.id].flags.svg}
          alt="country-flag"
          className="detail__country-flag"
        />
        <div className="detail__country-info">
          <div className="detail__country-info__header">
            {countries[params.id] && countries[params.id].name}
          </div>

          <div className="detail__country-info__middle">
            <div className="detail__country-info__left">
              <div className="text">
                Native Name:{" "}
                <span>
                  {countries[params.id] && countries[params.id].nativeName}
                </span>
              </div>
              <div className="text">
                Population:{" "}
                <span>
                  {countries[params.id] && countries[params.id].population}
                </span>
              </div>
              <div className="text">
                Region:{" "}
                <span>
                  {countries[params.id] && countries[params.id].region}
                </span>
              </div>
              <div className="text">
                Sub Region:{" "}
                <span>
                  {countries[params.id] && countries[params.id].subregion}
                </span>
              </div>
              <div className="text">
                Capital:{" "}
                <span>
                  {countries[params.id] && countries[params.id].capital}
                </span>
              </div>
            </div>

            <div className="detail__country-info__right">
              <div className="text">
                Top Level Domain:{" "}
                <span>
                  {countries[params.id] &&
                    countries[params.id].topLevelDomain[0]}
                </span>
              </div>
              <div className="text">
                Currencies:{" "}
                <span>
                  {countries[params.id] &&
                    countries[params.id].currencies[0].code}
                </span>
              </div>
              <div className="text">
                Languages:{" "}
                <span>
                  {countries[params.id] &&
                    countries[params.id].languages[0].name}
                </span>
              </div>
            </div>
          </div>

          <div className="country-info__footer">
            <div className="text">
              Border Countries:{" "}
              {/* <span>
                {countries[params.id] && countries[params.id].borders[0]}
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
