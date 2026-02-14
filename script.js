function moveButton() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed"; noBtn.style.left = x + "px"; noBtn.style.top = y + "px";
}

function openEnvelope() {
    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("envelopeScreen").style.display = "block";
    setTimeout(() => { document.querySelector('.envelope').classList.add('open'); }, 500);
}

function closeLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.remove('open');

    setTimeout(() => {
        startFlyingSequence();
    }, 1000);
}

function startFlyingSequence() {
    const wrapper = document.getElementById("envelopeScreen");
    const wings = document.querySelectorAll('.wings');
    
    wings.forEach(wing => wing.style.opacity = '1');

    setTimeout(() => {
        wrapper.classList.add('fly-away');
    }, 500);

    setTimeout(() => {
        document.body.style.backgroundColor = "#ffcce0";
        startHeartRain();
    }, 1000);

    setTimeout(() => {
        showFinalHeart();
    }, 3500);
}

// 🩷 Heart Rain Function
function startHeartRain() {
    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }
        createFallingElement("🩷", "emoji-fall");
    }, 100);
}
function showFinalHeart() {
    const finalScene = document.getElementById("finalScene");
    finalScene.style.display = "block";
    
    // Type Writer Effect
    const text = "I Love You";
    const textContainer = document.getElementById("typingText");
    textContainer.innerHTML = ""; 
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            textContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();
    startRosePetalRain();
}

function startRosePetalRain() {
    setInterval(() => {
        createFallingElement("", "rose-petal");
    }, 200);
}

function createFallingElement(content, className) {
    const el = document.createElement("div");
    el.classList.add(className);
    if(content) el.innerText = content;
    
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s - 5s
    
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, 5000);
}

