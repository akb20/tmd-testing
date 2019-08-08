<template>
  <Layout>
    <div class="content">
      <h1 class="title">📂 Memes filed under <span>{{ $page.tag.title }}</span></h1>
      <div class="cards">
        <div v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id" class="card">

          <g-link :to="node.path">
            <div class="card-thumb">
              <g-image :src="node.cover" />
            </div>

          </g-link>

        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Tag($id: String!) {
    tag (id: $id) {
      title
        belongsTo {
          pageInfo {
            totalPages
            currentPage
          }
            edges {
              node {
                ...on Post {
                id
                title
                date (format: "DD/MM/YYYY")
                excerpt
                path
                cover
                }
              }
            }
          }
      }
    }
</page-query>

<style lang="scss" scoped>
@import "../assets/scss/styles.scss";

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .card {
    flex-basis: 32%;
    margin-bottom: 1.5rem;
    position: relative;
    color: $black;
    border: 1px solid #eee;

    .card-thumb {
      height: 310px;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.title {
  margin-bottom: 2rem;
}
.title span {
  background-color: lighten($orange, 42%);
  padding: 0.2rem 0.8rem;
  text-transform: uppercase;
  border-bottom: 3px dashed $orange;
}

// media queries
@media (max-width: 1050px) {
  .title {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .cards .card {
    flex-basis: 49%;
  }

  .card .card-thumb {
    height: 340px;
  }
}

@media (max-width: 600px) {
  .cards .card {
    flex-basis: 100%;
  }

  .card .card-thumb {
    height: 370px;
  }
}
</style>