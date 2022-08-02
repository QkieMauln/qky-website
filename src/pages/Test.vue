<template>
  <CustomizeDisplay></CustomizeDisplay>
  <div class="editor-wrapper">
    <prism-editor class="mdEditor" v-model="code" :highlight="highlighter" line-numbers />
    <div class="content-preview" v-html="parseAll(code)"></div>
  </div>
</template>

<script>
  import { PrismEditor } from "vue-prism-editor";
  import "vue-prism-editor/dist/prismeditor.min.css";
  import CustomizeDisplay from "@/components/global/CustomizeDisplay.vue";

  import { highlight, languages } from "prismjs/components/prism-core";
  import "prismjs/components/prism-markup";
  import "prismjs/components/prism-markdown";
  import "prismjs/themes/prism-tomorrow.css";
  import twemoji from "twemoji";
  import { marked } from "marked";
  import $axios from "@/lib/axios";

  export default {
    components: {
      PrismEditor,
      CustomizeDisplay
    },
    data: () => ({
      code: "Reperish..."
    }),
    async mounted() {
      this.code = await $axios.get("test.txt").then((x) => x.data);
    },
    methods: {
      highlighter(code) {
        return twemoji.parse(highlight(code, languages.markdown));
      },
      parseAll(pen) {
        console.log(pen, marked(pen));
        return twemoji.parse(marked(pen));
      }
    }
  };
</script>

<style scoped>
  /* required class */
  .editor-wrapper {
    padding: 10px;
    max-width: 720px;
    margin: 0 auto;
    height: 50%;
  }
  .mdEditor {
    height: 100%;
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
  .content-preview {
    padding: 10px;
    margin-top: 20px;
  }
</style>
