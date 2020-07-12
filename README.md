# drawCardsWithData

## Products With Pagination

Template Html:

```html
<div class="some_div">
  <div id="products"></div>
  <div id="pagination_wrapper"></div>
</div>
```

## OR With LoadMore

```html
<div class="some_div">
  <div id="products"></div>
  <button id="loadMore">loadMore</button>
</div>
```

## Product Render Function

```javascript
let renderCard = function (item) {
  return `
        <div class='product_card ' data-product=''>
            <div class='product_card-info'>
            <div class='product_title'>${item.PRODUCT_NAME}</div>

            <div class='product_prices  d-flex align-items-center justify-content-end'>
                <div class='product_price'>${item.PORUCT_PRICE}</div>
            </div>
            </div>
        </div>
      `;
};
item from products data
```

## Products Options With Pagination

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

## OR Products Options With LoadMore

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
