<template>
  <div class="media-wrapper">
    <div class="base">
      <div :class="{ censored: meta.tags?.includes('nsfw'), 'attachment-wrapper': true }">
        <span v-if="meta.tags?.includes('nsfw')" class="alert-nsfw">NSFW!</span>
        <img :src="meta.url || notFoundImage" alt="Qky's Fanart" />
      </div>
      <div class="content-wrapper">
        <div class="tags-wrapper">
          <span v-for="(tag, i) in meta.tags" :key="'tag' + i" class="tag-badge" v-emoji="parseTags(tag)"></span>
        </div>
        <span class="title" v-emoji="meta.title"></span>
        <div class="description">
          <div class="author">
            <div class="name">@{{ meta.author.name }} | {{ parseTime(meta.timestamp) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import $day from "@/lib/daytime";
  import notFoundImage from "@/assets/doodles/nothinghere.svg";

  const tags = {
    fanart: "✏ Fan-Art",
    nsfw: "🔞 NSFW",
    project: "🗂 Project",
    important: "‼ Important!",
    animation: "🎞 Animation",
    render: "🖼 Render",
    photo: "📸 Photograph"
  };

  export default {
    props: ["meta", "index"],
    setup: () => {
      return { notFoundImage };
    },
    methods: {
      parseTime(timestamp: number) {
        return new $day(timestamp).date();
      },
      parseTags(text: string) {
        const tagKeyArray = Object.keys(tags);
        for (const tagKey of tagKeyArray) if (tagKey == text.toLowerCase()) return tags[tagKey];
        return "⚪ " + text;
      }
    }
  };
</script>

<style lang="scss">
  .media-wrapper {
    background: var(--bg-main);
    min-height: 150px;
    max-width: 320px;
    width: 100%;
    border-radius: var(--border-radius);
    animation: 0.5s inToThe;
    .base {
      padding: 10px;
      .attachment-wrapper {
        width: 100%;
        position: relative;
        height: 0;
        padding-bottom: 56.25%;
        overflow: hidden;
        border-radius: var(--border-radius);
        .alert-nsfw {
          background: var(--bg-failed);
          color: var(--color-primary);
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 5px;
          z-index: 99;
          border-radius: var(--border-radius);
          border: var(--border-template);
        }
        img {
          position: absolute;
          height: 100%;
          width: 100%;
          max-width: unset;
          object-fit: cover;
        }
        &.censored {
          img {
            filter: blur(10px);
          }
        }
      }
      .content-wrapper {
        padding: 5px;
        padding-top: 5px;
        .tags-wrapper {
          padding: 10px 0;
          display: flex;
          gap: 5px;
          .tag-badge {
            background: var(--bg-main-dark);
            font-size: 0.75em;
            padding: 5px 7px;
          }
        }
        .title {
          font-size: 0.95em;
          font-weight: bold;
        }
        .description {
          .author {
            border-top: var(--border-template);
            font-size: 0.75em;
            padding-top: 5px;
            margin-top: 7px;
            font-weight: bold;
          }
        }
      }
    }
  }
  @keyframes inToThe {
    0% {
      opacity: 0;
      transform: rotateY(90deg) rotateX(10deg);
    }
  }
</style>
