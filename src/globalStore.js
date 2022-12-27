import Vuex from 'vuex'
import Vue from "vue";
import CountryInfo from "@/CountryInfo";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        countries: []
    },
    getters: {
      getCountries: state => {
          return state.countries
      }
    },
    mutations: {
        loadCountries(state) {
            fetch('https://restcountries.com/v3.1/all?fields=flags,name,capital,region,population')
                .then(response => response.json())
                .then(countries => {
                    var id = 0;
                    countries.forEach(country => {
                        state.countries.push(
                            new CountryInfo(
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
        },
        editCountry(state, newCountry) {
            let editCountry = state.countries.find(country => country.id === newCountry.id)

            editCountry.title = newCountry.title
            editCountry.area = newCountry.area
            editCountry.capital = newCountry.capital
            editCountry.population = newCountry.population
        }
    }
})
export default store