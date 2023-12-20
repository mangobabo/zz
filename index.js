// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "처음느낌 그대로" },
  { "number": 2, "message": "진로이즈백" },
  { "number": 3, "message": "피카?" },
  { "number": 4, "message": "꼬북꼬북" },
  { "number": 5, "message": "너 내..내가 만..만만하니?!" },
  { "number": 6, "message": "교복에 낙서하는 애를" },
  { "number": 7, "message": "창문으로 던졌어" },
  { "number": 8, "message": "위험한 사람이 되길 바라. 교도소서 만나자" },
  { "number": 9, "message": "hey child(잠시 듣고 가)" },
  { "number": 10, "message": "you were born wild(그건 너희 잘못 아냐)" },
  { "number": 11, "message": "용사 닥쳐라(i'm sorry)" },
  { "number": 12, "message": "사랑하는 사람?(Dont leave me)" },
  { "number": 13, "message": "가슴에 묻은지 오래다(your love is gone)" },
  { "number": 14, "message": "무례한 것ㅋ" },
  { "number": 15, "message": "학창시절 죽빵 처맞는 표정" },
  { "number": 16, "message": "아.시.겠.어.요?" },
  { "number": 17, "message": "이런 남사친 어떠세요?ㅋ" },
  { "number": 18, "message": "시누로 이행시 해보겟습니다" },
  { "number": 19, "message": "시:시누 누:토나와" },
  { "number": 20, "message": "보라돌이" },
  { "number": 21, "message": "다이아검 룩;" },
  { "number": 22, "message": "로블록스 초딩 삥뜯다가 걸림" },
  { "number": 23, "message": "치명적이게" },
  { "number": 24, "message": "시누라이팅 어떠셨나요" }
];

