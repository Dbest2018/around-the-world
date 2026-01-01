import React from "react";
import "./Detail.css";

import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

const Detail = ({ countries, darkMode }) => {
  let params = useParams();
  // console.log(params.id);
  const country = countries[params.id];
  console.log(countries);
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    timezones,
    currencies,
    languages,
  } = country;

  const styles = {
    backgroundColor: darkMode
      ? "var(--dark-mode-elements)"
      : "var(--light-mode-elements)",
    color: darkMode ? "var(--dark-mode-text)" : "var(--light-mode-text)",
  };

  return country ? (
    <div className="detail" style={styles}>
      <Link to="/" className="detail__link">
        <div className="detail__nav" style={styles}>
          <BiArrowBack />
          <div className="detail__nav-text">Back</div>
        </div>
      </Link>
      <div className="detail__country">
        <img
          src={flags.svg}
          alt="country-flag"
          className="detail__country-flag"
        />
        <div className="detail__country-info">
          <div className="detail__country-info__header">{name.common}</div>

          <div className="detail__country-info__middle">
            <div className="detail__country-info__left">
              <div className="text">
                Native Name: <span>{name.nativeName.eng.common}</span>
              </div>
              <div className="text">
                Population: <span>{population}</span>
              </div>
              <div className="text">
                Region: <span>{region}</span>
              </div>
              <div className="text">
                Sub Region: <span>{subregion}</span>
              </div>
              <div className="text">
                Capital: <span>{capital ? capital[0] : "None"}</span>
              </div>
            </div>

            <div className="detail__country-info__right">
              <div className="text">
                Time Zone: <span>{timezones ? timezones[0] : "None"}</span>
              </div>
              <div className="text">
                Currencies:{" "}
                <span>
                  {currencies ? Object.values(currencies)[0].name : "None"}
                </span>
              </div>
              <div className="text">
                Languages:{" "}
                <span>{languages ? Object.values(languages)[0] : "None"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Detail;
