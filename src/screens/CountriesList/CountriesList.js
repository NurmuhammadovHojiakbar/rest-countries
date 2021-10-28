import "./CountriesList.css";
import FilterForm from "../../components/FilterForm/FilterForm";
import CountryCardList from "../../components/CountryCardList/CountryCardList";
import { useState } from "react";

function CountriesList() {

    const [inputName, setInputName] = useState("")
    const [selectRegion, setSelectRegion] = useState("")


    return (
            <section className="countries-list">
                <FilterForm 
                    setInputName = { setInputName }
                    setSelectRegion = { setSelectRegion }
                />
                <CountryCardList 
                    inputName = { inputName } 
                    selectRegion = { selectRegion }    
                />
            </section>
    );
}

export default CountriesList;