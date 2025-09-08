// 언어 선택
const langBtn = document.getElementById('langBtn');
const langList = document.getElementById('langList');
const selectedLang = document.getElementById('selectedLang');

langBtn.addEventListener('click', () => {
  langList.classList.toggle('hidden');
});

langList.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    selectedLang.textContent = item.dataset.lang;
    langList.classList.add('hidden');
  });
});

// 결제수단 선택
const payOptions = document.querySelectorAll('.pay-option');
payOptions.forEach(option => {
  option.addEventListener('click', () => {
    payOptions.forEach(el => el.classList.remove('active'));
    option.classList.add('active');
  });
});

// 결제금액 입력
const amountField = document.getElementById('amountField');
const amountInput = document.getElementById('amount');
const form = document.getElementById('paymentForm');
const amountRaw = document.getElementById('amountRaw');

amountField.addEventListener('click', () => {
  amountInput.focus();
});

amountInput.addEventListener('input', (e) => {
  const digits = e.target.value.replace(/[^\d]/g, '');     
  amountInput.value = digits ? Number(digits).toLocaleString('ko-KR') : '';
  amountRaw.value = digits;                        
});

form.addEventListener('submit', (e) => {
  if (!amountRaw.value) {                                
    e.preventDefault();                                  
    alert('결제금액을 입력해주세요');                  
    amountInput.focus();                             
  }
});
