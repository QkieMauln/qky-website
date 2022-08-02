// import Vue from "vue?";
import { parse } from "twemoji-parser";

export default (app) => {
  app.directive("emoji", {
    inserted(element) {
      console.log(element);
      element.innerHTML = parse(element);
    }
  });
};
