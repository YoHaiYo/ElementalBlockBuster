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
/*
getRandomTile().number 호출한것과 tileNumber로 호출한것의 결과 차이.
tileNumber: 이 변수는 getRandomTile() 함수를 한 번 호출한 결과의 number 속성을 저장합니다

getRandomTile().number: 이 표현식은 매번 getRandomTile() 함수를 호출하여 
랜덤한 타일을 선택하고, 해당 타일의 number 속성 값을 반환합니다. 
이것은 매 호출마다 새로운 랜덤한 숫자를 가져옵니다.

그러므로 tileNumber호출하면 모든 타일에 같은 숫자가 호출되었던것. 
*/



