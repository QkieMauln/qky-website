<template>
  <v-lazy>
    <div class="faq-note">
      <div class="base">
        <div class="header">
          <h1>{{ faqdata.title }}</h1>
        </div>
        <div class="content" v-html="parseMarkdown(dateParsing(faqdata.description))"></div>
      </div>
    </div>
  </v-lazy>
</template>

<script>
  import { marked } from "marked";

  export default {
    name: "home-faq-note",
    props: ["faqdata"],
    methods: {
      parseMarkdown: (text) => {
        return marked(text);
      },
      dateParsing: (text) => {
        const date = new Date().getFullYear() - 2018;
        return text.replace("%s", date);
      }
    }
  };
</script>

<style lang="scss">
  .faq-note {
    animation: 0.7s intro-get-in;
    $total: 5;
    @for $i from 0 to $total {
      &:nth-child(#{$i}) {
        margin-left: (random(30)) + px;
        margin-top: (random(50)-25) + px;
      }
    }
    width: 250px;
    position: relative;
    z-index: 0;
    transform: skew(-3deg);
    transform-origin: top;
    transition: 1s;
    .base {
      background: #ffb5e2;
      border: var(--border-template);
      border-bottom: none;
      border-right: none;
      .header {
        padding: 10px;
        background: rgba(255, 255, 255, 0.26);
        h1 {
          font-size: 1.2em;
        }
      }
      .content {
        padding: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        z-index: -2;
        top: 0;
        transition: 1s;
        transform-origin: top;
        height: calc(6px + 100%);
        width: 100%;
        background: rgba(0, 0, 0, 0.26);
        // box-shadow: -25px -4px 4px 0 rgba(0, 0, 0, 0.75);
        transform: skewX(3deg);
      }
    }
    &:hover {
      transition: 0.4s;
      transform: skew(-1deg);
      .base {
        &::before {
          content: "";
          position: absolute;
          transition: 0.4s;
          z-index: -2;
          top: 0;
          transform-origin: top;
          height: calc(3px + 100%);
          width: 100%;
          background: rgba(0, 0, 0, 0.26);
          // box-shadow: -25px -4px 4px 0 rgba(0, 0, 0, 0.75);
          transform: skewX(1deg);
        }
      }
    }
  }
  @keyframes intro-get-in {
    0% {
      opacity: 0;
      transform: skew(0) rotate(10deg);
    }
  }
</style>
