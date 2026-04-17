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
        feedback.innerText = "Verified. Moving to next sequence...";
        feedback.style.color = "#00ff88";
        
        currentIdx = (currentIdx + 1) % puzzles.length;
        input.value = "";
        loadPuzzle();
    } else {
        feedback.innerText = "Access Denied. Try again.";
        feedback.style.color = "#ff0058";
    }
}

// Generate DNA strands automatically
const dna = document.getElementById('dna');
// Generate 25 rungs for a longer, more realistic helix
for(let i=0; i<25; i++) {
    let div = document.createElement('div');
    div.className = 'strand';
    div.style.setProperty('--top', (i * 18) + 'px');
    div.style.setProperty('--rot', (i * 20) + 'deg'); // 20 degree shift creates the spiral
    dna.appendChild(div);
}


loadPuzzle();