# drawCardsWithData

1.  Create HTML Div
<div class="some_div">
  <div id="products"></div>
  <div id="pagination_wrapper"></div>
</div>
2.  Call CardView Class
    new CardView(options)
    cardview.setData(data); data from your API,
3.  Set Option for CardView Class
    let options = {
    container: '#products', container is main div for draw cards
    col:'col-lg-3 col-lg-4' col is div for wrapp yout content
    render:render, is function for content
    paginationBox:'#pagination_wrapper', if you want pagination,
    isPagination: true, if this is true cards will be with pagination, if this is false cards will be with loadMore button
    cardNumbers: 6, how many cards you want default is 6
    paginationNumbers: 5, how many paging numbers you want in your pagination window
    };
4.  render function
    let renderCard = function (item) { item from your data array
    return `
    <div class='product_card ' data-product=''>
    <div class='product_card-info'>
    <div class='product_title'>\${item.PRODUCT_NAME}</div>

            <div class='product_prices  d-flex align-items-center justify-content-end'>
                <div class='product_price'>₾${parseFloat(
                  item.PORUCT_PRICE
                )}</div>
            </div>
            </div>
        </div>

    `;
    };

5.  result
    HTML
     <div class="some_div">
      <div id="products"></div>
      <div id="pagination_wrapper"></div>
    </div>
    JS
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

    let cardview = new CardView(options);
    cardview.setData(data);
