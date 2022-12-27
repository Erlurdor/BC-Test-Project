<template>
  <div>
    <NavBar/>
    <b-card
        no-body
        class="editBody"
    >
      <b-card-title class="cardTitle">Информация о стране {{ country.title }}</b-card-title>
      <b-form class="editForm">
        <b-form-group class="formGroup">


          <b-form-input
              class="inputData"
              type="text"
              placeholder="Наименование страны"
              v-model="countryForm.title"
              required
          ></b-form-input>

          <b-form-input
              class="inputData"
              v-model="countryForm.capital"
              type="text"
              placeholder="Столица"
              required
          ></b-form-input>

          <b-form-input
              class="inputData"
              v-model="countryForm.area"
              type="text"
              placeholder="Регион"
              required
          ></b-form-input>

          <b-form-input
              v-model="countryForm.population"
              type="number"
              placeholder="Население"
              required
          ></b-form-input>
        </b-form-group>

        <b-container>
          <b-row align-v="center">
            <b-col>
              <b-button @click="onSubmit()" variant="primary">Сохранить</b-button>
            </b-col>
            <b-col>
              <b-button @click="onCancel()" variant="danger">Отмена</b-button>
            </b-col>
          </b-row >
        </b-container>

      </b-form>
    </b-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Country from "@/Country";
import router from "@/router";

export default {
  name: "EditComponent",
  components: {NavBar},
  data() {
    return {
      countryForm: {
        title: this.country.title,
        capital: this.country.capital[0],
        area: this.country.area,
        population: this.country.population
      },
    }
  },
  props: {
    country: Country
  },
  methods: {
    onSubmit() {
      let changedCountry = new Country(
          this.country.id,
          this.country.image,
          this.countryForm.title,
          this.countryForm.capital,
          this.countryForm.area,
          this.countryForm.population,
      )
      this.$store.commit('editCountry', changedCountry)

      router.push('/')
    },
    onCancel() {
      router.push('/')
    }
  }
}
</script>

<style scoped>
.editBody {
  max-width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
}

.formGroup {
  margin: 2rem 10%;
}

.inputData {
  margin-bottom: 2rem;
}

.cardTitle {
  margin-top: 2rem;
}

.editForm {
  margin-bottom: 2rem;
}
</style>