import { defineStore } from "pinia";

export const authenticated = defineStore("authenticate", {
  state: () => ({
    userData: { username: "", trustLevel: 0, token: localStorage.token }
  }),
  actions: {
    loggedIn(data: any) {
      this.userData = {
        username: data.username,
        trustLevel: data.trustLevel,
        token: data.accessToken ?? this.userData.token
      };
    }
  }
});
