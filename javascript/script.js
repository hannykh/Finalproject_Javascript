// ==================== Practice Page Exercises ====================

// 01. Show Alert Message
const alertMessage = document.getElementById('alertMessage');
const alertButton = document.getElementById('alertButton');
if (alertButton) {
  alertButton.addEventListener('click', () => {
    alert(alertMessage.value || 'Hello from JavaScript!');
  });
}

// 02. Addition of 3 Numbers
const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const numberThree = document.getElementById('numberThree');
const addThreeButton = document.getElementById('addThreeButton');
const addThreeResult = document.getElementById('addThreeResult');

if (addThreeButton) {
  function toNumber(input) { return Number(input.value) || 0; }
  function addThreeNumbers() {
    const total = toNumber(numberOne) + toNumber(numberTwo) + toNumber(numberThree);
    addThreeResult.textContent = `Result: ${total}`;
  }
  addThreeButton.addEventListener('click', addThreeNumbers);
}

// 03. Pass or Fail Score
const scoreInput = document.getElementById('scoreInput');
const checkScoreButton = document.getElementById('checkScoreButton');
const scoreResult = document.getElementById('scoreResult');

if (checkScoreButton) {
  function checkPassFail() {
    const value = Number(scoreInput.value);
    const passed = value >= 50;
    scoreResult.textContent = passed ? 'Pass. Great job.' : 'Fail. Please study and try again.';
    scoreResult.classList.toggle('pass', passed);
    scoreResult.classList.toggle('fail', !passed);
  }
  checkScoreButton.addEventListener('click', checkPassFail);
}

// 04. Image Slider
const sliderImages = [
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', alt: 'Laptop with code on screen', caption: 'Coding workspace' },
  { src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80', alt: 'Computer screen showing JavaScript code', caption: 'JavaScript code' },
  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80', alt: 'Developer working at a desk', caption: 'Practice project' }
];

let currentImage = 0;
const sliderImage = document.getElementById('sliderImage');
const sliderCaption = document.getElementById('sliderCaption');
const previousImage = document.getElementById('previousImage');
const nextImage = document.getElementById('nextImage');

if (sliderImage) {
  function showSlide(index) {
    currentImage = (index + sliderImages.length) % sliderImages.length;
    const img = sliderImages[currentImage];
    sliderImage.src = img.src;
    sliderImage.alt = img.alt;
    sliderCaption.textContent = img.caption;
  }
  previousImage.addEventListener('click', () => showSlide(currentImage - 1));
  nextImage.addEventListener('click', () => showSlide(currentImage + 1));
}

// 05. DOM Practice
const domInput = document.getElementById('domInput');
const addDomItem = document.getElementById('addDomItem');
const clearDomItems = document.getElementById('clearDomItems');
const domList = document.getElementById('domList');

if (addDomItem) {
  function addListItem() {
    const itemText = domInput.value.trim();
    if (!itemText) return;
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    domList.appendChild(listItem);
    domInput.value = '';
    domInput.focus();
  }
  addDomItem.addEventListener('click', addListItem);
  domInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addListItem();
  });
  clearDomItems.addEventListener('click', () => { domList.innerHTML = ''; });
}

// 06. Change Text Style & Color
const styledText = document.getElementById('styledText');
const textColor = document.getElementById('textColor');
const textSize = document.getElementById('textSize');
const changeStyleButton = document.getElementById('changeStyleButton');
const resetStyleButton = document.getElementById('resetStyleButton');

if (changeStyleButton) {
  changeStyleButton.addEventListener('click', () => {
    styledText.style.color = textColor.value;
    styledText.style.fontSize = textSize.value;
    styledText.style.fontStyle = 'italic';
    styledText.style.letterSpacing = '0.03em';
  });
  resetStyleButton.addEventListener('click', () => {
    styledText.removeAttribute('style');
  });
}

// 07. Rest Parameters
const restNumbers = document.getElementById('restNumbers');
const restAddButton = document.getElementById('restAddButton');
const restProductButton = document.getElementById('restProductButton');
const restResult = document.getElementById('restResult');

