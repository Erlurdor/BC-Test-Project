<template>
  <div class="mainNavBar">
    <!-- As a link -->
    <b-navbar variant="faded" type="light">
      <b-navbar-brand class="title">
        <router-link :to="{name: 'Main'}" class="link">
          Страны мира
        </router-link>
      </b-navbar-brand>
      <b-navbar-brand class="link" href="https://restcountries.com/">
        https://restcountries.com
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .mainNavBar {
    background-color: white;
    border: 1px solid;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-left: 10%;
  }

  .link {
    margin-left: auto;
    margin-right: 10%;
    font-weight: bold;
    color: black;
  }
</style>