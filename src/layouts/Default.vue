<template>
  <div class="layout">
    <TopBar />
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
  font-family: "Roboto Mono", monospace;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  font-size: 16px;
  background-color: #fff;
  color: $black;
  position: relative;
}

.wrapper {
  width: 1000px;
  margin: 0 auto;
}

a:-webkit-any-link {
  color: $black;
  cursor: pointer;
  text-decoration: none;
}

//page transitions
.fade-enter-active {
  transition: opacity 0.4s;
}

.fade-enter {
  opacity: 0;
}
</style>

