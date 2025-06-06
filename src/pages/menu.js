export default function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuBorder = document.createElement("div");
  menuBorder.className = "menu-border";

  const headLine = document.createElement("h1");
  headLine.className = "menu-title";
  headLine.textContent = "Ratatouille";
  // content.appendChild(headLine);

  const subLine = document.createElement("h3");
  subLine.className = "sub-title";
  subLine.textContent = "dinner menu";
  // content.appendChild(subLine);

  const divideLine = document.createElement("hr");
  divideLine.style.margin = "1em auto";
  divideLine.style.width = "50%";

  // content.appendChild(divideLine);

  const items = [
    {
      title: "APPETIZER",
      dishes: [
        {
          name: "Fruit and Cheese Board",
          price: "20$",
        },
      ],
    },
    {
      title: "ENTREE",
      dishes: [
        {
          name: "Ratatouille",
          price: "20$",
        },
      ],
    },
    {
      title: "SIDES",
      dishes: [
        {
          name: "Beet and Goat Cheese Salad",
          price: "20$",
        },
        {
          name: "Baguette",
          price: "5$",
        },
      ],
    },
    {
      title: "DESERTS",
      dishes: [
        {
          name: "Remy's Apple Galettes",
          price: "20$",
        },
        {
          name: "Ratatouille Cupcakes",
          price: "20$",
        },
      ],
    },
    {
      title: "DRINKS",
      dishes: [
        {
          name: "Perrier Water",
          price: "5$",
        },
        {
          name: "Remy's Reserve",
          price: "30$",
        },
      ],
    },
  ];

  const menuWrap = document.createElement("div");
  menuWrap.className = "menu-wrap";
  const menuLeft = document.createElement("div");
  menuLeft.className = "menu-left";
  const menuRight = document.createElement("div");
  menuRight.className = "menu-right";

  items.forEach((category) => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category.title;
    categoryTitle.className = "list-title";
    menuLeft.appendChild(categoryTitle);

    const dishList = document.createElement("ul");
    dishList.style.listStyle = "none";
    dishList.className = "dish-list";

    category.dishes.forEach((dish) => {
      const li = document.createElement("li");
      li.classList = "dishList-item";

      const name = document.createElement("p");
      name.textContent = dish.name;
      const price = document.createElement("p");
      price.textContent = dish.price;

      li.appendChild(name);
      li.appendChild(price);
      dishList.appendChild(li);
    });
    menuLeft.appendChild(dishList);
  });
  menuWrap.appendChild(menuLeft);
  menuWrap.appendChild(menuRight);

  menuBorder.appendChild(headLine);
  menuBorder.appendChild(subLine);
  menuBorder.appendChild(divideLine);
  menuBorder.appendChild(menuWrap);

  content.appendChild(menuBorder);
}
