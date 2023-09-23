// --------------------------------------------------------------------------------------

/// 초기값 설정 단락
const fieldSize = 8; // 필드 크기 설정
let initialCellValue = 5; //초기 방해물블록 값
let damage = 1;
let damageRange = 1;

// --------------------------------------------------------------------------------------

/// 함수정의 단락

// 필드 초기화 함수
function initializeField() {
  // id가 "field"인 요소를 찾습니다.
  const fieldElement = document.getElementById("field");
  // 테이블 엘리먼트를 생성합니다.
  const tableElement = document.createElement("table");
  // 필드 테이블 생성
  function createFieldTable() {
    for (let i = 1; i <= fieldSize; i++) {
      let row = document.createElement("tr");
      for (let j = 1; j <= fieldSize; j++) {
        createCell(row, j, i);
      }
      tableElement.appendChild(row);
    }
  }

  // 각 셀 생성 및 초기화 함수
  function createCell(row, x, y) {
    let cell = document.createElement("td");
    cell.id = "x" + x + "y" + y;
    cell.textContent = initialCellValue.toString();
    cell.addEventListener("click", handleCellClick);
    row.appendChild(cell);
  }

  // 셀 클릭 이벤트 핸들러 함수
  function handleCellClick(event) {
    const cell = event.currentTarget;
    console.log("선택된 셀의 좌표 :", cell.id);
    applyDamage(cell);
  }

  // 필드 테이블 생성 함수 호출
  createFieldTable();

  // 테이블을 필드에 추가
  fieldElement.appendChild(tableElement);
};

// 셀 주변의 데미지 적용 함수
function applyDamage(cell) {
  const cellDamageGroup = [];
  const [xCoordinate, yCoordinate] = cell.id.split("y").map(coord => parseInt(coord.replace(/\D/g, '')));

  for (let x = xCoordinate - damageRange; x <= xCoordinate + damageRange; x++) {
    for (let y = yCoordinate - damageRange; y <= yCoordinate + damageRange; y++) {
      const adjacentCell = document.getElementById("x" + x + "y" + y);
      if (adjacentCell) {
        cellDamageGroup.push(adjacentCell);
      }
    }
  }

  console.log('셀 그룹:', cellDamageGroup);

  for (const adjacentCell of cellDamageGroup) {
    const adjacentElement = document.getElementById(adjacentCell.id);
    if (adjacentElement) {
      const currentValue = parseInt(adjacentElement.textContent);
      const newValue = currentValue - damage;
      adjacentElement.textContent = Math.max(0, newValue).toString();
      
      // adjacentElement의 배경색 설정
      const value = parseInt(adjacentElement.textContent);
      adjacentElement.classList.remove("red-background", "yellow-background");
      
      if (value === 1) {
        adjacentElement.classList.add("red-background");
      } else if (value >= 2 && value <= 5) {
        adjacentElement.classList.add("yellow-background");
      }
    }
  }
}






// --------------------------------------------------------------------------------------

/// 함수 호출 단락

// 필드 초기화 함수 호출
initializeField();
