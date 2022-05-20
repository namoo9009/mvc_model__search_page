import MainController from './controllers/MainController.js';

//컨트롤로 동작하는 시점은 돔이 다 로딩(완성) 되었을 때
document.addEventListener('DOMContentLoaded', () => {
  MainController.init();
})