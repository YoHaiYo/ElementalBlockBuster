// --------------------------------------------------------------------------------------

/// 초기값 설정 단락
const fieldSize = 8; // 필드 크기 설정
let initialCellValue = 5; //초기 방해물블록 값
let damage = 1;
let damageRange = 1;

// --------------------------------------------------------------------------------------

/// 함수정의 단락

// 공격방향 정의
const directionsThunder = [
  { dx: 1, dy: 1 },  
  { dx: 1, dy: -1 }, 
  { dx: -1, dy: -1 }, 
  { dx: -1, dy: 1 }   
];
const directionsFlame = [
  { dx: 0, dy: 1 },  
  { dx: 0, dy: -1 }, 
  { dx: -1, dy: 0 }, 
  { dx: 1, dy: 0 }   
];
const directionsAqua = [
  { dx: 1, dy: 1 },  
  { dx: 1, dy: -1 }, 
  { dx: -1, dy: -1 }, 
  { dx: -1, dy: 1 },
  { dx: 0, dy: 1 },  
  { dx: 0, dy: -1 }, 
  { dx: -1, dy: 0 }, 
  { dx: 1, dy: 0 }  
];

// 공격함수 (일반화)
function attackType(cell, directions, damageMultiplication) {
  // 클릭한 셀의 좌표
  const [xCoordinate, yCoordinate] = cell.id.split("y").map(coord => parseInt(coord.replace(/\D/g, '')));

  // 상하좌우 셀에 데미지 적용
  const cellDamageGroup = [];
  
  // 각 방향에 대한 셀을 검사하고 유효한 경우에만 추가
  for (const direction of directions) {
    const x = xCoordinate + direction.dx * damageRange;
    const y = yCoordinate + direction.dy * damageRange;
    const attackCell = document.getElementById("x" + x + "y" + y);
    if (attackCell) {
      cellDamageGroup.push(attackCell);
    }
  }

  console.log('셀 그룹:', cellDamageGroup); 
  
  // damageManager 함수를 호출하여 데미지 적용
  damageManager(cellDamageGroup, damageMultiplication);
};

// 데미지 적용 함수
function damageManager(cellDamageGroup, damageMultiplication ){for (const adjacentCell of cellDamageGroup) {
  const adjacentElement = document.getElementById(adjacentCell.id);
  if (adjacentElement) {
    const currentValue = parseInt(adjacentElement.textContent);
    const newValue = currentValue - damage * damageMultiplication;
    // 0미만으로 hp감소 X
    adjacentElement.textContent = Math.max(0, newValue).toString();
    
    // adjacentElement의 배경색 설정
    const value = parseInt(adjacentElement.textContent);
    adjacentElement.classList.remove("hp-0", "hp-1", "hp-2", "hp-3", "hp-4", "hp-5");

    if (value === 0) {
      adjacentElement.classList.add("hp-0");
    } else if (value === 1) {
      adjacentElement.classList.add("hp-1");
    } else if (value === 2) {
      adjacentElement.classList.add("hp-2");
    } else if (value === 3) {
      adjacentElement.classList.add("hp-3");
    } else if (value === 4) {
      adjacentElement.classList.add("hp-4");
    } else if (value === 5) {
      adjacentElement.classList.add("hp-5");
    } 
  }
}};


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

  // 초기 값에 해당하는 클래스 추가
  cell.textContent = initialCellValue.toString();
  cell.classList.add("hp-" + initialCellValue);

  cell.addEventListener("click", handleCellClick);
  row.appendChild(cell);
}

  // 셀 클릭 이벤트 핸들러 함수
  function handleCellClick(event) {
    const cell = event.currentTarget;
    console.log("선택된 셀의 좌표 :", cell.id);
    // attackType(cell, directionsThunder, 3);
    attackType(cell, directionsFlame, 2);
    // attackType(cell, directionsAqua, 1);
  }

  // 필드 테이블 생성 함수 호출
  createFieldTable();

  // 테이블을 필드에 추가
  fieldElement.appendChild(tableElement);
};


// --------------------------------------------------------------------------------------

/// 함수 호출 단락

// 필드 초기화 함수 호출
initializeField();
