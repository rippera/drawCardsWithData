# drawCardsWithData

## Products With Pagination

Template Html:

```html
<div class="some_div">
  <div id="products"></div>
  <div id="pagination_wrapper"></div>
</div>
```

## OR

```html
Products With Pagination -----
<div class="some_div">
  <div id="products"></div>
  <button id="loadMore">loadMore</button>
</div>
```

```javascript
let renderCard = function (item) {
  return `
        <div class='product_card ' data-product=''>
            <div class='product_card-info'>
            <div class='product_title'>PRODUCT_NAME</div>

            <div class='product_prices  d-flex align-items-center justify-content-end'>
                <div class='product_price'>item.PORUCT_PRICE</div>
            </div>
            </div>
        </div>
      `;
};
```

```javascript
let options = {
  container: '#products', // products container
  col: 'col-lg-3 col-lg-4', // product box with bootstrap
  render: renderCard, // product render
  cardNumbers: 20, // products number in window
  paginationBox: '#pagination_wrapper', // pagination container
  isPagination: true, // for pagination
};

let cardview = new CardView(options);
cardview.setData(data);
```

## OR

```javascript
let options = {
  container: '#products', // products container
  col: 'col-lg-3 col-lg-4', // product box with bootstrap
  render: renderCard, // product render
  cardNumbers: 20, // products number in window
  loadMore: '#loadMore', // loadMore Button
  isPagination: true, // for pagination
};

let cardview = new CardView(options);
cardview.setData(data);
```
