<template>
  <header class="site-header">

    <div class="nav-left">
      <g-link to="/">
        <a class="nav-link" href="/tag/action">All</a>
      </g-link>
      <a class="nav-link" href="/tag/trump">Trump/maga</a>
      <a class="nav-link" href="/tag/sci-fi">Democrats</a>
    </div>

    <g-link to="/">
      <img class="logo" src="../assets/images/logo.png" alt="M">
    </g-link>
    <div class="nav-right">
      <a class="nav-link" href="/tag/crime">Unhinged</a>
      <a class="nav-link" href="/tag/80s">Truth</a>
      <a class="nav-link" href="/tag/comedy">Tweets</a>
    </div>

  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";
.site-header {
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
  padding: 0 1rem;
  z-index: 99;

  .logo {
    height: 95px;
    display: block;
    margin: 0;
  }

  .nav-left,
  .nav-right {
    display: flex;
    justify-content: space-between;
    flex-basis: 33.333%;

    a {
      text-transform: uppercase;
      color: $black;
      font-weight: 700;
      &:hover {
        color: $orange;
      }
    }
  }
}
</style>