<template>
  <header class="site-header">

    <div class="nav-left">
      <g-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="M">
      </g-link>
    </div>

    <div class="nav-right">
      <g-link to="/">All</g-link>
      <g-link to="/tag/trump">Trump/Maga</g-link>
      <g-link to="/tag/democrats">Democrats</g-link>
      <g-link to="/tag/unhinged">Unhinged</g-link>
      <g-link to="/tag/truth">Truth</g-link>
      <g-link to="/tag/tweet">Tweets</g-link>
      <g-link to="/tag/funny">Funny</g-link>
    </div>

    <div class="mobile-nav">
      <Slide right noOverlay>
        <g-link to="/">All</g-link>
        <g-link to="/tag/trump">Trump/Maga</g-link>
        <g-link to="/tag/democrats">Democrats</g-link>
        <g-link to="/tag/unhinged">Unhinged</g-link>
        <g-link to="/tag/truth">Truth</g-link>
        <g-link to="/tag/tweet">Tweets</g-link>
        <g-link to="/tag/funny">Funny</g-link>
      </Slide>
    </div>

  </header>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
.site-header {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  padding: 0 2rem;
  border-bottom: 1px dashed #eee;
  z-index: 99;

  @media (max-width: 1050px) {
    height: 60px;
    padding: 0 1rem;
  }

  .logo {
    height: 35px;
    display: block;
    margin: 0;
  }

  .nav-left {
    flex-basis: 20%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 1050px) {
      display: flex;
      justify-content: flex-start;
      flex-basis: 80%;

      .logo {
        height: 45px;
      }
    }
  }
  .nav-right {
    display: flex;
    justify-content: space-between;
    flex-basis: 80%;

    @media (max-width: 1050px) {
      display: none;
    }

    a {
      text-transform: uppercase;
      color: $black;
      font-size: 0.85rem;
      font-weight: 700;
      &:hover {
        color: $orange;
      }
    }
  }

  .mobile-nav {
    display: none;

    @media (max-width: 1050px) {
      // display: block;
      display: flex;
      justify-content: space-between;
      flex-basis: 20%;
    }
  }

  .bm-burger-button {
    height: 25px;
    top: 17px;
    right: 10px;
  }

  .bm-burger-bars {
    background-color: $orange;
  }

  .bm-menu {
    background-color: #464646;
  }
}
</style>