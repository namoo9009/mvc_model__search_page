import FormView from '../views/FormView.js'

//App.js에서 호출하여 사용
const tag = '[MainController]'

//실제 controller 모델을 만들기.
export default {
  init() {
    //실제 form 엘리먼트를 넘겨준다.
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())
  },
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
  },
  onResetForm() {
    console.log(tag, 'onResetForm()')
  }
}