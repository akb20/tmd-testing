<template>
  <header class="site-header">

    <div class="nav-left">
      <g-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="M">
      </g-link>
    </div>

    <div class="nav-right">
      <g-link to="/">All</g-link>
      <g-link to="/tag/trump">Trump</g-link>
      <g-link to="/tag/democrats">Democrats</g-link>
      <g-link to="/tag/unhinged">Unhinged</g-link>
      <g-link to="/tag/truth">Truth</g-link>
      <g-link to="/tag/funny">Funny</g-link>
    </div>

  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
.site-header {
  height: 55px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  padding: 0 2rem;
  border-bottom: 1px dashed #eee;
  z-index: 99;

  @media (max-width: 1050px) {
    height: 130px;
    padding: 0 1rem;
  }

  .logo {
    height: 40px;
    display: block;
    margin: 0;
  }

  .nav-left {
    flex-basis: 20%;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 1050px) {
      display: flex;
      justify-content: center;
      flex-basis: 100%;

      .logo {
        height: 65px;
      }
    }
  }
  .nav-right {
    display: flex;
    justify-content: space-between;
    flex-basis: 80%;

    @media (max-width: 1050px) {
      flex-basis: 100%;
      margin-top: 0.5rem;
    }

    a {
      text-transform: uppercase;
      color: $black;
      font-size: 0.85rem;
      font-weight: 700;

      @media (max-width: 1050px) {
        font-size: 0.8rem;
      }
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>