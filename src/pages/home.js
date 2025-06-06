export default function loadHomepage() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const div = document.createElement("div");
  div.className = "img";

  const headLine = document.createElement("h1");
  headLine.textContent = "La Ratatouille";
  headLine.className = "home-title";
  const paraWrap = document.createElement("div");
  paraWrap.className = "para-wrap";
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  para1.textContent =
    "Welcome to Ratatouille Restaurant!\n \n Step into a culinary world where the magic of Disney's Ratatouille comes to life. At our restaurant, we blend the charm of French cuisine with the spirit of creativity and passion that defines the movie. Whether you're a food lover or a fan of the heartwarming tale, our menu offers an unforgettable experience of flavor, fun, and nostalgia. Join us for a delightful dining adventure where every dish is crafted with love and inspired by the enchanting world of Ratatouille.\n \n Come for the food, stay for the magic.";
  para2.textContent =
    "La Ratatouille is a bistro in Paris, France that appears at the very end of Disney•Pixar's 2007 animated feature film of the same name. It is jointly owned by Remy, Anton Ego, Colette Tatou, and Linguini.";
  para2.className = "home-para";
  para1.className = "home-para";
  content.appendChild(div);
  content.appendChild(headLine);
  paraWrap.appendChild(para1);
  paraWrap.appendChild(para2);
  content.appendChild(paraWrap);
}
