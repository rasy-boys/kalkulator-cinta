let boyfriend = document.getElementById('boyfriend');
let girlfriend = document.getElementById('girlfriend');
let calculate_btn = document.getElementById('calculate_love');
let output_section = document.querySelector('.output');
let musicHigh = new Audio('assets/romantis.mp3'); // Lagu jika skor lebih dari 5
let musicLow = new Audio('assets/taksegampangitu.mp3'); // Lagu jika skor kurang dari 6
let go_back = document.getElementById('go_back');
let girlfriend_output = document.getElementById('output_girlfriend');
let boyfriend_output = document.getElementById('output_boyfriend');
let score_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let love_score = document.getElementById('love_score');

calculate_btn.onclick = () => {
    if (boyfriend.value !== "" && girlfriend.value !== "") {
        output_section.style.top = 0;
        let random_score = Math.floor(Math.random() * score_value.length);
        love_score.innerText = random_score;
        girlfriend_output.innerText = girlfriend.value;
        boyfriend_output.innerText = boyfriend.value;

        // Stop any currently playing music
        musicHigh.pause();
        musicLow.pause();

        // Reset music to the beginning
        musicHigh.currentTime = 0;
        musicLow.currentTime = 0;

        // Play music based on the score and show images based on the score
        if (random_score > 5) {
            musicHigh.play();
            document.querySelector('.side-image.left').style.display = 'block';
            document.querySelector('.side-image.right').style.display = 'block';
            document.querySelector('.side-image.left').src = 'assets/aw.jpeg';
            document.querySelector('.side-image.right').src = 'assets/aw.jpeg';
        } else {
            musicLow.play();
            document.querySelector('.side-image.left').style.display = 'block';
            document.querySelector('.side-image.right').style.display = 'block';
            document.querySelector('.side-image.left').src = 'assets/sad.jpeg';
            document.querySelector('.side-image.right').src = 'assets/sad.jpeg';
        }
    }
}

go_back.onclick = () => {
    output_section.style.top = "-100%";
    musicHigh.pause(); // Stop the high score music
    musicLow.pause();  // Stop the low score music
    musicHigh.currentTime = 0; // Reset high score music to the beginning
    musicLow.currentTime = 0;  // Reset low score music to the beginning

    // Hide images when going back
    document.querySelector('.side-image.left').style.display = 'none';
    document.querySelector('.side-image.right').style.display = 'none';
}