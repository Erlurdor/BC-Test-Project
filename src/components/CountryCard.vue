<template>
  <div>
    <b-card
        no-body
        class="card"
    >
      <b-card-img-lazy
          top
          :src="country.image"
          height="150rem"
      >
      </b-card-img-lazy>
      <b-container>
        <b-row align-v="center">
          <b-col cols="10">
            <b-card-title
                class="title"
            >
              <div :title=country.title>
                  {{ country.getCompactTitle() }}
              </div>
            </b-card-title>
          </b-col>
          <b-col cols="2">
            <router-link :to="{name: 'Edit', params: {country: this.country}}">
              <img src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle.png"
                   title="Edit"
                   width="100%"
                   height="100%"
              >
            </router-link>
          </b-col>
        </b-row>


        <b-row>
          <b-col cols="6">
            <b-card-body class="bodyName leftAlign">
                Столица
            </b-card-body>
          </b-col>
          <b-col cols="6">
            <b-card-body class="bodyValue leftAlign">
              <div :title=country.capital.toString()>
                {{ country.getCompactCapital() }}
              </div>
            </b-card-body>
          </b-col>

          <b-col cols="6">
            <b-card-body class="bodyName leftAlign">
                Регион
            </b-card-body>
          </b-col>
          <b-col cols="6">
            <b-card-body class="bodyValue leftAlign">
              {{ country.area.toString() }}
            </b-card-body>
          </b-col>

          <b-col cols="6">
            <b-card-body class="bodyName leftAlign">
                Население
            </b-card-body>
          </b-col>
          <b-col cols="6">
            <b-card-body class="bodyValue leftAlign">
              {{ country.population.toString() }}
            </b-card-body>
          </b-col>


        </b-row>
      </b-container>


    </b-card>
  </div>
</template>

<script>
import Country from "@/Country";

export default {
  name: "CountryCard",
  props: {
    country: Country
  },
}

</script>
<style scoped>
  .card {
    margin-bottom: 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }

  .title {
    margin-bottom: 0.25rem;
  }

  .bodyName {
    font-weight: bold;
    padding-left: 0;
  }

  .bodyValue {
    padding-left: 0;
    color: grey;
  }

  .leftAlign {
    padding-right: 0;
    padding-bottom: 0.1rem;
    padding-top: 0;
    text-align: left;
  }
</style>