import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el) {
    this.init(el)
}

// 서버에서 받아온 검색결과 데이터를 받아서 동적으로 돔을 그려준다.
ResultView.render = function(data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다.'
}

ResultView.getSearchResultsHtml = function(data) {
    debugger
}

export default ResultView;