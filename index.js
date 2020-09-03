function clock() {
  let p = document.getElementById("time");
let nowTime = new Date();
time.innerText = ("0" + nowTime.getHours()).slice(-2) + 
  ':' + ("0" + nowTime.getMinutes()).slice(-2) + 
  ":" + ("0" + nowTime.getSeconds()).slice(-2);
}

setInterval(function(){clock()}, 1000);

// setInterval(function(){ alert("Hello"); }, 3000);