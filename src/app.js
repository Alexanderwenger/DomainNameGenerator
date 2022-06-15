/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "blue", "red"];
  let noun = ["jogger", "racoon", "box"];

  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++) {
      for (let k = 0; k <= noun.length - 1; k++) {
        let A = pronoun[i] + adj[j] + noun[k];
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
