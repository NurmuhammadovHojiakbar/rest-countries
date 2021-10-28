import { useEffect, useState } from "react";
import Configs from "../../config/config";
import "./CountryCardList.css"
import CountryCardItem from "../CountryCardItem/CountryCardItem"

const CountryCardList = ({ inputName, selectRegion }) => {
    const [ countryList, setCountryList ] = useState(null);
    const [ loader, setLoader ] = useState(false);
    const API = Configs.REST_COUNTRY_URL + "all";

    useEffect(() =>{

        setLoader(true)

        fetch(API)
            .then(res => res.json())
            .then(data =>{
                setCountryList(data)
                setLoader(false)
            })
    },[API])

    return (
        <section>
            <div className="container">
                { loader? 
                    <p className="loading">Loading...</p> 
                    : 
                    <ul className="country-card__list">
                        {
                            countryList?.map(country =>(
                                    <CountryCardItem country={country} />
                                ))
                        }
                    </ul>
                }
            </div>
        </section>
    );
}

export default CountryCardList;