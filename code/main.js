console.log("✅ main.js 載入成功");

let score = 0;
let currentColor = "彩蛋_紅";
const egg = document.getElementById("egg");
const colors = ["彩蛋_紅", "彩蛋_綠", "彩蛋_藍", "萬聖節_1", "萬聖節_2", "聖誕節_1", "聖誕節_2", "聖誕節_3", "新年_1", "新年_2", "新年_3", "情人節", "感恩節", "中秋節_1", "中秋節_2", "水豚"];
console.log("目前分數：" + score);    

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function popEgg() {
  egg.src = `${currentColor}_破.png`;
  score += 1;
  document.getElementById("score").innerText = "分數：" + score;

  // 呼叫 Azure Function（記得換成你的 URL）例:https://你的-function-url.azurewebsites.net/api/clickCounter?
  fetch("#請填入你的 Azure Function URL", {
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
  egg.src = `${currentColor}.png`;
}

egg.addEventListener("mousedown", popEgg);
egg.addEventListener("mouseup", resetEgg);
console.log("點擊成功！目前分數：" + score);