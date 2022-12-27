import Country from "@/Country";

export default class CountryApi {
    static getAllCountries(state) {
        fetch('https://restcountries.com/v3.1/all?fields=flags,name,capital,region,population')
            .then(response => response.json())
            .then(countries => {
                let id = 0;
                countries.forEach(country => {
                    state.countries.push(
                        new Country(
                            id++,
                            country.flags.png,
                            country.name.common,
                            country.capital,
                            country.region,
                            country.population
                        )
                    )
                })
            })
            .then(() => {
                state.countries.sort((a, b) => {
                    if (a.title < b.title)
                        return -1;

                    if (a.title > b.title)
                        return 1;

                    return 0;
                })
            })

    }
}