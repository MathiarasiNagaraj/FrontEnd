const data = [
  {
    heading: "Accordion title number 1",
    content:
      "What is an accordion in web design? In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.",
  },
  {
    heading: "Accordion title number 2",
    content:
      "What is an accordion in web design? In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.",
  },
  {
    heading: "Accordion title number 3",
    content:
      "What is an accordion in web design? In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.",
  },
  {
    heading: "Accordion title number 4",
    content:
      "What is an accordion in web design? In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.",
  },
  {
    heading: "Accordion title number 5",
    content:
      "What is an accordion in web design? In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content.",
  },
];
$(document).ready(() => {
  const accordionWrapper = $(".accordion-wrapper");

  $.each(data, function (index, item) {
    const accordionItem = $("<div></div>");
    const accordionItemHeader = $("<div></div>");
    const accordionItemContent = $("<div></div>");
    const dropDownArrow = $(
      '<svg  class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>'
    );
    accordionItem.addClass("accordion-item");
    accordionItemHeader.addClass("accordion-item-header");
    accordionItemContent.addClass("accordion-item-content hide");
    accordionItemHeader.text(item.heading);
    accordionItemHeader.append(dropDownArrow);
    accordionItemContent.text(item.content);
    accordionItem.append(accordionItemHeader);
    accordionItem.append(accordionItemContent);
    accordionWrapper.append(accordionItem);
  });

  $(".accordion-item:first-child")
    .find(".accordion-item-content")
    .removeClass("hide");
  $(".accordion-item:first-child")
    .find(".dropdown-icon")
    .removeClass("rotate-180");
  console.log($(".accordion-item:first-child"));
  $(".accordion-item-header").click(function () {
    $(this).find("svg").toggleClass("rotate-180");

    $(this).siblings(".accordion-item-content").toggleClass("hide");
    $(".accordion-item-content")
      .not($(this).siblings(".accordion-item-content"))
      .addClass("hide");
    $(".accordion-item-header")
      .not($(this))
      .find("svg")
      .removeClass("rotate-180");
  });
});