if (restAddButton) {
  function parseNumbers(value) {
    return value.split(',').map((n) => Number(n.trim())).filter((n) => !Number.isNaN(n));
  }

  function addNumbers(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
  }

  function productNumbers(...numbers) {
    return numbers.reduce((total, n) => total * n, 1);
  }

  restAddButton.addEventListener('click', () => {
    const numbers = parseNumbers(restNumbers.value);
    restResult.textContent = `Add result: ${addNumbers(...numbers)}`;
  });

  restProductButton.addEventListener('click', () => {
    const numbers = parseNumbers(restNumbers.value);
    restResult.textContent = `Product result: ${productNumbers(...numbers)}`;
  });
}

// ==================== Homework Page Exercises ====================

// 1. Validation Functions
const funcInput = document.getElementById('funcInput');
const funcResult = document.getElementById('funcResult');

if (funcInput && funcResult) {
  function checkNumber(val) { return !Number.isNaN(Number(val)) && val.trim() !== ''; }
  function checkPositiveNumber(val) { const n = Number(val); return !Number.isNaN(n) && n > 0; }
  function checkDecimal(val) { return typeof val === 'string' && val.includes('.'); }
  function checkPositiveDecimal(val) { return checkDecimal(val) && checkPositiveNumber(val); }
  function checkEmail(val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val); }
  function checkBoolean(val) { const s = val.trim().toLowerCase(); return s === 'true' || s === 'false' || s === '1' || s === '0' || s === 'yes' || s === 'no'; }

  function runFuncTest(fn, label) { const val = funcInput.value; funcResult.textContent = `${label}("${val}") → ${fn(val)}`; }

  document.getElementById('checkNumberBtn').addEventListener('click', () => runFuncTest(checkNumber, 'checkNumber'));
  document.getElementById('checkPosNumBtn').addEventListener('click', () => runFuncTest(checkPositiveNumber, 'checkPositiveNumber'));
  document.getElementById('checkDecimalBtn').addEventListener('click', () => runFuncTest(checkDecimal, 'checkDecimal'));
  document.getElementById('checkPosDecBtn').addEventListener('click', () => runFuncTest(checkPositiveDecimal, 'checkPositiveDecimal'));
  document.getElementById('checkEmailBtn').addEventListener('click', () => runFuncTest(checkEmail, 'checkEmail'));
  document.getElementById('checkBoolBtn').addEventListener('click', () => runFuncTest(checkBoolean, 'checkBoolean'));
}

