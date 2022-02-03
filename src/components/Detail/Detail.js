import React from "react";
import "./Detail.css";

import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

const Detail = ({ countries, darkMode }) => {
  let params = useParams();
  const country = countries[params.id];
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const styles = {
    backgroundColor: darkMode
      ? "var(--dark-mode-elements)"
      : "var(--light-mode-elements)",
    color: darkMode ? "var(--dark-mode-text)" : "var(--light-mode-text)",
  };

  return (
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
          <div className="detail__country-info__header">{name}</div>

          <div className="detail__country-info__middle">
            <div className="detail__country-info__left">
              <div className="text">
                Native Name: <span>{nativeName}</span>
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
                Capital: <span>{capital ? capital : "None"}</span>
              </div>
            </div>

            <div className="detail__country-info__right">
              <div className="text">
                Top Level Domain:{" "}
                <span>{topLevelDomain ? topLevelDomain[0] : "None"}</span>
              </div>
              <div className="text">
                Currencies:{" "}
                <span>{currencies ? currencies[0].code : "None"}</span>
              </div>
              <div className="text">
                Languages: <span>{languages ? languages[0].name : "None"}</span>
              </div>
            </div>
          </div>

          <div className="detail__country-info__footer">
            <div className="text">Border Countries: </div>
            <div className="footer__countries">
              <div>{borders ? borders[0] : "None"}</div>
              <div>{borders ? borders[1] : "None"}</div>
              <div>{borders ? borders[2] : "None"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
