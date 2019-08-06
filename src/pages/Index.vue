<template>
  <Layout>

    <div class="cards">
      <div class="card" v-for="post in $page.posts.edges" :key="post.id">

        <div class="card-thumb">
          <g-link :to="post.node.path">
            <g-image :src="post.node.cover" />
          </g-link>
        </div>

      </div>
      <!-- end card -->

    </div>
    <!-- end cards -->

    <Pager class="paginate" :info="$page.posts.pageInfo" />

  </Layout>
</template>

<page-query>
  query Posts ($page: Int) {
    posts: allPost (perPage: 15, page: $page, sortBy: "date", order: DESC) @paginate {
      totalCount
      pageInfo {
      totalPages
      currentPage
    }
      edges {
        node {
          id 
          title
          path
          cover
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<script>
import Tags from "@/components/Tags";
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "THE MEME DEPOT",
    meta: [
      { name: "author", content: "the meme depot" },
      { name: "description", content: "Funny memes" }
    ]
  },
  components: {
    Pager,
    Tags
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    flex-basis: 32%;
    margin-bottom: 1.3rem;
    position: relative;
    color: $black;
    border: 1px solid #eee;
    border-radius: 3px;

    .card-thumb {
      height: 310px;
      position: relative;
      overflow: hidden;
      &:hover {
        -webkit-filter: brightness(0.85);
        filter: brightness(0.85);
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 3px;
      }
    }

    .post-title {
      font-size: 1.5rem;
      text-transform: capitalize;
      line-height: 1;
      margin: 0.5rem 0;
    }
  }
}

.paginate {
  text-align: center;
  margin-top: 3rem;

  a {
    font-size: 1.3rem;
    padding: 0.3rem 0.8rem;
    margin: 0 0.5rem;
    background-color: #464646;
    color: #fff;
    border-radius: 3px;
  }
}
</style>
