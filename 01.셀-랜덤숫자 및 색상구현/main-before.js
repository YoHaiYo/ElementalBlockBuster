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
/// 타일 랜덤가져오기
function getRandomTile() {
  const levels = Object.keys(tileProperty); // tileProperty의 레벨 목록을 배열로 바꿔줌.
  const randomLevel = levels[Math.floor(Math.random() * levels.length)]; // levels[0] ~ [6] 랜덤뽑기
  return tileProperty[randomLevel]; // 선택된 레벨의 정보 반환
}
const tileNumber = getRandomTile().number;
const tileColor = getRandomTile().color;

/// 기본타일 정의
function unitTileInsector(totalNum) {  const newList = [];
  let templet = "";
  for (let i = 1; i<=totalNum; i++) {
    newList.push(`
    <div class="unit-tile__${getRandomTile().color}">${getRandomTile().number}</div>
  `)
  }
  // <div class="unit-tile__${getRandomTile().color}">${getRandomTile().number}</div>
  // <div class="unit-tile__${tileColor}">${tileNumber}</div>

  templet = newList.join('');
  document.getElementById('script--unit-tile').innerHTML = templet;
}
unitTileInsector(100);




