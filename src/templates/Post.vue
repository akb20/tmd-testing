<template>
  <Layout>
    <div class="main">
      <article>
        <h2 class="article-title">{{ $page.post.title }}</h2>

        <g-image class="main-img" :src="$page.post.cover" />

      </article>

      <aside>
        <div class="aside-content">
          <div class="aside-content-inner">

            <p><a class="btn-download" :href="$page.post.cover" download>💾 Download</a></p>
            <p>(or right-click image and "save image as...")</p>

            <div class="hr"></div>

            <p class="tags"> 📂
              <Tags :tags="$page.post.tags" />
            </p>

            <div class="hr"></div>

            <h3>Find us on:</h3>
            <div class="social-links">
              <a href="https://www.instagram.com/realmemedepot/"><span>📷</span>Instagram</a>
              <a href="https://www.facebook.com/realmemedepot"><span>📘</span>Facebook</a>
              <a href="https://twitter.com/realmemedepot"><span>🐦</span>Twitter</a>
            </div>

          </div>

        </div>
      </aside>
    </div>
  </Layout>
</template>


<script>
import Tags from "@/components/Tags";
export default {
  components: {
    Tags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@realmemedepot" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@realmemedepot" },

        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.title },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.post.path}`
        },
        { property: "og:image", content: this.getCoverImage }
      ]
    };
  },
  computed: {
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover;
      return coverImage;
    },
    getBaseUrl() {
      console.log(process.env.GRIDSOME_BASE_URL);
      return process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  color: $black;

  .article-title {
    font-size: 2.7rem;
    margin: 0;
    line-height: 1.1;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }

  .main-img {
    max-width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
  }
}
article {
  flex-basis: 67%;
  padding-right: 2rem;
}

aside {
  flex-basis: 33%;
  flex-direction: column;

  .aside-content {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .aside-content-inner {
    padding: 0.2rem 1rem 2rem 1rem;
    text-align: center;
  }

  .btn-download {
    display: block;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    padding: 0.6rem 1rem;
    background-color: #ef7125;
    margin-top: 1rem;
    border-radius: 3px;
    &:hover {
      background-color: darken($orange, 7%);
    }
  }
  .tags {
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
  }
  .tag:not(body) {
    font-size: 0.85rem;
    text-transform: uppercase !important;
    background-color: #fff;
  }

  .hr {
    height: 4px;
    width: 20%;
    background-color: #eee;
    margin: 2rem auto 2rem auto;
  }

  .social-links a {
    display: block;
    margin-bottom: 0.5rem;
    span {
      margin-right: 0.2rem;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 1050px) {
  article,
  aside {
    flex-basis: 100%;
    padding: 0 1rem;
  }

  article {
    padding-right: 0;
  }

  .main .main-img {
    max-width: 97%;
  }

  .main .article-title {
    font-size: 1.5rem;
  }
}
</style>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      title
      cover
      date (format: "D. MMMM YYYY")
      tags {
        id
        title
        path
      }
    }
  }
</page-query>