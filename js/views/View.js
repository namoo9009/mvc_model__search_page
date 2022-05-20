const tag = '[View]'

// ES6의 모듈 패턴을 이용해서 export default해서 객체를 export 했다.
//앞으로 만들게 될 view는 view.js 기반으로 만들게 된다.
export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  //(특정 이벤트에 대한 행동을 정의)현재 가지고 있는 엘리먼트에서 특정 이벤트가 발생했을 때 핸들러가 실행되도록 한다.
  //view를 사용할 때 view에서 나온 이벤트를 어떻게 핸들링 할 것인가를 위해서 사용.
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  //(이벤트를 방출하는 기능)
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  },

  //CSS 속성
  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}