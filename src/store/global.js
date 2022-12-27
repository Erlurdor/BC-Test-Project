import Vuex from 'vuex'
import Vue from "vue";
import CountryApi from "@/Api/CountryApi";

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
        // в отдельны класс Api
        loadCountries(state) {
            CountryApi.getAllCountries(state)
            console.log(state.countries)
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