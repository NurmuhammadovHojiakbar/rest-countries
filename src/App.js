import { Switch, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header";
import CountriesList from "./screens/CountriesList/CountriesList"
import CountryInfo from "./screens/CountryInfo/CountryInfo"

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={CountriesList} />
                <Route exact path="/:countryName" component={CountryInfo} />
            </Switch>
        </>
    );
}

export default App;