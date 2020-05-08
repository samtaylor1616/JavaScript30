const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(e => console.error('Error getting video: ', e));
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    // return it only because if you want to stop the interval you will have access to it
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.1;
        // pixels = greenScreen(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    playSound(snap);

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'myPicture');
    // link.textContent = 'Download Image'; <- Instead of just showing a link to download from we will show the image
    link.innerHTML = `<img src=${data} alt="My Picture" />`;
    strip.insertBefore(link, strip.firstChild);
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function redEffect(pixels) {
    // Not using map because this pixels array is a special type of large array
    // We are incrementing by 4 because each 1 pixel in a photo has 4 attributes
    for (let ii = 0; ii < pixels.data.length; ii += 4) {
        pixels.data[ii + 0] = pixels.data[ii + 0] + 200; // RED
        pixels.data[ii + 1] = pixels.data[ii + 1] - 50; // GREEN
        pixels.data[ii + 2] = pixels.data[ii + 2] * 0.5; // Blue
        // pixels[ii + 3] alpha which we don't need for this effect
    }

    return pixels;
}

function rgbSplit(pixels) {
    for (let ii = 0; ii < pixels.data.length; ii += 4) {
        pixels.data[ii - 150] = pixels.data[ii + 0]; // RED
        pixels.data[ii + 500] = pixels.data[ii + 1]; // GREEN
        pixels.data[ii - 550] = pixels.data[ii + 2]; // Blue
    }

    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0; // sets alpha to be transparent
        }
    }

    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);