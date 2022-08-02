<template>
  <div class="content-item">
    <div class="blog-icon">
      <img alt="The Icon" src="@/assets/qkyOwO.png" />
    </div>
    <div class="blog-details">
      <span class="title">
        <router-link to="/">
          This title is too long! you can't put this title in my blog lmao! If it's too long, you have to strip it a
          little bit. Max is 128
        </router-link>
        <span class="date">10/01/2022</span>
      </span>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit atque, quo deleniti est laborum sit vero
          iusto repellat beatae magni laudantium illo velit, eligendi necessitatibus culpa assumenda corrupti magnam
          commodi?
        </p>
        <span class="writter-detail">
          Written by
          <strong>QkyMauln</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  div.content-item {
    background: var(--bg-main);
    display: flex;
    .blog-icon {
      padding: 10px 5px;
      min-width: 85px;
      background: rgba(0, 0, 0, 0.315);
      text-align: center;
      img {
        max-height: 75px;
        max-width: 75px;
      }
    }
    .blog-details {
      padding: 10px;
      font-family: var(--font-primary);
      & > .title {
        display: flex;
        a {
          font-size: 1.2em;
          text-decoration: none;
          color: var(--color-primary);
          font-weight: bold;
        }
        .date {
          float: right;
        }
      }
      & > .description {
        margin-top: 10px;
        p {
          font-size: 12px;
          margin-bottom: 10px;
        }
        .writter-detail {
        }
      }
    }
  }
</style>
