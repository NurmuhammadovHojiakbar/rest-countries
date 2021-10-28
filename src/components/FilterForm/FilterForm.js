import "./FilterForm.css"
import SearchIcon from "../SVG/SearchIcon"
import { useRef } from "react";

function FilterForm({ setInputName, setSelectRegion }) {

    const inputRef = useRef();
    const selectRef = useRef();

    return (
        <form className="filter-form container" onSubmit = {(e)=>e.preventDefault()}>
            <label className="search-name">
                <SearchIcon />
                <input 
                    className="search-name__input" 
                    type="search" 
                    name="countries"
                    placeholder="Search for a country…"
                    ref={inputRef}
                    onKeyDown={(e)=>{
                        if(e.keyCode === 13){
                            setSelectRegion("")
                            selectRef.current.value = ""
                            setInputName(e.target.value)
                        }
                    }}
                    />
            </label>
            <label className="search-region">
                <span className="search-region__text">Filter by region</span>
                <select 
                    className="search-region__select"
                    ref={selectRef}
                    onChange={(e)=>{
                        setSelectRegion(e.target.value)
                        setInputName("")
                        inputRef.current.value = ""
                    }}
                >
                    <option value="">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </label>
        </form>
    );
}

export default FilterForm;