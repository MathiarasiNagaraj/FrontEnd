$(document).ready(() => {
  const data = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "REST",
    "GraphQL",
    "APIs",
    "AJAX",
    "JSON",
    "JQuery",
    "Bootstrap",
    "Sass",
    "Less",
    "Webpack",
    "Gulp",
    "Grunt",
    "npm",
    "yarn",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "Heroku",
    "Netlify",
    "Git",
    "GitHub",
    "Bitbucket",
    "CI/CD",
    "Jenkins",
    "Travis CI",
    "Mocha",
    "Chai",
    "Jest",
    "Cypress",
    "Puppeteer",
    "TypeScript",
    "Babel",
    "ES6",
    "Redux",
  ];

  const inputWrapper = $(".input-wrapper");
  const inputBox = $(".input-box");
  const suggestionWrapper = $(".suggestion-wrapper");
  inputBox.on("input", function () {
    const value = $(this).val();
    const filtredData = data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    if (filtredData.length <= 0) {
      suggestionWrapper.empty();
      suggestionWrapper.append(`No tech found with ${value}`);
    } else populateSuggestions(filtredData);
  });
  function populateSuggestions(filtredData) {
    suggestionWrapper.empty();
    const itemContainer = $("<div></div>");

    filtredData.forEach((element) => {
      const item = $(`<div>${element}</div>`);
      item.addClass("filteredItem");
      itemContainer.append(item);
    });

    suggestionWrapper.append(itemContainer);
  }
  $(document).on("click", ".filteredItem", function (event) {
    event.stopPropagation();
    const value = $(this).text();
    inputBox.val(value);
    suggestionWrapper.empty();
  });
  $(document).on("click", function () {
    suggestionWrapper.empty();
  });
});
