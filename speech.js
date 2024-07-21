import * as PlayHT from 'playht';  

const apiKey = '79ee3aadfb1c49e593cffc8f20446be2';
const userId = 'eGsaixmRfyXaAOzEwCNA7brZNp42';

PlayHT.init({  
  apiKey: apiKey,  
  userId: userId,  
});

function convertTextToSpeech() {
    const textInput = document.getElementById('textInput').value;

    if (!textInput) {
        alert('Please enter some text.');
        return;
    }

    PlayHT.convert({
        text: textInput,
        voice: 'en_us_male' // You can specify the voice here
    }).then((response) => {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = response.url;
        audioPlayer.style.display = 'block';
    }).catch((error) => {
        console.error('Error converting text to speech:', error);
        alert('Failed to convert text to speech.');
    });
}
