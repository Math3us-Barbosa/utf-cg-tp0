let videoAtual = null;
const videosArray = [
  "videos/oot.mp4",
  "videos/outerWilds.mp4",
  "videos/totk.mp4",
];

function funcaoMisteriosa(index) {
  const jogo = document.getElementById(`jogo-${index}`);
  const container = jogo.querySelector(".divVideo");
  const video = jogo.querySelector("video");
  if (videoAtual && videoAtual !== video) {
    videoAtual.pause();
    videoAtual.currentTime = 0;
    videoAtual.parentElement.classList.remove("ativo");
  }

  if (videoAtual === video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    return;
  }
  if (!video.src.includes(videosArray[index])) {
    video.src = videosArray[index];
  }

  video.src = videosArray[index];
  container.classList.add("ativo");
  video.play();
  videoAtual = video;
}
