const phrases = ["Hello world!", "JavaScript is fun!", "I love coding."]; 
const phraseEl = document.getElementById("phrase"); 
const typingEl = document.getElementById("typing"); 
const timerEl = document.getElementById("timer"); 
const resultEl = document.getElementById("result"); 
 
let startTime, timerInterval; 
 
function startTypingTest() { 
    const randomPhrase = phrases[Math.floor(Math.random() * 
phrases.length)]; 
    phraseEl.textContent = randomPhrase; 
    typingEl.value = ""; 
    resultEl.textContent = ""; 
    startTime = Date.now(); 
    clearInterval(timerInterval); 
    timerInterval = setInterval(() => { 
        timerEl.textContent = `Time: ${((Date.now() - startTime) / 
1000).toFixed(1)}s`; 
    }, 100); 
} 
 
typingEl.addEventListener("input", () => { 
    if (typingEl.value === phraseEl.textContent) { 
        clearInterval(timerInterval); 
        resultEl.textContent = `Completed in ${(Date.now() - startTime) / 
1000}s!`; 
    } 
}); 
startTypingTest();