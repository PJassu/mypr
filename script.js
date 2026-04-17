const dna = document.getElementById('dna');
let targetRotation = 0;
let currentRotation = 0;

// 1. Generate DNA strands with CSS Variables
for(let i=0; i<25; i++) {
    let div = document.createElement('div');
    div.className = 'strand';
    div.style.setProperty('--top', (i * 18) + 'px');
    div.style.setProperty('--rot', (i * 20) + 'deg');
    dna.appendChild(div);
}

// 2. Interactive Mouse Tracking
window.addEventListener('mousemove', (e) => {
    // This calculates how much to spin based on your mouse position
    targetRotation = (e.clientX / window.innerWidth) * 720; 
});

// 3. Smooth Animation Loop
function animate() {
    // This creates that "heavy" professional feel
    currentRotation += (targetRotation - currentRotation) * 0.05;
    dna.style.transform = `rotateY(${currentRotation}deg)`;
    requestAnimationFrame(animate);
}
animate();

// --- Quiz Logic ---
const puzzles = [
    { q: "What has keys but can't open locks?", a: "piano" },
    { q: "What has a thumb and four fingers but isn't alive?", a: "glove" },
    { q: "The more of this there is, the less you see.", a: "darkness" }
];

let currentIdx = 0;
let score = 0;

function loadPuzzle() {
    document.getElementById('question').innerText = puzzles[currentIdx].q;
}

function checkAnswer() {
    let input = document.getElementById('answer');
    let feedback = document.getElementById('feedback');
    
    if (input.value.toLowerCase().trim() === puzzles[currentIdx].a) {
        score++;
        document.getElementById('score').innerText = score;
        feedback.innerText = "Verified. Sequence matching...";
        feedback.style.color = "#00ff88";
        
        currentIdx = (currentIdx + 1) % puzzles.length;
        input.value = "";
        setTimeout(() => {
            loadPuzzle();
            feedback.innerText = "";
        }, 1000);
    } else {
        feedback.innerText = "Access Denied.";
        feedback.style.color = "#ff0058";
    }
}

loadPuzzle();