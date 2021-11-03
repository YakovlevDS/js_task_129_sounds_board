// ? Task:


// Solution 1


const sounds = [
  "applause",
  "silent",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong",
  "akula",
  "Razdrazhay",
  "RewaX1337",
  "progulchitsa",
  "zaberi-klyuchi",
  "lx24-ugolek",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
// ! Explanation: 
