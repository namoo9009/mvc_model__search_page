import FormView from '../views/FormView.js';
import ResultView from '../views/ResultView.js';

import SearchModel from '../models/SearchModel.js';


//App.js에서 호출하여 사용
const tag = '[MainController]'

//실제 controller 모델을 만들기.
export default {
  init() {
    //실제 form 엘리먼트를 넘겨준다.
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())


    ResultView.setup(document.querySelector('#search_result'));
  },

  search(query) {
    console.log(tag, 'search()', query);
    SearchModel.list(query).then(data => {
      this.onSearchReasult(data)
    })
    this.onSearchReasult([])
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input);
    this.search(input);
  },

  onResetForm() {
    console.log(tag, 'onResetForm()');
  },

  onSearchReasult(data) {
    ResultView.render(data)
  }
  
}