// 2. Commission Calculator
const calcBtn = document.getElementById('calcCommissionBtn');
if (calcBtn) {
  function calculateCommission(sale) {
    if (sale >= 6000000) return sale * 0.10;
    if (sale >= 3000000) return sale * 0.05;
    if (sale >= 1500000) return sale * 0.03;
    return sale * 0.01;
  }
  calcBtn.addEventListener('click', () => {
    const sale = Number(document.getElementById('saleInput').value) || 0;
    const commission = calculateCommission(sale);
    document.getElementById('commissionResult').textContent = `Commission: $${commission.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  });
}

// 3. Change Image Attributes
const changeImage = document.getElementById('changeImage');
if (changeImage) {
  const imageInfo = document.getElementById('imageInfo');
  function showImageInfo() {
    imageInfo.textContent = `src="${changeImage.src.slice(0, 60)}…" alt="${changeImage.alt}" width="${changeImage.width}" height="${changeImage.height}"`;
  }
  showImageInfo();
  document.getElementById('changeImageBtn').addEventListener('click', () => {
    changeImage.src = document.getElementById('imgSrc').value;
    changeImage.alt = document.getElementById('imgAlt').value;
    changeImage.width = Number(document.getElementById('imgWidth').value);
    changeImage.height = Number(document.getElementById('imgHeight').value);
    showImageInfo();
  });
  document.getElementById('resetImageBtn').addEventListener('click', () => {
    changeImage.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80';
    changeImage.alt = 'Coding workspace';
    changeImage.width = 0;
    changeImage.style.maxWidth = '100%';
    document.getElementById('imgSrc').value = changeImage.src;
    document.getElementById('imgAlt').value = changeImage.alt;
    document.getElementById('imgWidth').value = '';
    document.getElementById('imgHeight').value = '';
    showImageInfo();
  });
}

// 4. Form Validation
const vName = document.getElementById('vName');
if (vName) {
  const vEmail = document.getElementById('vEmail');
  const vAge = document.getElementById('vAge');
  const vPhone = document.getElementById('vPhone');
  function showMsg(el, msg) { el.textContent = msg; }
  function hideMsg(el) { el.textContent = ''; }
  function validateName() { if (vName.value.trim().length < 2) { showMsg(vNameMsg, 'Name must be at least 2 characters.'); return false; } hideMsg(vNameMsg); return true; }
  function validateEmail() { if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vEmail.value)) { showMsg(vEmailMsg, 'Enter a valid email address.'); return false; } hideMsg(vEmailMsg); return true; }
  function validateAge() { const age = Number(vAge.value); if (Number.isNaN(age) || age < 1 || age > 120) { showMsg(vAgeMsg, 'Age must be between 1 and 120.'); return false; } hideMsg(vAgeMsg); return true; }
  function validatePhone() { if (!/^\d{3}-\d{3}-\d{4}$/.test(vPhone.value)) { showMsg(vPhoneMsg, 'Use format 123-456-7890.'); return false; } hideMsg(vPhoneMsg); return true; }

  vName.addEventListener('input', validateName);
  vEmail.addEventListener('input', validateEmail);
  vAge.addEventListener('input', validateAge);
  vPhone.addEventListener('input', validatePhone);

  document.getElementById('validationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = [validateName(), validateEmail(), validateAge(), validatePhone()].every(Boolean);
    document.getElementById('formOverall').textContent = valid ? '✓ All fields valid.' : '✗ Please fix the errors above.';
    document.getElementById('formOverall').className = `ms-3 fw-bold ${valid ? 'text-success' : 'text-danger'}`;
  });
}

// Student Data
const sampleStudents = [
  { code: '107006059', name: 'Swannell Tadio', sex: 'Male', contact: '226-739-5338', date: '04-23-25', on: true },
  { code: '065405381', name: 'Benedyktowicz Shannan', sex: 'Male', contact: '847-957-1873', date: '10-17-25', on: true },
  { code: '071214249', name: 'Biesty Elana', sex: 'Female', contact: '284-968-4183', date: '08-09-25', on: true },
  { code: '042200279', name: 'Eggle Shanan', sex: 'Male', contact: '959-129-3141', date: '04-05-25', on: true },
  { code: '063109621', name: 'Belcham Kristen', sex: 'Female', contact: '835-266-3218', date: '05-04-25', on: true },
  { code: '111317637', name: 'Houlaghan Geneva', sex: 'Female', contact: '641-178-7149', date: '01-20-26', on: true },
  { code: '122106374', name: 'Perett Horten', sex: 'Male', contact: '211-569-0785', date: '06-20-25', on: true },
  { code: '102107474', name: 'Coil Clyde', sex: 'Male', contact: '727-372-8434', date: '04-14-25', on: true },
  { code: '322286447', name: 'Fierro Mela', sex: 'Female', contact: '323-694-1544', date: '03-13-25', on: true },
  { code: '042305420', name: 'Renehan Dione', sex: 'Female', contact: '918-333-0001', date: '01-29-26', on: false }
];

function copyStudents() { return JSON.parse(JSON.stringify(sampleStudents)); }
function genCode() { return String(Math.floor(Math.random() * 900000000 + 100000000)); }

function renderStudentRow(idx, s, hasDate) {
  const toggleClass = s.on ? 'btn-toggle-on' : 'btn-toggle-off';
  let row = `<tr><td>${idx + 1}</td><td>${s.code}</td><td>${s.name}</td><td>[${s.sex}]</td>`;
  row += hasDate ? `<td>${s.date}</td>` : `<td>${s.contact}</td>`;
  row += `<td><button class="${toggleClass}" onclick="toggleStudent(this,${idx})">${s.on ? 'On' : 'Off'}</button></td>`;
  row += `<td><button class="btn-delete" onclick="deleteStudent(this,${idx})">Delete</button></td>`;
  row += `<td><button class="btn-edit" onclick="editStudent(this,${idx})">Edit</button></td></tr>`;
  return row;
}

// 5a. Student List (plain JS)
let students1 = copyStudents();
function renderTable1() { document.querySelector('#studentTable1 tbody').innerHTML = students1.map((s, i) => renderStudentRow(i, s, false)).join(''); }
window.toggleStudent = function(btn, idx) { students1[idx].on = !students1[idx].on; renderTable1(); };
window.deleteStudent = function(btn, idx) { students1.splice(idx, 1); renderTable1(); };
window.editStudent = function(btn, idx) { const newName = prompt('Enter new name:', students1[idx].name); if (newName) { students1[idx].name = newName; renderTable1(); } };
const addBtn1 = document.getElementById('addStudentBtn1');
if (addBtn1) {
  addBtn1.addEventListener('click', () => { students1.push({ code: genCode(), name: 'New Student', sex: 'Male', contact: '000-000-0000', date: '', on: true }); renderTable1(); });
  renderTable1();
}

// 5b. Student List by jQuery
let studentsJQ = copyStudents();
function renderTableJQ() {
  const $tbody = $('#studentTableJQ tbody');
  if (!$tbody.length) return;
  $tbody.empty();
  studentsJQ.forEach((s, i) => {
    const cls = s.on ? 'btn-toggle-on' : 'btn-toggle-off';
    $tbody.append(`<tr><td>${i+1}</td><td>${s.code}</td><td>${s.name}</td><td>[${s.sex}]</td><td>${s.contact}</td><td><button class="${cls}" data-jq-idx="${i}">${s.on?'On':'Off'}</button></td><td><button class="btn-delete" data-jq-del="${i}">Delete</button></td><td><button class="btn-edit" data-jq-edit="${i}">Edit</button></td></tr>`);
  });
}
$('#studentTableJQ tbody').on('click', '[data-jq-idx]', function() { studentsJQ[+$(this).data('jq-idx')].on ^= true; renderTableJQ(); });
$('#studentTableJQ tbody').on('click', '[data-jq-del]', function() { studentsJQ.splice(+$(this).data('jq-del'), 1); renderTableJQ(); });
$('#studentTableJQ tbody').on('click', '[data-jq-edit]', function() { const idx = +$(this).data('jq-edit'); const n = prompt('Enter new name:', studentsJQ[idx].name); if (n) { studentsJQ[idx].name = n; renderTableJQ(); } });
const addBtnJQ = document.getElementById('addStudentBtnJQ');
if (addBtnJQ) {
  $('#addStudentBtnJQ').on('click', function() { studentsJQ.push({ code: genCode(), name: 'New Student', sex: 'Male', contact: '000-000-0000', on: true }); renderTableJQ(); });
  renderTableJQ();
}

// 5c. Student List 2 (Search)
let students2 = copyStudents();
function renderTable2(data) {
  const tbody = document.querySelector('#studentTable2 tbody');
  if (!tbody) return;
  const list = data || students2;
  tbody.innerHTML = list.map((s, i) => renderStudentRow(i, s, false)).join('');
}
const searchBtn2 = document.getElementById('searchBtn2');
if (searchBtn2) {
  searchBtn2.addEventListener('click', () => {
    const q = document.getElementById('searchInput2').value.toLowerCase().trim();
    renderTable2(q ? students2.filter((s) => s.name.toLowerCase().includes(q) || s.code.includes(q) || s.sex.toLowerCase().includes(q)) : null);
  });
  document.getElementById('searchInput2').addEventListener('input', () => searchBtn2.click());
  document.getElementById('addStudentBtn2').addEventListener('click', () => { students2.push({ code: genCode(), name: 'New Student', sex: 'Male', contact: '000-000-0000', date: '', on: true }); renderTable2(); });
  renderTable2();
}

// 5d. Student List 3 (Pagination)
let students3 = copyStudents();
let currentPage = 1;
const pageSize = 4;
function renderTable3() {
  const tbody = document.querySelector('#studentTable3 tbody');
  if (!tbody) return;
  const start = (currentPage - 1) * pageSize;
  tbody.innerHTML = students3.slice(start, start + pageSize).map((s, i) => renderStudentRow(start + i, s, true)).join('');
  const totalPages = Math.ceil(students3.length / pageSize);
  document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages || 1}`;
}
const prevPageBtn = document.getElementById('prevPageBtn');
if (prevPageBtn) {
  prevPageBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderTable3(); } });
  document.getElementById('nextPageBtn').addEventListener('click', () => { if (currentPage < Math.ceil(students3.length / pageSize)) { currentPage++; renderTable3(); } });
  renderTable3();
}

