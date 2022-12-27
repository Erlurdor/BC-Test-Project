<template>
  <div class="main">
    <NavBar/>
    <b-container>
      <b-row cols="1" cols-sm="2" cols-lg="4">
        <b-col v-for="country in getCountries"
               :key="country.id"
        >
          <Card :country="country"/>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Card from "@/components/CountryCard.vue";

export default {
  name: "MainComponent",
  data: function () {
    return {
      countries: []
    }
  },
  components: {
    NavBar,
    Card
  },
  computed: {
    getCountries() {
      return this.countries
    }
  },
  created() {
    this.countries = this.$store.getters.getCountries
  }
}
</script>

<style scoped>
.main {
  background-color: lightgray;
}
</style>