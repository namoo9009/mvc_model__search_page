//keyword: 추천 키워드

export default {
  data: [
    {keyword: '이탈리아'}, 
    {keyword: '세프의요리'}, 
    {keyword: '제철'}, 
    {keyword: '홈파티'}
  ],

  //Promise 패턴을 이용. 200ms 후에 데이터를 반환
  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
