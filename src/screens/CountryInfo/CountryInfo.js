import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Configs from "../../config/config";
import "./CountryInfo.css";
import BackIcon from "../../components/SVG/BackIcon";

function CountryInfo() {

    const {countryName} =useParams();
    const history = useHistory();

    const [ country, setCountry ] = useState(null);
    const [ loader, setLoader] = useState(false);
    const [ err, setErr] = useState(false);
    const API = Configs.REST_COUNTRY_URL + "name/" + countryName;
    
    useEffect(()=>{
        
        setLoader(true)
        
        setTimeout(()=>{
            fetch(API)
                .then(res =>res.json())
                .then(data =>{
                    setCountry(...data)
                })
                .catch(err => setErr(err))
                .finally(setLoader(false))
        },1000)
    },[API])
    

    return (
        <section className="country-info">
            <div className="country-info__container container">
                <div className="back-wrapper">
                    <Link 
                        className="back-wrapper__link" 
                        to="/"
                        onClick = {(e)=>{
                            e.preventDefault();
                            history.goBack();
                        }}
                    >
                        <BackIcon />
                        <span className="back-wrapper__text">Back</span>
                    </Link>
                </div>
                {
                    loader && !country && <p className="loading">Loading...</p>
                }
                {
                    !loader && country && 
                    <div className="country-info__wrapper">
                        <img
                            className="country-info__wrapper-flag"
                            src={country.flags.png? country.flags.png : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"}
                            alt={country.name}
                            width="560"
                            height="400"
                        />
                        <div className="country-info__text">
                            <h1 className="country-info__title">{country.name}</h1>
                            <div className="country-info__text-wrapper">
                                <dl className="country-card__info-text">
                                    <div className="country-card__info-wrapper">
                                        <dt>Native Name:</dt>
                                        <dd>{ country.nativeName }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Population:</dt>
                                        <dd>{ country.population }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Region:</dt>
                                        <dd>{ country.region }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Sub Region:</dt>
                                        <dd>{ country.subregion }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Capital:</dt>
                                        <dd>{ country.capital }</dd>
                                    </div>
                                </dl>
                                <dl className="country-card__info-text">
                                    <div className="country-card__info-wrapper">
                                        <dt>Top Level Domain:</dt>
                                        <dd>{ country.topLevelDomain }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Currencies:</dt>
                                        <dd>{ country.currencies[0].code }</dd>
                                    </div>
                                    <div className="country-card__info-wrapper">
                                        <dt>Languages:</dt>
                                        <dd>{ country.languages[0].name }</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="border-wrapper">
                                <h2 className="border-wrapper__title">Border Countries:</h2>
                                <ul className="border-wrapper__list">
                                    {   country.borders?
                                        country.borders.map(b=>(
                                            <li className="border-wrapper__item">{b}</li>
                                        )) 
                                            :
                                        <li className="border-wrapper__item">Can not find border country</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                {err && <p style={{textAlign: "center"}}>Something went wrong...</p>}
            </div>
        </section>
    );
}

export default CountryInfo;