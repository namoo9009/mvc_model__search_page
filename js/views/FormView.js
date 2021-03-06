import View from './View.js';

const tag = '[FormView]';

//View 객체 복사.
const FormView = Object.create(View);

//HTML 엘리먼트를 주입 받아서 내부적으로 그 속성을 갖도록 한다.
FormView.setup = function (el) {
  this.init(el);
  this.inputEl = el.querySelector('[type=text]');
  this.resetEl = el.querySelector('[type=reset]');
  //reset 엘리먼트 숨김처리
  this.showResetBtn(false);
  this.bindEvents();
  return this;
}

//버튼을 보여주는 함수
FormView.showResetBtn = function(show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

//인풋박스에서 keyup이벤트가 발생하면 true값을 전달하여 버튼을 보이게 한다.
FormView.bindEvents = function() {
  this.inputEl.addEventListener('keyup', e => this.onKeyUp(e))
  this.resetEl.addEventListener('click', () => this.onClickReset())
}
FormView.onKeyUp = function(e) {
  this.showResetBtn(this.inputEl.value.length);  //length가 0이면 false, 값을 입력하면 true

  if(!this.inputEl.value.length) this.emit('@reset');
  if(e.key !== 'Enter') return;
  this.emit('@submit', {input: this.inputEl.value})
}
FormView.onClickReset = function() {
  this.emit('@reset');
  this.showResetBtn(false);
}

//MainController에서 FormView 사용하기위해 export.
export default FormView;