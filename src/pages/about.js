export default function loadAbout() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const div = document.createElement("div");
  div.className = "about-background";

  const div1 = document.createElement("div");
  div1.className = "about-wrap";
  const title = document.createElement("h1");
  title.textContent = "RATATOUILLE";
  title.className = "about-title";

  const para = document.createElement("p");
  para.textContent =
    "Inspired by Disney and Pixar’s beloved animated film Ratatouille, our restaurant celebrates the magic of following your dreams and the joy of sharing good food. \n \n The story of Ratatouille revolves around Remy, a determined little rat in Paris with an extraordinary passion for cooking. Against all odds, Remy teams up with a young kitchen worker, Linguini, and together they prove that greatness can come from anywhere. Our project brings this enchanting world to life, blending the film’s themes of creativity, perseverance, and French culinary artistry into every detail of our restaurant experience.\n \n Here, every dish and every moment is crafted to spark delight — just as Remy would have wanted. Bon appétit 🤌 🤌 🤌 \n \n Monday - Saturday: \n 8am - 9pm";
  para.className = "about-para";

  content.appendChild(div);
  div1.appendChild(title);
  div1.appendChild(para);
  content.appendChild(div1);
}
