import "./style.css";

const constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    console.error(err);
  });

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("video").classList.toggle("freeky");
});
