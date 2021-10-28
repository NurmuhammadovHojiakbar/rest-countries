import { Link } from "react-router-dom";
import "./CountryCardItem.css"

const CountryCardItem = ({country}) => {
    return (
        <li className="country-card__item">
            <Link className="country-card__link" to={country.name}>
                <img
                    className="country-card__flag"
                    src={country.flag? country.flag : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                    alt={country.name}
                    width="265"
                    height="160"
                />
                <div className="country-card__info">
                    <h2 className="country-card__title">{country.name}</h2>
                    <dl className="country-card__info-text">
                        <div className="country-card__info-wrapper">
                            <dt>Population:</dt>
                            <dd>{ country.population }</dd>
                        </div>
                        <div className="country-card__info-wrapper">
                            <dt>Region:</dt>
                            <dd>{ country.region }</dd>
                        </div>
                        <div className="country-card__info-wrapper">
                            <dt>Capital:</dt>
                            <dd>{ country.capital }</dd>
                        </div>
                    </dl>
                </div>
            </Link>
        </li>
    );
}

export default CountryCardItem;