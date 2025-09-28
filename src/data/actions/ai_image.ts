export async function uploadAndAnalyzeImage() {
  const input = document.getElementById('imageInput') as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1];
      const result = await analyzeImage(base64Image);
      document.getElementById('result').innerText = JSON.stringify(
        result,
        null,
        2,
      );
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file.');
  }
}

async function analyzeImage(base64Image) {
  const apiKey = 'YOUR_GOOGLE_CLOUD_VISION_API_KEY';
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  const requestBody = {
    requests: [
      {
        image: {
          content: base64Image,
        },
        features: [
          {
            type: 'LABEL_DETECTION',
            maxResults: 10,
          },
        ],
      },
    ],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const result = await response.json();
  return result;
}
