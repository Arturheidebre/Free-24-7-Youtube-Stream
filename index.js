import { exec } from "child_process";

const streamKey = process.env.YT_KEY; // kommt gleich in Secrets
const video = "video.mp4"; // dein Video im Projektordner

const ffmpegCmd = `ffmpeg -re -stream_loop -1 -i ${video} -vcodec libx264 -preset veryfast -maxrate 3000k -bufsize 6000k -pix_fmt yuv420p -g 50 -f flv rtmp://a.rtmp.youtube.com/live2/${streamKey}`;

exec(ffmpegCmd, (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
  console.error(stderr);
});
