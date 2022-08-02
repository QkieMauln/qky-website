<template>
  <nav class="navigation-wrapper">
    <qkyLogo></qkyLogo>
    <span class="navigation">
      <span v-for="item of navItems" :key="item.emoji" class="nav-link">
        <router-link :to="item.url">
          <span v-emoji="item.emoji"></span>
          <!-- <img class="emoji" draggable="false" :alt="item.description" :src="item.emoji" /> -->
          <span class="nav-desc">{{ item.description }}</span>
        </router-link>
      </span>
    </span>
  </nav>
</template>

<script lang="ts" setup>
  import qkyLogo from "@/components/global/QkyLogo.vue";

  const navItems = [
    {
      emoji: "🗂",
      description: "Blog",
      url: "/blog"
    },
    {
      emoji: "☁",
      description: "Dream",
      url: "/dream"
    },
    {
      emoji: "🖼",
      description: "Gallery",
      url: "/gallery"
    },
    {
      emoji: "ℹ",
      description: "About",
      url: "/about"
    }
  ];
</script>

<style lang="scss">
  .navigation-wrapper {
    color: var(--color-secondary);
    width: 100%;
    height: 50px;
    position: sticky;
    display: relative;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 5px;
    background: var(--bg-main-light);
    box-shadow: 0 5px 10px var(--shadow-color);
    user-select: none;
    overflow: hidden;
    cursor: default;

    .navigation {
      background: var(--bg-main-light);
      float: right;
      font-size: 24px;
      margin-right: 1rem;
      position: relative;

      .nav-link {
        margin: 0 5px;
        cursor: pointer;
        a {
          text-decoration: none;
        }

        &:hover {
          // border-bottom: 5px solid ;bg-main;

          .nav-desc {
            text-shadow: -2px 0 0 var(--bg-main-light);
          }

          span {
            .emoji {
              transition: 0.3s;
              transform: translateX(20px) scale(1.2);
              z-index: -1;
              @media screen and (max-width: 500px) {
                transition: 0.34s;
                transform: translateX(0px) rotate(10deg) scale(1.5);
                z-index: -1;
              }
            }
          }
        }
        .nav-desc {
          transition: 0.7s;
          font-family: var(--font-secondary);
          color: var(--color-secondary);
          font-size: 13px;
          margin-left: 4px;
          letter-spacing: var(--text-spacing);
          animation: show-in 0.7s;
          position: relative;
          z-index: 1;
          text-decoration: none;

          @media screen and (max-width: 500px) {
            display: none;
          }
        }

        span {
          .emoji {
            transition: 0.7s;
            vertical-align: -0.45em;
          }
        }
      }
    }
  }

  @keyframes show-in {
    0% {
      letter-spacing: -10px;
      opacity: 0;
    }
  }
</style>
