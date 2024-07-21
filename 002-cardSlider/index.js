$(document).ready(function () {
  const data = [
    {
      title: "Neem Shampoo 1",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 2",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 3",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 4",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 5",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 6",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 7",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
      title: "Neem Shampoo 8",
      description: "asdasfa",
      price: "450",
      rating: "4.4",
      category: "Hair Care",
      image:
        "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
    },
    {
        title: "Neem Shampoo 9",
        description: "asdasfa",
        price: "450",
        rating: "4.4",
        category: "Hair Care",
        image:
          "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
      },
      {
        title: "Neem Shampoo 10",
        description: "asdasfa",
        price: "450",
        rating: "4.4",
        category: "Hair Care",
        image:
          "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
      },
      {
        title: "Neem Shampoo 11",
        description: "asdasfa",
        price: "450",
        rating: "4.4",
        category: "Hair Care",
        image:
          "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
      },
      {
        title: "Neem Shampoo 12",
        description: "asdasfa",
        price: "450",
        rating: "4.4",
        category: "Hair Care",
        image:
          "https://static.kamaayurveda.in/cdn-cgi/image/width=1200,format=auto/pub/media/catalog/product/cache/afab0601af43ead5768d3a30422e4016/k/u/kumkumadi-rejuvenating-_-brightening-night-cream-1_25g_4.png",
      },
  ];
    const cardWrapper = $('.card-wrapper');
  const cardContainer = $(".card-container");

    const rightArrow = $('<svg class="rotate-180 left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>');
const leftArrow= $('<svg  class="right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>');
cardWrapper.append(rightArrow);
  function cardCreation(title, description, price, rating, category, image) {
    const cardItem = $("<div></div>");
    const cardTopSection = $("<div></div>");
    const cardRatingCategorySection = $("<div></div>");
    const cardBottomSection = $("<div></div>");
    const cardInnerContainer = $("<div></div>");
    const productPriceContainer = $("<div></div>");
    const productImage = $(`<img src=${image} alt=${title - "img"}/>`);
    const categorySection = $(`<p>${category}</p>`);
    const starSvg = $(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
    );
    const ratingSection = $("<div></div>");
    ratingSection.append(`<p>${rating}</p>`);
    ratingSection.append(starSvg);
    cardRatingCategorySection.append(categorySection);
    cardRatingCategorySection.append(ratingSection);

    ratingSection.addClass("card-ratings");
    cardTopSection.append(productImage);
    cardTopSection.append(cardRatingCategorySection);

    cardTopSection.addClass("card-top");
    cardBottomSection.addClass("card-bottom");
    const productTitle = $(`<h1>${title}</h1>`);
    const productDescription = $(`<p>${description}</p>`);
    const productPrice = $(`<p>₹${price}</p>`);
    const heartSvg = $(
      '<svg  class="hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>'
    );
    productPriceContainer.append(productPrice);
    productPriceContainer.append(heartSvg);
    productPriceContainer.addClass("price-container");
      productDescription.addClass("card-description");
      const bagSvg=$('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>')
      const addToCartButton = $("<button>ADD TO CART</button>");
      addToCartButton.append(bagSvg)

    addToCartButton.addClass("addToCartButton hide");
    cardBottomSection.append(productTitle);
    cardBottomSection.append(productDescription);
    cardBottomSection.append(productPriceContainer);

    cardInnerContainer.addClass("card-item");
    cardInnerContainer.append(cardTopSection);
    cardInnerContainer.append(cardBottomSection);
    cardItem.append(cardInnerContainer);
    cardItem.append(addToCartButton);

    cardItem.on({
      mouseenter: function () {
        $(".addToCartButton").addClass("hide");
        $(this).find(".price-container").find("svg").removeClass("hide").css('visiblity','none');;
        $(this).find(".addToCartButton").removeClass("hide").css('visiblity','none');
      },
    });

    return cardItem;
  }
  cardWrapper.append(leftArrow);
  var startIndex = 0;
  var endIndex = 4;
  function populateContainer(startIndex, endIndex) {
    cardContainer.empty();
    console.log(startIndex, endIndex);
    data.slice(startIndex, endIndex).forEach((item) => {
      const cardItem = cardCreation(
        item.title,
        item.description,
        item.price,
        item.rating,
        item.category,
        item.image
      );
      console.log(cardItem, "item");
      cardContainer.append(cardItem);
    });
  }
  populateContainer(startIndex, endIndex);

    $('.left').click(function () {
        if (startIndex >= 0) {
            startIndex = startIndex - 4;
            endIndex = endIndex - 4;
            $('svg').removeClass('notallowed')
            if (startIndex >= data.length || startIndex < 0) {
                startIndex = 0;
                endIndex = 4
                $(this).addClass('notallowed');
            }
            populateContainer(startIndex, endIndex);
        }
        else {
            $(this).addClass('notallowed');
        }
    })
    $('.right').click(function () {
        if (endIndex < data.length) {
            startIndex = startIndex + 4;
            endIndex = endIndex + 4;
            $('svg').removeClass('notallowed')
      
            if (startIndex >= data.length || startIndex < 0) {
                startIndex = 0;
                endIndex = 4
                $(this).addClass('notallowed');
            }
            populateContainer(startIndex, endIndex);
            if (endIndex >= data.length) { 
                $(this).addClass('notallowed');
            }
            if (startIndex <= 0) {
                $('.left').addClass('notallowed')
            }
        }
    })

    if (startIndex <= 0) {
        $('.left').addClass('notallowed');
    }
    if (endIndex >= data.length) {
        $('.right').addClass('notallowed');
    }
  $(document).keydown((event) => {
    console.log(event.keyCode);
    if (event.keyCode == 37 && startIndex >= 0) {
      startIndex = startIndex - 4;
      endIndex = endIndex - 4;
    }
    if (event.keyCode == 39 && endIndex <= data.length) {
      startIndex = startIndex + 4;
      endIndex = endIndex + 4;
    }
    
    if(startIndex>=data.length||startIndex<0){
        startIndex=0;
        endIndex=4
    }
    populateContainer(startIndex, endIndex);
  });
});
