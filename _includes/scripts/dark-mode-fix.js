!function (window, document) {
  var LM = 'light-mode';
  var DM = 'dark-mode';
  
  // 사용자 설정이 있는 경우 그것을 우선
  var userPreference = localStorage.getItem('darkMode');
  if (userPreference === 'true') {
    document.body.classList.add(DM);
    document.body.classList.remove(LM);
  } else {
    // 기본값은 항상 라이트모드
    document.body.classList.add(LM);
    document.body.classList.remove(DM);
  }
}(window, document);
