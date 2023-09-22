// id가 "field"인 요소를 찾습니다.
const fieldElement = document.getElementById("field");

// id가 "attack"인 요소를 찾습니다.
const attackElement = document.getElementById("attack");

// 테이블 엘리먼트를 생성합니다.
const tableElement = document.createElement("table");

const filedSize = 5;

// 셀을 클릭했을 때 실행할 함수 (1씩 증가)
function cellClickHandler() {
    // 현재 셀의 텍스트 콘텐츠를 가져옵니다.
    let currentValue = parseInt(this.textContent);
    // 텍스트를 1씩 증가시킵니다.
    currentValue++;
    // 새로운 값을 셀의 텍스트로 설정합니다.
    this.textContent = currentValue;
};

// 셀을 클릭했을 때 실행할 함수 (1씩 감소)
function decrementCellValue() {
    // 현재 셀의 텍스트 콘텐츠를 가져옵니다.
    let currentValue = parseInt(this.textContent);
    // 텍스트를 1씩 감소시킵니다.
    currentValue--;
    // 최소값은 0으로 제한합니다.
    // if (currentValue < 0) {
    //     currentValue = 0;
    // }
    // 새로운 값을 셀의 텍스트로 설정합니다.
    this.textContent = currentValue;
};

// "attack" 모드 여부를 추적하는 변수
let attackMode = false;

// "attack" 태그를 클릭했을 때 실행할 함수
function toggleAttackMode() {
    attackMode = !attackMode; // "attack" 모드를 전환합니다.
    if (attackMode===true) {
      attackElement.innerHTML="Attack O";
    } else {
      attackElement.innerHTML="Attack X";
    }
    // "attack" 모드가 변경되면 모든 셀의 클릭 이벤트 리스너를 갱신합니다.
    updateCellEventListeners();
};

// 셀의 클릭 이벤트 리스너를 갱신하는 함수
function updateCellEventListeners() {
    // 모든 셀을 가져옵니다.
    const cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
        if (attackMode) {
            cell.removeEventListener("click", cellClickHandler);
            cell.addEventListener("click", decrementCellValue);
        } else {
            cell.removeEventListener("click", decrementCellValue);
            cell.addEventListener("click", cellClickHandler);
        }
    }
};

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
            cell.textContent = "0";

            // 셀을 클릭했을 때 이벤트 리스너를 추가합니다.
            cell.addEventListener("click", cellClickHandler);

            // 행에 셀을 추가합니다.
            row.appendChild(cell);
        }
        // 테이블에 행을 추가합니다.
        tableElement.appendChild(row);
    }
};

// "attack" 태그를 클릭했을 때 "attack" 모드를 전환하는 이벤트 리스너를 추가합니다.
attackElement.addEventListener("click", toggleAttackMode);

// 테이블 생성 함수를 호출하여 테이블을 만듭니다.
createTable();

// id가 "field"인 요소에 테이블을 추가합니다.
fieldElement.appendChild(tableElement);
