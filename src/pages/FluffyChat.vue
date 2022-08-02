<template>
  <div class="options">
    <h3>Logged in as &lt;@YourMother&gt;</h3>
    <strong>{{ messagePost.length }} Messages</strong>
    <div>
      <input v-model="onlyat" type="checkbox" id="onlyat" />
      <label for="onlyat">Only Attachments & Embeds</label>
    </div>
    <div>
      <input v-model="nobot" type="checkbox" id="nobot" />
      <label for="nobot">Ignore Bot</label>
    </div>
    <div>
      <input v-model="mlimit" type="number" max="100" min="10" id="limitless" />
      <label for="limitless">Messages Limit</label>
    </div>
  </div>
  <div class="chat-container" v-scrolldown>
    <div class="chat-bubble" v-for="(msg, i) in messagePost" :key="i">
      <div class="wrapper">
        <div class="image-wrapper">
          <img :src="msg.user?.pfp" alt="" class="pfp" />
        </div>
        <div class="chat-wrapper">
          <div class="details">
            <strong v-emoji="msg.user?.name"></strong>
            <span v-show="msg.user?.bot" class="bot">BOT</span>
          </div>
          <div class="chat" v-emodown="replacer(msg.content ?? '[ empty ]')"></div>
          <div v-show="msg.attachments?.[0]" class="attachments">
            <div class="attachment-wrapper" v-for="(attach, i) in msg.attachments" :key="i">
              <!-- <p v-show="attach.content_type?.includes('video')">{{attach}}</p> -->
              <video v-if="attach.content_type?.includes('video')" controls><source :src="attach?.url" /></video>
              <img v-else :src="attach.url" alt="" />
            </div>
          </div>
          <div v-show="msg.embeds?.[0]" class="embeds">
            <div class="embed-wrapper" v-for="(embed, i) in msg.embeds" :key="i">
              <div>
                <strong v-emodown="replacer(embed.title)"></strong>
              </div>
              <img v-show="embed.type == 'image'" :src="embed.thumbnail?.url ?? embed.url" />
              <video v-show="embed.type == 'video'" controls><source :src="embed.video?.url ?? embed.url" /></video>
              <div v-emodown="replacer(embed.description)"></div>
              <div class="fields" v-for="(field, i) in embed.fields" :key="i">
                <strong v-emodown="replacer(field.name)"></strong>
                <span v-emodown="replacer(field.value)"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import ws from "ws";
  import { ref } from "vue";

  let messagePost = ref([]);
  let mlimit = ref(10);
  let onlyat = ref(false),
    nobot = ref(false);
  const wsC = new WebSocket(
    "ws://localhost:4201"
    // "wss://gateway.qky.life"
    );

  wsC.onmessage = (out) => {
    const data = JSON.parse(out.data);
    // if (data.guild_id != "368769930029563906") return;
    const max = mlimit.value;

    if (data.user?.bot && nobot.value) return console.log("Ignored Bot");

    if (!data.embeds?.length && !data.attachments?.length && onlyat.value)
      return console.log(`Ignored Non Files! ${data.attachments?.length} ${data.embeds?.length} ${onlyat.value}`);

    messagePost.value.push(data);
    if (messagePost.value.length > max) {
      messagePost.value.splice(0, messagePost.value.length > max + 10 ? messagePost.value.length - max : 0);
    }
  };
  console.log("B > ", messagePost);
  function replacer(x) {
    if (!x) return x;
    return x
      .replace(
        /<(a?):(\w+):(\d+)>/gi,
        (_, anim, name, id) =>
          `<img class="emoji" draggable="false" alt="${name}" src="https://cdn.discordapp.com/emojis/${id}.${
            anim ? "gif" : "webp"
          }">`
      )
      .replace(/<([\@\#]&?)\d+>/gi, (_, type) => `[${type}Redacted](/)`);
  }
</script>

<style lang="scss" scoped>
  .options {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: var(--shadow-color);
    gap: 5px;
    input {
      background: var(--bg-main);
      max-width: 40px;
    }
  }
  .chat-container {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100vh - 156px);
    width: 100%;
    max-width: 520px;

    .chat-bubble {
      padding: 10px;
      border-radius: var(--border-radius);
      background: var(--bg-main);
      animation: zoomInUp 0.5s;
      .wrapper {
        display: flex;
        .image-wrapper {
          padding: 5px;
          img {
            width: 50px;
            border-radius: var(--border-radius);
          }
        }
        .chat-wrapper {
          margin-left: 10px;
          .details {
            margin-bottom: 5px;
            color: var(--color-link);
            .bot {
              margin-left: 10px;
              background: var(--bg-main-dark);
              padding: 2px 7px;
            }
          }
          .embeds {
            .embed-wrapper {
              border-radius: var(--border-radius);
              background: var(--bg-main-dark);
              padding: 10px;
              video {
                width: 100%;
                max-width: 400px;
              }
            }
          }
          .attachments {
            .attachment-wrapper {
              video {
                width: 100%;
                max-width: 400px;
              }
              img {
                width: 100%;
                border-radius: var(--border-radius);
                max-width: 400px;
              }
            }
          }
        }
      }
    }
  }
</style>
