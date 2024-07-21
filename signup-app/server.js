// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/signup', (req, res) => {
//     const { email, password } = req.body;
//     const user = { email, password };

//     // Read existing users from file
//     fs.readFile('users.json', 'utf8', (err, data) => {
//         if (err && err.code !== 'ENOENT') {
//             return res.status(500).send('Error reading user data.');
//         }

//         const users = data ? JSON.parse(data) : {};

//         if (users[email]) {
//             return res.status(400).send('User already exists');
//         }

//         users[email] = password;

//         fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).send('Error saving user data.');
//             }
//             res.status(200).send('User registered successfully');
//         });
//     });
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     fs.readFile('users.json', 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).send('Error reading users file');
//         } else {
//             const users = JSON.parse(data);
//             if (users[email] && users[email] === password) {
//                 res.status(200).send('Login successful');
//             } else {
//                 res.status(401).send('Invalid credentials');
//             }
//         }
//     });
// });




const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };

    // Read existing users from file
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading user data.');
        }

        const users = data ? JSON.parse(data) : {};

        if (users[email]) {
            return res.status(400).send('User already exists');
        }

        users[email] = password;

        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving user data.');
            }
            res.status(200).send('User registered successfully');
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading users file');
        } else {
            const users = JSON.parse(data);
            console.log('Users:', users); // Log the users object
            if (users[email] && users[email] === password) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Invalid credentials');
            }
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// const{ AssemblyAI } = require('assemblyai');

// const client = new AssemblyAI({
//   apiKey: "b4713e8745dd46b3a704fd05f302113d"
// })

// const audioUrl =
//   'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

// const config = {
//   audio_url: audioUrl
// }

// // Assuming you've set up express and other configurations
// app.get('/transcribe', async (req, res) => {
//     const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'; // Sample audio file
//     const config = { audio_url: audioUrl };

//     try {
//         const transcriptResult = await client.transcripts.create(config);
//         console.log('hi');
//         // Wait for the transcription to complete and then fetch the result
//         // You might need to poll the API to get the completed transcription
//         res.json({ transcription: transcriptResult.text });
//     } catch (error) {
//         console.error('Error in transcription:', error);
//         res.status(500).json({ error: 'Error processing transcription' });
//     }
// });


// const http = require('https');

// const options = {
// 	method: 'POST',
// 	hostname: 'voicerss-text-to-speech.p.rapidapi.com',
// 	port: null,
// 	path: '/speech',
// 	headers: {
// 		'x-rapidapi-key': '333f915cafmsha676aa4c8bfe468p152f92jsn5ab8455f9e16',
// 		'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
// 		'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.write('-----011000010111000001101001\r\nContent-Disposition: form-data; name="src"\r\n\r\nHello, world!\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="hl"\r\n\r\nen-us\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="r"\r\n\r\n0\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="c"\r\n\r\nmp3\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="f"\r\n\r\n8khz_8bit_mono\r\n-----011000010111000001101001--\r\n\r\n');
// req.end();
// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// const apiKey='79ee3aadfb1c49e593cffc8f20446be2'
// const userId='eGsaixmRfyXaAOzEwCNA7brZNp42'

// import * as PlayHT from 'playht';  
// // import OpenAI from 'openai';

// PlayHT.init({  
//   apiKey: apiKey,  
//   userId: userId,  
// });

// const openai = new OpenAI({  
//   apiKey: 'YOUR_OPENAI_API_KEY',  
//   organization: 'YOUR_OPENAI_ORG_ID',  
//});
