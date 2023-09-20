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
function getRandomTile() {
  const levels = Object.keys(tileProperty); // tileProperty의 레벨 목록을 배열로 바꿔줌.
  const randomLevel = levels[Math.floor(Math.random() * levels.length)]; // levels[0] ~ [6] 랜덤뽑기
  return tileProperty[randomLevel]; // 선택된 레벨의 정보 반환
}
// 랜덤 타일 정보 가져오기
// const randomTile = getRandomTile();
console.log(getRandomTile()); // 랜덤으로 선택된 타일 정보 출력

/// 기본타일 정의
function unitTileInsector(totalNum) {  const newList = [];
  let templet = "";
  for (let i = 1; i<=totalNum; i++) {
    // imageUrl 뒤에 구분용 숫자(i) 넣어줘야 전부 다른이미지로 나옴 !!    
    newList.push(`
    <div class="unit-tile__${getRandomTile().color}">${getRandomTile().number}</div>
  `)
  }

  templet = newList.join('');
  document.getElementById('script--unit-tile').innerHTML = templet;
}
unitTileInsector(100);




