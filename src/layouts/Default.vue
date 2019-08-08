<template>
  <div class="layout">
    <!-- <TopBar /> -->
    <Header />
    <transition name="fade" appear>
      <div class="wrapper">
        <slot />
      </div>
    </transition>
    <Footie />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footie from "@/components/Footie";
export default {
  components: {
    TopBar,
    Header,
    Footie
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap");
@import "../assets/scss/styles.scss";

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto Mono", monospace !important;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-size: 16px;
  background-color: #fff;
  color: $black;
  position: relative;
}

.wrapper {
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 1rem;
}

a:-webkit-any-link {
  color: $black;
  cursor: pointer;
  text-decoration: none;
}

p {
  margin-top: 1rem !important;
}

//page transitions
.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-enter {
  opacity: 0;
}

// media queries
</style>

