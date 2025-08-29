
// Heart count code----
let hearts = document.getElementsByClassName('heart');
let heartCount = document.getElementById('heart-count');
let count = 0;

 for (let i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener("click", function() {
        count++;
        heartCount.textContent = count;
      });
}


// call section (make call/ call history/ clear btn) code---
  let coins = parseInt(document.getElementById("coin-count").textContent);
  const coinCountEl = document.getElementById("coin-count");
  const callHistoryList = document.querySelector("#call-history ul");
  const clearBtn = document.getElementById("clear-btn");

  document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", function() {
    
      if (coins < 20) {
        alert("Not enough coins! You need at least 20 to make a call.");
        return;
      }

      const card = this.closest(".card");
      if (!card) {
        console.error("Call button is not inside a .card container");
        return;
      }

      const serviceName = card.querySelector(".service-tittle")?.textContent.trim();
      const serviceNumber = card.querySelector(".hotline")?.textContent.trim();

      if (!serviceName || !serviceNumber) {
        console.error("Missing .service-tittle or .hotline inside card");
        return;
      }

      alert(`Calling ${serviceName} at ${serviceNumber}...`);

      coins -= 20;
      coinCountEl.textContent = coins;

      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${serviceNumber} at - ${timeString}`;
      callHistoryList.prepend(li);
    });
  });
    clearBtn.addEventListener("click", () => {
    callHistoryList.innerHTML = "";
  });



//   copy button code-----
   let copyCount = 0;
  const copyCountEl = document.getElementById("copy-count");

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const card = this.closest(".card");
      const hotlineEl = card.querySelector(".hotline");

      if (!hotlineEl) {
        console.error("No .hotline found inside this card");
        return;
      }

      const hotline = hotlineEl.textContent.trim();

      navigator.clipboard.writeText(hotline).then(() => {
        alert(`Hotline ${hotline} copied!`);
        
        copyCount++;
        copyCountEl.textContent = copyCount;
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    });
  });





