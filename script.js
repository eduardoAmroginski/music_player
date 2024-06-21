const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const lyricsContainer = document.getElementById('lyrics-container');

// Example lyrics with timestamps
const lyrics = [
    { time: 0, text: "First line of the song" },
    { time: 5, text: "Second line of the song" },
    { time: 10, text: "Third line of the song" },
    // Add more lines here
];

let currentLine = 0;

const updateLyrics = () => {
    const currentTime = audio.currentTime;
    if (currentLine < lyrics.length && currentTime >= lyrics[currentLine].time) {
        const lines = lyricsContainer.querySelectorAll('span');
        lines.forEach(line => line.classList.remove('highlight'));
        lines[currentLine].classList.add('highlight');
        currentLine++;
    }
};

audio.addEventListener('timeupdate', updateLyrics);

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

prevButton.addEventListener('click', () => {
    audio.currentTime -= 5; // Go back 5 seconds
});

nextButton.addEventListener('click', () => {
    audio.currentTime += 5; // Go forward 5 seconds
});

// Initialize lyrics container
lyricsContainer.innerHTML = lyrics.map(line => `<span>${line.text}</span>`).join('\n');
