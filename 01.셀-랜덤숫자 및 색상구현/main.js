/// 타일속성 정의
const tileProperty = {
  "tileType" : [
    {
      name: "level1",
      number: 1,
      color: "red"
    },
    {
      name: "level2",
      number: 2,
      color: "orange"
    },
    {
      name: "level3",
      number: 3,
      color: "yellow"
    },
    {
      name: "level4",
      number: 4,
      color: "green"
    },
    {
      name: "level5",
      number: 5,
      color: "blue"
    },
    {
      name: "level6",
      number: 6,
      color: "darkblue"
    },
    {
      name: "level7",
      number: 7,
      color: "purple"
    }
]};

/// 기본타일 정의
function unitTileInsector(totalNum) { 
  const newList = [];
  let templet = "";
  for (let i = 1; i<=totalNum; i++) {
    /// 타일 랜덤가져오기
    // 함수 내부에서 객체이름으로 꺼내와야 레벨 매칭되게 랜덤됨.
    const randomLevel = Math.floor(Math.random() * tileProperty.tileType.length);
    const tileNumber = tileProperty.tileType[randomLevel].number;
    const tileColor = tileProperty.tileType[randomLevel].color;  

    newList.push(`
    <div class="unit-tile__${tileColor}">${tileNumber}</div>
  `)
  }

  templet = newList.join('');
  document.getElementById('script--unit-tile').innerHTML = templet;
  
}
unitTileInsector(100);





