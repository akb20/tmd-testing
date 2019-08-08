<template>
  <footer class="site-footer">
    <div class="left">
      <h3>Political and social memes. From our mind to yours.</h3>
      <p>Find us on:</p>
      <div class="social-links">
        <a href="#"><span>📷</span>Instagram</a>
        <a href="#"><span>📘</span>Facebook</a>
        <a href="#"><span>🐦</span>Twitter</a>
      </div>
    </div>

    <div class="center">
      <img src="../assets/images/logo.png" alt="" class="logo">
    </div>

    <div class="right">
      <h3>Explore Memes 🔭</h3>
      <ul>
        <li><a class="nav-link" href="/tag/trump">Trump/maga</a></li>
        <li><a class="nav-link" href="/tag/trump">Democrats</a></li>
        <li><a class="nav-link" href="/tag/trump">Unhinged</a></li>
        <li><a class="nav-link" href="/tag/trump">Truth</a></li>
        <li><a class="nav-link" href="/tag/trump">Tweets</a></li>
        <li><a class="nav-link" href="/tag/trump">Aoc</a></li>
        <li><a class="nav-link" href="/tag/trump">Bernie</a></li>
        <li><a class="nav-link" href="/tag/trump">Media</a></li>
        <li><a class="nav-link" href="/tag/trump">Leftists</a></li>
        <li><a class="nav-link" href="/tag/trump">Big Tech</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
        <li><a class="nav-link" href="/tag/trump">Funny</a></li>
      </ul>
    </div>

  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss"scoped>
@import "../assets/scss/styles.scss";
.site-footer {
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #464646;
  color: #ffffff;
  margin-top: 8rem;
  padding: 0 3rem;

  @media (max-width: 1050px) {
    justify-content: center;
    margin-top: 3rem;
  }
  .logo {
    height: 120px;
    width: auto;
  }

  .center {
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1050px) {
      display: none;
    }
  }

  .left,
  .right {
    flex-basis: 35%;
  }

  .left {
    p {
      line-height: 1;
    }
    .social-links a {
      font-size: 0.9rem;
      color: #fff;
      margin-right: 1rem;

      span {
        margin-right: 0.2rem;
      }
    }
    @media (max-width: 1050px) {
      text-align: center;
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    ul {
      margin: 0;
      padding: 0;
    }
    ul li {
      list-style-type: none;
      display: inline-block;

      a {
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media (max-width: 1050px) {
      display: none;
    }
  }
}
</style>