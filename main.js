/// 타일속성 정의
const tileProperty = {
  level1: {
    number: 1,
    color: "red"
  },
  level2: {
    number: 2,
    color: "orange"
  },
  level3: {
    number: 3,
    color: "yellow"
  },
  level4: {
    number: 4,
    color: "green"
  },
  level5: {
    number: 5,
    color: "blue"
  },
  level6: {
    number: 6,
    color: "darkblue"
  },
  level7: {
    number: 7,
    color: "purple"
  }
};
const myArrary = [
  a1 = [4, "red"]
]

/// 기본타일 정의
function unitTileInsector(totalNum) { 
  const newList = [];
  let templet = "";
  for (let i = 1; i<=totalNum; i++) {
    /// 타일 랜덤가져오기
    // 함수 내부에서 객체이름으로 꺼내와야 레벨 매칭되게 랜덤됨.
    const randomLevel = Math.floor(Math.random() * Object.keys(tileProperty).length) + 1; // tileProperty의 레벨 목록을 배열로 바꿔줌.
    const selectedLevel = tileProperty[`level${randomLevel}`];
    const tileNumber = selectedLevel.number;
    const tileColor = selectedLevel.color;  

    newList.push(`
    <div class="unit-tile__${tileColor}">${tileNumber}</div>
  `)
  }

  templet = newList.join('');
  document.getElementById('script--unit-tile').innerHTML = templet;
  
}
unitTileInsector(100);





