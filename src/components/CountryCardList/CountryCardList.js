import { useEffect, useState } from "react";
import Configs from "../../config/config";
import "./CountryCardList.css"
import CountryCardItem from "../CountryCardItem/CountryCardItem"
const Api = Configs.REST_COUNTRY_URL;

const CountryCardList = ({ inputName, selectRegion }) => {
    const [ countryList, setCountryList ] = useState(null);
    const [ loader, setLoader ] = useState(false);
    const [filterBy, setFilterBy] = useState("all")

    
    useEffect(()=>{
        
        if(inputName){
            setFilterBy(`name/${inputName}`)
        }else if(selectRegion){
            setFilterBy(`region/${selectRegion}`)
        }else{
            setFilterBy("all")
        }

    },[selectRegion, inputName])

    useEffect(() =>{
        setLoader(true)

        fetch(Api + filterBy)
            .then(res => {
                if(res.ok){
                    return res.json()
                }
            })
            .then(data =>setCountryList(data))
            .finally(()=>setLoader(false))
    },[filterBy])

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