//검색 히스토리에 대한 데이터를 관장. 
//keyword: 검색어, date: 검색날짜

export default {
  data: [
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  //return this.data를 하지 않고, 
  //Promise 패턴을 이용한 이유는 히스토리 데이터 같은 경우에는 서버에서 비동기로 데이터를 가져 오는 경우가 있고, 
  //혹은 쿠키로 데이터를 얻을 수 있기 때문에 공통적으로 사용하기 위해서 비동기로 구현.
  list() {
    return Promise.resolve(this.data)
  },
  
  //추가될 검색어를 받아서 실제 데이터에 데이터 있는지 없는지 체크하고, 있으면 삭제하고
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }
    //다시 날짜를 선정해서 기존 데이터와 합쳐서 추가하는 기능
    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  //키워드를 받아서 그 키워드에 해당하는 값들을 삭제하는 기능
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}