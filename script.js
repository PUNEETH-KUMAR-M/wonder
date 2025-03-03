document.getElementById('openCameraButton').addEventListener('click', async () => {
    try {
        const videoElement = document.getElementById('video');
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' } // Use 'user' for front camera
        });
        videoElement.srcObject = stream;
    } catch (err) {
        console.error('Error accessing camera:', err);
    }
});
