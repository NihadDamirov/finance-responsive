const button = document.querySelector('#murabaha');
const button2 = document.querySelector('#muzaraba');
const forwardButton = document.querySelector("#forward");

const div = document.querySelector('.account-parametrs-text');
const firstContractInfo = document.querySelector('.first-contract-info');
const secondContarctInfo = document.querySelector('.second-contract-info');
const thirdContractInfo = document.querySelector('.third-contract-info');
const fourthContractInfo = document.querySelector('.fourth-contract-info');
const fifthContractInfo = document.querySelector('.fifth-contract-info');
const sixthContractInfo = document.querySelector('.sixth-contract-info');
const seventhContractInfo = document.querySelector('.seventh-contract-info');
const eightContractInfo = document.querySelector('.eight-contract-info');
const nineContractInfo = document.querySelector('.nine-contract-info');
const tenContractInfo = document.querySelector('.ten-contract-info');
const elevenContractInfo = document.querySelector('.eleven-contract-info');
const twelfeContractInfo = document.querySelector('.twelfe-contract-info');
const thirdteenContractInfo = document.querySelector('.thirdteen-contract-info');
const fourteenContractInfo = document.querySelector('.fourteen-contract-info');


  function changeContent() {
    div.innerHTML = '<p>Satışlar / Mürabəhə müqaviləsi</p>';
    img.innerHTML = `<img src = "./public/circle-dot.svg">`

    firstContractInfo.innerHTML = `<label>Müqavilə tarixi</label>
    <img src="/public/calendar.svg" style="margin-left: 85px;">`
    secondContarctInfo.innerHTML = `<label>Məhsul adı*</label>
    <input style="width: 200px; margin-left: 20px;">
    <img src="/public/add-picture.svg" style="margin-left: 30px;">`;
    thirdContractInfo.innerHTML = `<label style="width: 181px;">Miqdarı</label>
    <input style="width: 95px; margin-left: 38px;">`
    fourthContractInfo.innerHTML = `<label style="width: 181px;">Məhsulun qiyməti (₼)*</label>
    <input style="width: 95px; margin-left: 38px;">`
    fifthContractInfo.innerHTML =`<label style="width: 181px;">Xərc (₼)</label>
    <input style="width: 95px; margin-left: 38px;">
    <button class="list_btn">Siyahı</button>`
    sixthContractInfo.innerHTML = `<label style="width: 181px;">Kredit müddəti (Ay)</label>
    <input style="width: 95px; margin-left: 38px;">`
    seventhContractInfo.innerHTML = `<label style="width: 181px;">İlkin ödəniş (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    eightContractInfo.innerHTML = `<label style="width: 181px; font-weight: 800;">Cəmi sərmayə (₼)</label>
    <input style="width: 95px; margin-left: 38px;">
    <button class="accept_btn" style="width: 90px; background-color: #21D25C;">Təsdiqlə</button>`
    nineContractInfo.innerHTML = `<label style="width: 181px;">Min. Aylıq Ödəniş (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    tenContractInfo.innerHTML = `<label style="width: 181px;">Əlavə mənfəət (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    elevenContractInfo.innerHTML = `<label style="width: 181px;">Komissyon (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    twelfeContractInfo.innerHTML = `<label style="width: 181px; color:#BDBDBD;">İllik mənfəət (%)</label>
    <input style="width: 95px; margin-left: 38px;">`
    thirdteenContractInfo.innerHTML = `<label style="width: 181px;">Yekun məbləğ (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    fourteenContractInfo.innerHTML = `<label style="width: 181px; color:#4CAF50;">Yekun aylıq ödəniş (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
  }

  function changeContent2() {
    div.innerHTML = '<p>Satışlar / Müzarəbə müqaviləsi</p>';

    firstContractInfo.innerHTML = `<label>Müqavilə tarixi</label>
    <img src="/public/calendar.svg" style="margin-left: 105px;">`
    secondContarctInfo.innerHTML = `<label style="width: 137px;"> Şəkillər </label>
    <img src="/public/add.svg" style="margin-left: 82px;">`;
    thirdContractInfo.innerHTML =`<label style="width: 137px;"> Sənədlər </label>
    <img src="/public/add.svg" style="margin-left: 82px;">`
    fourthContractInfo.innerHTML =` <label style="width: 181px; font-weight: 800;">Cəmi sərmayə (₼)</label>
    <input style="width: 95px; margin-left: 38px;">
    <button class="accept_btn" style="width: 90px; background-color: #21D25C;">Təsdiqlə</button>`
    fifthContractInfo.innerHTML = `<label style="width: 181px;">Müqavilə müddəti (Ay)</label>
    <input style="width: 95px; margin-left: 38px;">`
    sixthContractInfo.innerHTML = `<label style="width: 181px; color:#BDBDBD;">İllik mənfəət (%)</label>
    <input style="width: 95px; margin-left: 38px;">`
    seventhContractInfo.innerHTML = `<label style="width: 181px;">Gözlənən mənfəət (₼)</label>
    <input style="width: 95px; margin-left: 38px;">`
    eightContractInfo.innerHTML = `<label style="width: 181px;">Müzarib hissə payı (%)</label>
    <input style="width: 95px; margin-left: 38px;">`
    nineContractInfo.innerHTML = ``
    tenContractInfo.innerHTML =``
    elevenContractInfo.innerHTML = ``
    twelfeContractInfo.innerHTML = ``
    thirdteenContractInfo.innerHTML = ``
    fourteenContractInfo.innerHTML = ``
  }

  const myImg = document.getElementById("murabaha-image");
  const secondImg = document.getElementById('muzaraba-image');
  const forwardImg = document.getElementById('forward-image');

  forwardButton.addEventListener("click", function() {
    forwardImg.src = "/public/dot-circle.svg";
  });

  button.addEventListener("click", function() {
    myImg.src = "/public/filled-circle.svg";
    forwardImg.src = "/public/select.svg";
    secondImg.src = "/public/select.svg"
  });

  button2.addEventListener("click", function() {
    myImg.src = "/public/select.svg";
    secondImg.src = "/public/filled-circle.svg"
    forwardImg.src = "/public/select.svg";
  });

  button.addEventListener('click', changeContent);
  button2.addEventListener('click', changeContent2);
  