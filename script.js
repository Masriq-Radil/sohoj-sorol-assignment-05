
// Heart count code---->
let hearts = document.getElementsByClassName('heart');
let heartCount = document.getElementById('heart-count');
let count = 0;

 for (let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener("click", function() {        
          count++;
          heartCount.textContent = count;
      });
}


//   copy button code----->
   let copyCount = 0;
  const copyCountEl = document.getElementById("copy-count");

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const card = this.closest(".card");
      const hotlineEl = card.querySelector(".hotline");

      const hotline = hotlineEl.textContent.trim();

      navigator.clipboard.writeText(hotline).then(() => {
        alert(`Hotline ${hotline} copied✅`);
        
        copyCount++;
        copyCountEl.textContent = copyCount;
      })
      
    });
  });


// call section (make call/ call history/ clear btn) code--->
  let coins = parseInt(document.getElementById("coin-count").textContent);
  const coinCountEl = document.getElementById("coin-count");
  const callHistoryList = document.querySelector("#call-history ul");
  const clearBtn = document.getElementById("clear-btn");

  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", function() {
    
      if (coins < 20) {
        alert("❌Not enough coins! You need at least 20 to make a call.");
        return;
      }

      const card = this.closest(".card");
      const serviceName = card.querySelector(".service-tittle")?.textContent.trim();
      const serviceNumber = card.querySelector(".hotline")?.textContent.trim();

      alert(`📞Calling ${serviceName} - ${serviceNumber}`);

      coins -= 20;
      coinCountEl.textContent = coins;

      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.marginBottom = "6px";
            
      const leftSpan = document.createElement("span");
      leftSpan.textContent = `${serviceName} - ${serviceNumber}`;
      
      const rightSpan = document.createElement("span");
      rightSpan.textContent = timeString;
      
      li.appendChild(leftSpan);
      li.appendChild(rightSpan);
      
      callHistoryList.prepend(li);
          });
        });
          clearBtn.addEventListener("click", () => {
          callHistoryList.innerHTML = "";
  });




