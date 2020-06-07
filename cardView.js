class CardViewer {
  constructor(options) {
    this.container = document.querySelector(options.container);
    this.options = options;
    this.dataSource = null;
    this.viewSource = null;
    this.row = document.createElement('div');
    this.row.classList.add('row');
    this.ul = document.createElement('ul');
    this.paginationBox = document.querySelector(options.paginationBox);
    this.paginationBox.appendChild(this.ul);
    this.cards = options.cardNumbers;
    this.pagNumbers = options.paginationNumbers;
  }

  setData(data) {
    this.dataSource = data;
    this.viewSource = data;
    this.state = {
      querySet: this.viewSource,
      page: 1,
      rows: this.cards,
      window: this.pagNumbers,
    };
    this.DrawCards();
  }
  pagination(querySet, page, rows) {
    let trimStart = (page - 1) * rows;
    let trimEnd = trimStart + rows;

    let trimmedData = querySet.slice(trimStart, trimEnd);
    let pages = Math.ceil(querySet.length / rows);

    return {
      querySet: trimmedData,
      pages: pages,
    };
  }
  pageButtons(pages) {
    let wrapper = this.ul;
    wrapper.innerHTML = ``;
    let maxLeft = this.state.page - Math.floor(this.state.window / 2);
    let maxRight = this.state.page + Math.floor(this.state.window / 2);
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = this.state.window;
    }
    if (maxRight > pages) {
      maxLeft = pages - (this.state.window - 1);
      if (maxLeft < 1) {
        maxLeft = 1;
      }
      maxRight = pages;
    }
    for (var page = maxLeft; page <= maxRight; page++) {
      let li = document.createElement('li');
      li.setAttribute('value', page);
      li.innerText = `${page}`;
      wrapper.appendChild(li);
    }
    if (this.state.page != 1) {
      let li = document.createElement('li');
      li.setAttribute('value', 1);
      li.innerHTML = '&#171; First';
      wrapper.prepend(li);
    }
    if (this.state.page != pages) {
      let li = document.createElement('li');
      li.setAttribute('value', pages);
      li.innerHTML = 'Last &#187;';
      wrapper.appendChild(li);
    }
    for (let i = 0; i < wrapper.children.length; i++) {
      const element = wrapper.children[i];
      element.addEventListener('click', () => {
        this.state.page = Number(element.value);
        this.DrawCards();
      });
    }
  }
  markPage() {
    let curPage = document.querySelector('.current_page');
    if (curPage != undefined) {
      curPage.classList.remove('current_page');
    }
    for (let i = 0; i < this.ul.children.length; i++) {
      const element = this.ul.children[i];
      if (this.state.page == this.ul.children[i].value) {
        element.classList.add('current_page');
        break;
      }
    }
  }
  DrawCards() {
    this.row.innerHTML = '';
    let data = this.pagination(
      this.state.querySet,
      this.state.page,
      this.state.rows
    );
    let myList = data.querySet;
    myList.forEach((item) => {
      let div = document.createElement('div');
      div.className = this.options.col;
      //   div.innerHTML = this.options.view;
      div.innerHTML = this.options.render(item);
      this.row.appendChild(div);
    });
    this.container.appendChild(this.row);
    this.pageButtons(data.pages);

    this.markPage();
  }
}
