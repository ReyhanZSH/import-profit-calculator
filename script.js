const form = document.getElementById('profitForm');
const pageInput = document.getElementById('page-input');
const pageResult = document.getElementById('page-result');
const restartBtn = document.getElementById('restartBtn');
const pageTitle = document.getElementById('pageTitle');
const phoneFrame = document.querySelector('.phone-frame');

const resCost = document.getElementById('resCost');
const resProfit = document.getElementById('resProfit');
const resMargin = document.getElementById('resMargin');

const statusCard = document.getElementById('statusCard');
const statusIcon = document.getElementById('statusIcon');
const statusTitle = document.getElementById('statusTitle');
const statusDesc = document.getElementById('statusDesc');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const unitPrice = parseFloat(document.getElementById('unitPrice').value) || 0;
  const customs = parseFloat(document.getElementById('customs').value) || 0;
  const shipping = parseFloat(document.getElementById('shipping').value) || 0;
  const insurance = parseFloat(document.getElementById('insurance').value) || 0;
  const sellPrice = parseFloat(document.getElementById('sellPrice').value) || 0;

  const costPrice = unitPrice + customs + shipping + insurance;
  const grossProfit = sellPrice - costPrice;
  
  let profitMargin = 0;
  if (sellPrice > 0) {
    profitMargin = (grossProfit / sellPrice) * 100;
  }

  resCost.textContent = " " + costPrice.toFixed(0);
  resProfit.textContent = " " + grossProfit.toFixed(0);
  resMargin.textContent = profitMargin.toFixed(1) + "%";

  if (profitMargin >= 20) {
    statusCard.className = 'status-card success';
    statusIcon.textContent = '✓';
    statusTitle.textContent = 'ارزش واردات دارد!';
    statusDesc.textContent = 'با توجه به شرایط، این واردات سودآور است.';
  } else {
    statusCard.className = 'status-card danger';
    statusIcon.textContent = '✕';
    statusTitle.textContent = 'نیازمند بررسی بیشتر';
    statusDesc.textContent = 'حاشیه سود کمتر از ۲۰ درصد است.';
  }

  // مخفی کردن صفحه اول و نمایش صفحه دوم
  pageInput.classList.add('d-none');
  pageResult.classList.remove('d-none');
  
  phoneFrame.scrollTop = 0;
  
  step1.classList.remove('active');
  step2.classList.add('active');
  pageTitle.textContent = 'نتایج محاسبات';
});

restartBtn.addEventListener('click', function() {
  form.reset();
  
  // برگردوندن به صفحه اول
  pageInput.classList.remove('d-none');
  pageResult.classList.add('d-none');
  
  phoneFrame.scrollTop = 0;
  
  step1.classList.add('active');
  step2.classList.remove('active');
  pageTitle.textContent = 'محاسبه سود واردات کالا';
});