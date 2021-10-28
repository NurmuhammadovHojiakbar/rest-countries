import "./FilterForm.css"
import SearchIcon from "../SVG/SearchIcon"

function FilterForm({ setInputName, setSelectRegion }) {
    return (
        <form className="filter-form container">
            <label className="search-name">
                <SearchIcon />
                <input 
                    className="search-name__input" 
                    type="search" 
                    name="countries"
                    placeholder="Search for a country…"
                    onChange={(e)=>{
                        setInputName(e.target.value)
                    }}
                    />
            </label>
            <label className="search-region">
                <span className="search-region__text">Filter by region</span>
                <select 
                    className="search-region__select"
                    onChange={(e)=>{
                        setSelectRegion(e.target.value)
                    }}
                >
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </label>
        </form>
    );
}

export default FilterForm;