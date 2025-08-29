// CallButton functions
let coinValue = document.getElementById("coin");
let currentValue = parseInt(coinValue.textContent);

function callBtn(service, number) {
  let serviceName = document.getElementById(service).innerText;
  let callNumber = document.getElementById(number).innerText;
  let callHistory = document.getElementById("call-history");
  if (currentValue >= 20) {
    //   calling + service + number
    alert("📞 Calling " + serviceName + " " + callNumber + "...");

    currentValue = currentValue - 20;
    coinValue.textContent = currentValue;

    addCallHistory();
  } else {
    alert("আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
  }

  // Call History

  function addCallHistory() {
    let newDiv = document.createElement("div");
    newDiv.className = "historyChild";
    newDiv.innerHTML = `<h3 class="text-lg">${serviceName} <br> <span class="text-[#5c5c5c]">${callNumber}</span> </h3>
             <h3 >${new Date().toLocaleTimeString()}</h3>`;
    let parentDiv = document.getElementById("call-history");
    parentDiv.appendChild(newDiv);
  }
}
// call history clear

function historyClear() {
  document.getElementById("call-history").innerHTML = " ";
}

// hear count
let heartValue = document.getElementById("heart");
let currentHeart = parseInt(heartValue.textContent);

function heartBtn() {
  currentHeart++;
  heartValue.textContent = currentHeart;
}

// copy count
let copyValue = document.getElementById("copy");
let currentCopy = parseInt(copyValue.textContent);

function copyCount(number) {
  let callNumber = document.getElementById(number).innerText;
  alert("নম্বর কপি হয়েছে    " + callNumber);
  navigator.clipboard.writeText(callNumber);
  currentCopy++;
  copyValue.textContent = currentCopy + " Copy";
}
