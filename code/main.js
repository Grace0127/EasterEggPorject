console.log("✅ main.js 載入成功");

let score = 0;
let currentColor = "紅";
const egg = document.getElementById("egg");
const colors = ["紅", "綠", "藍"];

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function popEgg() {
  egg.src = `彩蛋_${currentColor}_破.png`;
  score += 1;
  document.getElementById("score").innerText = "分數：" + score;

  // 呼叫 Azure Function（記得換成你的 URL）https://你的-function-url.azurewebsites.net/api/clickCounter?
  fetch("#你的金鑰", {
    method: "POST"
  }).then(res => {
    console.log("✅ Azure Function 回應", res.status);
    console.log("點擊成功！目前分數：" + score);
  }).catch(err => {
    console.error("❌ 呼叫 Function 失敗", err);
  });
}

function resetEgg() {
  currentColor = getRandomColor();
  egg.src = `彩蛋_${currentColor}.png`;
}

egg.addEventListener("mousedown", popEgg);
egg.addEventListener("mouseup", resetEgg);
console.log("點擊成功！目前分數：" + score);