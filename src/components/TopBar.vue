<template>
  <div class="top-bar">
    <g-link class="top-bar-nav" to="/about">About</g-link>
    <g-link class="top-bar-nav" to="/contact">Contact</g-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-bar {
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  padding: 0 1rem;
  border-bottom: 1px dashed #eee;

  .top-bar-nav {
    margin-left: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>