<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <g-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="M">
      </g-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">

        <g-link class="navbar-item is-uppercase" to="/">All</g-link>
        <g-link class="navbar-item is-uppercase" to="/tag/trump">Trump</g-link>
        <g-link class="navbar-item is-uppercase" to="/tag/democrats">Democrats</g-link>
        <g-link class="navbar-item is-uppercase" to="/tag/unhinged">Unhinged</g-link>
        <g-link class="navbar-item is-uppercase" to="/tag/truth">Truth</g-link>
        <g-link class="navbar-item is-uppercase" to="/tag/funny">Funny</g-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-uppercase">More..</a>

          <div class="navbar-dropdown">
            <a class="navbar-item is-uppercase" href="https://www.instagram.com/realmemedepot/"><span>📷</span>Instagram</a>
            <a class="navbar-item is-uppercase" href="https://www.facebook.com/realmemedepot"><span>📘</span>Facebook</a>
            <a class="navbar-item is-uppercase" href="https://twitter.com/realmemedepot"><span>🐦</span>Twitter</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <g-link class="navbar-item is-uppercase" to="/about">About Us</g-link>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  mounted() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";

.navbar {
  padding: 0 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px dashed #eee;
}
.logo {
  height: 40px;
  margin-top: 5px;
  margin-right: 1rem;
}

a.navbar-link:hover {
  color: $orange;
}

.navbar-dropdown {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 1px dashed #eee;
  box-shadow: 0 2px 2px rgba(10, 10, 10, 0.1);

  a span {
    margin-right: 0.2rem;
  }
}

.navbar-burger span {
  height: 2px;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: $orange;
  margin-top: -0.375em;
  right: 1.125em;
}

dropdown:hover .navbar-link {
  background-color: #fff;
}

a.navbar-item:hover {
  background-color: #fff !important;
  color: $orange !important;
}
</style>