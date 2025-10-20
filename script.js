const messages = [
  "Gửi em - người con gái đặc biệt nhất trong trái tim anh...",
  "Anh không biết từ bao giờ, chỉ cần nhìn thấy em thôi là trái tim anh lại khẽ rung lên như bản nhạc đầu tiên của mùa xuân.",
  "Em biết không, mỗi buổi sáng tỉnh dậy, điều đầu tiên anh nghĩ đến chính là em...",
  "Dù khoảng cách có xa đến đâu, cảm xúc anh dành cho em vẫn luôn vẹn nguyên như những ngày đầu.",
  "Anh không hứa sẽ mang đến cho em một cuộc sống hoàn hảo, nhưng anh hứa sẽ luôn bên em.",
  "Nếu cuộc sống là một hành trình dài, anh mong người đi bên cạnh anh không ai khác ngoài em.",
  "Cảm ơn em vì đã đến bên anh như một điều kỳ diệu.",
  "Mãi mãi, và hơn cả mãi mãi... ❤️"
];

let msgIndex = 0;
let charIndex = 0;

function openLetter(){
  document.querySelector('.open-btn').style.display = 'none';
  const letter = document.getElementById('letter');
  letter.style.display = 'block';
  startFallingText();
  typeMessage();
}

function typeMessage(){
  if (msgIndex >= messages.length) return;
  const messageDiv = document.getElementById('message');
  if (charIndex === 0){
    messageDiv.innerHTML += "\n";
  }
  let current = messages[msgIndex];
  if (charIndex < current.length){
    messageDiv.innerHTML += current.charAt(charIndex);
    charIndex++;
    setTimeout(typeMessage, 25);
  } else {
    charIndex = 0;
    msgIndex++;
    setTimeout(typeMessage, 300);
  }
}

/* Hiệu ứng chữ rơi */
function startFallingText(){
  for(let i=0; i<10; i++){
    setInterval(()=>{
      createFallingText();
    }, 600 * Math.random() + 300);
  }
}

function createFallingText(){
  const textEl = document.createElement('div');
  textEl.className = 'falling-text';
  textEl.textContent = "Yêu em ❤️";
  textEl.style.left = Math.random() * window.innerWidth + 'px';
  textEl.style.animationDuration = (3 + Math.random()*3) + 's';
  document.body.appendChild(textEl);
  setTimeout(()=> textEl.remove(), 7000);
}
