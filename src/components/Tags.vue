<template>
  <div class="tags">
    <a class="tag" v-for="tag in tags" :key="tag.id" :href="'/tag/' + tag.title">{{ tag.title }}</a>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  },
  methods: {
    created() {
      console.log(tags);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  display: inline;
}
.tag {
  color: #111;
  margin-right: 0.7rem;
  text-transform: lowercase;
  display: inline;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>