// 6. Login Form Authentication
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;
    const valid = user === 'admin' && pass === '1234';
    document.getElementById('loginResult').classList.toggle('d-none', !valid);
    document.getElementById('loginFail').classList.toggle('d-none', valid);
    document.getElementById('loginMsg').textContent = valid ? '✓ Welcome, Admin!' : '✗ Invalid credentials.';
    document.getElementById('loginMsg').className = `mt-3 fw-bold ${valid ? 'text-success' : 'text-danger'}`;
  });
}

// 7a. Universities in Cambodia (Static Data)
const uniBody = document.getElementById('uniBody');
if (uniBody) {
  const universities = [
    { name: 'Asia Europe University', web_pages: ['http://www.aeu.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Angkor University', web_pages: ['http://www.angkor.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Build Bright University', web_pages: ['http://www.bbu.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Chamreun University of Poly Technology', web_pages: ['http://www.cup.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Cambodia University of Specialties', web_pages: ['http://www.cus.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'National Institute of Education', web_pages: ['http://www.ine.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'International University', web_pages: ['http://www.iu.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Cambodian Mekong University', web_pages: ['http://www.mekong.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Norton University', web_pages: ['http://www.norton.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'National University of Management', web_pages: ['http://www.num.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Pannnasatra University of Cambodia', web_pages: ['http://www.puc.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Royal University of Agriculture', web_pages: ['http://www.rua.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Royal University of Fine Arts', web_pages: ['http://www.rufa.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Royal University of Law and Economics', web_pages: ['http://www.rule.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Royal University of Phnom Penh', web_pages: ['http://www.rupp.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Svey Reong University', web_pages: ['http://www.sru.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'University of Cambodia', web_pages: ['http://www.uc.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'University of Health and Science', web_pages: ['http://www.univ-sante.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'University of Technology Phnom Penh', web_pages: ['http://www.utpp.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Western University', web_pages: ['http://www.western.edu.kh/'], alpha_two_code: 'KH' },
    { name: 'Zaman University', web_pages: ['http://www.zamanuniversity.edu.kh/'], alpha_two_code: 'KH' }
  ];
  uniBody.innerHTML = universities.map((u, i) =>
    `<tr><td>${i + 1}</td><td>${u.name}</td><td>${u['web_pages']?.[0] ?? '—'}</td><td>${u['alpha_two_code'] ?? 'KH'}</td></tr>`
  ).join('');
}

// 7b. Movies from API (TV Maze)
const loadMoviesBtn = document.getElementById('loadMoviesBtn');
if (loadMoviesBtn) {
  loadMoviesBtn.addEventListener('click', async () => {
    const container = document.getElementById('movieList');
    container.innerHTML = '<p class="text-slate-500">Loading…</p>';
    try {
      const res = await fetch('https://api.tvmaze.com/shows/30/episodes');
      const episodes = await res.json();
      container.innerHTML = '';
      episodes.slice(0, 12).forEach((ep) => {
        const img = ep.image?.medium ?? ep.image?.original ?? 'https://via.placeholder.com/300x200?text=No+Image';
        const seasonEp = ep.season != null && ep.number != null ? `S${ep.season}E${ep.number}` : '';
        container.innerHTML += `<div class="col-sm-6 col-lg-3"><div class="movie-card"><img src="${img}" alt="${ep.name ?? 'Episode'}"><div class="card-body"><p class="fw-bold mb-1">${ep.name ?? 'Untitled'}</p><p class="text-slate-500 small mb-0">${seasonEp}</p></div></div></div>`;
      });
    } catch {
      container.innerHTML = '<p class="text-danger">Failed to load movies. Check your connection.</p>';
    }
  });
}
