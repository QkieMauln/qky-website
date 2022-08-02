import { defineStore } from "pinia";

export default defineStore("theme", {
  state: () => ({
    theme: 1,
    themes: {
      initial: ["def", "simply", "pinky", "gore"],
      name: ["Default", "Simplicity", "Pinkish", "Gore"]
    }
  }),
  actions: {
    updateTheme() {
      this.theme = this.PenIS(this.theme);
    },
    getTheme() {
      return {
        theme: this.themes.initial[this.theme],
        name: this.themes.name[this.theme] ?? this.themes.initial[this.theme],
        nextName: this.themes.name[this.PenIS(this.theme)] ?? this.themes.initial[this.PenIS(this.theme)]
      };
    },
    PenIS(a) {
      return (a + 1) % this.themes.initial.length;
    }
  }
});
