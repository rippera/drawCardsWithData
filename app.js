fetch('./db/data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let renderCard = function (item) {
      return `
        <div class='product_card ' data-product=''>
            <div class='product_card-info'>
            <div class='product_title'>${item.PRODUCT_NAME}</div>

            <div class='product_prices  d-flex align-items-center justify-content-end'>
                <div class='product_price'>₾${parseFloat(
                  item.PORUCT_PRICE
                )}</div>
            </div>
            </div>
        </div>
      `;
    };
    let options = {
      container: '#products',
      col: 'col-lg-3 col-lg-4',
      render: renderCard,
      paginationBox: '#pagination_wrapper',
      cardNumbers: 6,
      paginationNumbers: 5,
    };

    let cardview = new CardViewer(options);
    cardview.setData(data);
  });
