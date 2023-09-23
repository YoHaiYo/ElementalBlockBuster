// id가 "field"인 요소를 찾습니다.
const fieldElement = document.getElementById("field");
// 테이블 엘리먼트를 생성합니다.
const tableElement = document.createElement("table");
const filedSize = 8;

// 4x4 크기의 테이블을 만드는 함수
function createTable() {
  for (let i = 1; i <= filedSize; i++) {
    // 새로운 행을 생성합니다.
    let row = document.createElement("tr");
    for (let j = 1; j <= filedSize; j++) {
      // 각 셀에 좌표에 맞는 id를 부여합니다.
      let cell = document.createElement("td");
      cell.id = "x" + j + "y" + i;

      // 셀에 내용을 추가할 수도 있습니다.
      // 방해물 블록 초기 HP
      cell.textContent = "5";

      function damageManager() {
        // 클릭한 td 태그의 id 값을 콘솔에 출력합니다.
        console.log("선택된 셀의 좌표 :", cell.id);

        const cellDamageGroup = []; // 반복문 안에 있어야 클릭할 때마다 배열 초기화.
        // 선택할 태그의 좌표
        const damage = 1;
        const damageRange = 1;
        const xCoordinate = j;
        const yCoordinate = i;
        // 선택된 태그의 배열그룹 범위
        const cellLeft = xCoordinate - damageRange;
        const cellRight = xCoordinate + damageRange;
        const cellTop = yCoordinate + damageRange;
        const cellBottom = yCoordinate - damageRange;
        // 좌우의 td 태그를 배열에 추가합니다.
        const addCellDefault = document.getElementById("x" + xCoordinate + "y" + yCoordinate);
        const addCellLeft = document.getElementById("x" + cellLeft + "y" + yCoordinate);
        const addCellRight = document.getElementById("x" + cellRight + "y" + yCoordinate);
        const addCellTop = document.getElementById("x" + xCoordinate + "y" + cellTop);
        const addCellBottom = document.getElementById("x" + xCoordinate + "y" + cellBottom);

        // 유효성 검사를 수행하여 null이나 존재하지 않는 경우 실행X
        if (addCellDefault) {
          cellDamageGroup.push(addCellDefault);
        } 
        if (addCellLeft) {
          cellDamageGroup.push(addCellLeft);
        } 
        if (addCellRight) {
          cellDamageGroup.push(addCellRight);
        } 

        if (addCellTop) {
          cellDamageGroup.push(addCellTop);
        } 

        if (addCellBottom) {
          cellDamageGroup.push(addCellBottom);
        } 

        console.log('셀 그룹:', cellDamageGroup);

        // 인접한 셀들의 id 값을 가진 태그에 1씩 빼기합니다.
        for (const adjacentCell of cellDamageGroup) {
          const adjacentElement = document.getElementById(adjacentCell.id);
          if (adjacentElement) {
            // 해당 태그가 존재하는 경우 텍스트 콘텐츠를 1씩 뺍니다.
            const currentValue = parseInt(adjacentElement.textContent);
            const newValue = currentValue - damage;
            // 값이 0 미만이 되지 않도록 처리합니다.
            adjacentElement.textContent = Math.max(0, newValue).toString();
          }
        }
      };
      // 클릭 이벤트 핸들러 함수 내부에서 처리합니다.
      cell.addEventListener("click", damageManager);

      // 행에 셀을 추가합니다.
      row.appendChild(cell);
    }
    // 테이블에 행을 추가합니다.
    tableElement.appendChild(row);
  }
}
createTable(); // 테이블 생성 함수를 호출하여 테이블을 만듭니다.
fieldElement.appendChild(tableElement); // id가 "field"인 요소에 테이블을 추가합니다.