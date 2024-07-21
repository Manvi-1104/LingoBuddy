// const setupTextarea= document.getElementById('setup-textarea');
// const loadingContainer=document.getElementById('output-container');
// const setupInputContainer=document.getElementById('setup-input-container');
// const movieBossText=document.getElementById('movie-boss-text');
// const outputText = document.getElementById('output-text');
// const url = 'https://api.openai.com/v1/completions';

// document.getElementById("send-btn").addEventListener("click",()=>{
//     setupInputContainer.innerHTML='<img src="img1.jpg" class="loading">';
//     movieBossText.innerText="ok, give me a min";
//     fetchBotReply();
// });

// async function fetchBotReply(){
//     try{
//         const promptText=setupTextarea.value;
//         const response=await fetch(url,{
//             method:'POST',
//             headers:{
//                 "Content-Type":"application/json",
//                 "Authorization": `Bearer ${apiKey}`
//             },
//             body:JSON.stringify({
//                 'model':'gpt-3.5-turbo-instruct',
//                 'prompt':`Generate a short message to say "${promptText}" so that you get some time to think about it. After some time give response based on the input.`,
//                 'max_tokens':100
//             })
//         });
//         const data=await response.json();
//         const botReply=data.choices[0].text.trim();
//         console.log(botReply);
//         setupInputContainer.innerHTML=" ";
//         setTimeout(function(){
//             movieBossText.innerText=data.choices[0].text.trim()
//         },1000)
//         fetchSynopsis(promptText);
//     }
//     catch(error){
//         console.error('Error:',error);
//         movieBossText.innerText="Sorry, something went wrong. Please try again";
//     }
// }


// async function fetchSynopsis(promptText){
//     try {
//         //const promptText = setupTextarea.value;
//         const response = await fetch(url,{  
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             'model': 'gpt-3.5-turbo-instruct',
//             'prompt': `generate an engaging, professional and marketable movie synopsis based on "${promptText}".
//              ###
//             prompt text: give me a horror story with a cat
//             synopsis: title- The Haunting of Midnight 
//             In the quiet village of Willowbrook, Eliza, a young woman intrigued by the supernatural, explores the abandoned Blackwood Manor 
//             with her black cat, Midnight. Inside, they encounter strange symbols and a sinister presence. 
//             Midnight leads her to a basement where a cursed mirror distorts his reflection. 
//             As the mirror shatters and the room darkens, Midnight vanishes, seemingly saving Eliza from 
//             the malevolent force. Found the next day in a daze, Eliza moves away, haunted by the memory of 
//             glowing green eyes, while the villagers continue to avoid the manor, now even more wary of its 
//             dark secrets.

//             The main characters in the story are:

// Eliza: A young woman fascinated by the supernatural who moves to Willowbrook and decides to explore the abandoned Blackwood Manor.
// Midnight: Eliza's black cat with emerald eyes, who seems to have a connection to the supernatural and plays a crucial role in the events at the manor.
// Blackwood Manor: Although not a character in the traditional sense, the manor itself is a central element of the story, with its eerie presence and dark secrets influencing the events.
//             ###
//             `,
//             'max_tokens': 500 
//         })
//         });
//         const data = await response.json();
//         const botReply = data.choices[0].text.trim();
//         console.log(botReply);
    
//         setupInputContainer.innerHTML = "";
//         //$("#output-container").css('display','block')
//         document.getElementById("output-container").style.display = 'block'
//         outputText.innerText = data.choices[0].text.trim();
        
//         //movieBossText.innerText = data.choices[0].text.trim()

//     }
//     catch(error)
//     {console.error('Error',error);
//     movieBossText.innerText = "Sorry there was an error"}
//     setupInputContainer.innerHTML = "";

// }


// const url = 'https://api.openai.com/v1/completions';

// const setupTextarea = document.getElementById('setup-textarea'); 
// const setupInputContainer = document.getElementById('setup-input-container');
// const movieBossText = document.getElementById('movie-boss-text');
// const outputContainer = document.getElementById('output-container');
// const outputText = document.getElementById('output-text');

// //$(window).on(load)

// document.getElementById("send-btn").addEventListener("click", () => {
//     //if (setupTextarea.value) {
//     setupInputContainer.innerHTML = '<img src="images/loading.gif" class="loading" id="loading"/>'
//     movieBossText.innerText =' Ok, just wait a second while my digital brain digests that...'
//     //userInput = setupTextarea;
// // }
// fetchBotReply()
// })
// async function fetchBotReply(){
// try {
//     const promptText = setupTextarea.value;
//     const response = await fetch(url,{  
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     },
//     body: JSON.stringify({
//         'model': 'gpt-3.5-turbo-instruct',
//         'prompt': `generate a short message to enthusiastically say "${promptText}" is a good idea and say you need to think about it
       



//         `,
//         'max_tokens': 50 
//     })
//     });
//     const data = await response.json();
//     const botReply = data.choices[0].text.trim();
//     console.log(botReply);
//     //movieBossText.innerText = data.choices[0].text.trim()

//     setupInputContainer.innerHTML = "";
//     movieBossText.innerText = data.choices[0].text.trim()
//     fetchSynopsis(promptText);

//     // setTimeout(function(){
//     //     movieBossText.innerText = data.choices[0].text.trim()
//     // }, 1000)
//     // .then(response => response.json()).then(data => 
//     // movieBossText.innerText = data.choices[0].text.trim()
//     // )
//     // setupInputContainer = "";

// }
// catch(error){
//     console.error('Error',error);
//     movieBossText.innerText = "Sorry there was an error"
//     setupInputContainer = "";
// }

// async function fetchSynopsis(promptText){
//     try {
//         //const promptText = setupTextarea.value;
//         const response = await fetch(url,{  
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             'model': 'gpt-3.5-turbo-instruct',
//             'prompt': `generate an engaging, professional and marketable movie synopsis based on "${promptText}".
//              ###
//             prompt text: give me a horror story with a cat
//             synopsis: title- The Haunting of Midnight 
//             In the quiet village of Willowbrook, Eliza, a young woman intrigued by the supernatural, explores the abandoned Blackwood Manor 
//             with her black cat, Midnight. Inside, they encounter strange symbols and a sinister presence. 
//             Midnight leads her to a basement where a cursed mirror distorts his reflection. 
//             As the mirror shatters and the room darkens, Midnight vanishes, seemingly saving Eliza from 
//             the malevolent force. Found the next day in a daze, Eliza moves away, haunted by the memory of 
//             glowing green eyes, while the villagers continue to avoid the manor, now even more wary of its 
//             dark secrets.

//             The main characters in the story are:

// Eliza: A young woman fascinated by the supernatural who moves to Willowbrook and decides to explore the abandoned Blackwood Manor.
// Midnight: Eliza's black cat with emerald eyes, who seems to have a connection to the supernatural and plays a crucial role in the events at the manor.
// Blackwood Manor: Although not a character in the traditional sense, the manor itself is a central element of the story, with its eerie presence and dark secrets influencing the events.
//             ###
//             `,
//             'max_tokens': 500 
//         })
//         });
//         const data = await response.json();
//         const botReply = data.choices[0].text.trim();
//         console.log(botReply);
    
//         setupInputContainer.innerHTML = "";
//         $("#output-container").css('display','block')
//         //document.getElementById("output-container").style.display = 'block'
//         outputText.innerText = data.choices[0].text.trim();
        
//         //movieBossText.innerText = data.choices[0].text.trim()

//     }
//     catch(error)
//     {console.error('Error',error);
//     movieBossText.innerText = "Sorry there was an error"
//     setupInputContainer.innerHTML = "";

//     }
// }
// }


// import { process } from './env.js';
//const apiKey = 'sk-proj-8pkDjssE2gyZ0yGFUueGT3BlbkFJuuagcsrl0GpBvjllZSJI';

const url = 'https://api.openai.com/v1/completions';

const setupTextarea = document.getElementById('setup-textarea');
const setupInputContainer = document.getElementById('setup-input-container');
const movieBossText = document.getElementById('movie-boss-text');
const outputContainer = document.getElementById('output-container');
const outputText = document.getElementById('output-text');

document.getElementById("send-btn").addEventListener("click", () => {
    setupInputContainer.innerHTML = '<img src="images/loading.gif" class="loading" id="loading">';
    movieBossText.innerText = "Ok, just wait a second while my digital brain digests that...";
    fetchBotReply();
});

async function fetchBotReply() {
    try {
        const promptText = setupTextarea.value;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo-instruct',
                'prompt': `generate a short message on what language skills among Grammar Correction, Vocabulary Enhancement, Sentence Structure Improvement, or Writing Style Suggestions  are missing in the prompt. Consider only the missing skills and mention them to the user, not all.`,
                'max_tokens': 200
            })
        });
        const data = await response.json();
        const botReply = data.choices[0].text.trim();
        console.log(botReply);

        setupInputContainer.innerHTML = "";
        movieBossText.innerText = botReply;
        fetchSynopsis(promptText);
    } catch (error) {
        console.error('Error', error);
        movieBossText.innerText = "Sorry there was an error";
    }
}

async function fetchSynopsis(promptText) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo-instruct',
                'prompt': ` You are an AI that helps improve users' English writing by highlighting and correcting grammatical errors. You also correct spelling errors. For each correction, provide a brief explanation. Please correct the text and explain each correction. Give the corrected text again after all the corrections.
                ###
                user_input: I has a apple and he have a bannana.
                Corrected Text: I have an apple and he has a banana.
                Corrections and Explanations:
                1. "I has" should be "I have" - "has" is incorrect for the subject "I"; it should be "have".
                2. "a apple" should be "an apple" - "an" is used before words starting with a vowel sound.
                3. "he have" should be "he has" - "have" is incorrect for the subject "he"; it should be "has".
                4. "bannana" should be "banana" - Correct spelling of the word.
                ###
                user_input: The temprature was extremly cold yesturday.
                Corrected Text: The temperature was extremely cold yesterday.
                Corrections:
                1. "temprature" should be "temperature" - Correct spelling of the word.
                2. "extremly" should be "extremely" - Correct spelling of the word.
                3. "yesturday" should be "yesterday" - Correct spelling of the word.
                ###
                user_input: ${promptText}
                Corrected Text:
                Corrections:`,
                'max_tokens': 500, 

            })
        });
        const data = await response.json();
        const botReply = data.choices[0].text.trim();
        console.log(botReply);

        setupInputContainer.innerHTML = "";
        outputContainer.style.display = 'block';
        outputText.innerText = botReply;
    } catch (error) {
        console.error('Error', error);
        movieBossText.innerText = "Sorry there was an error";
    }
    setupInputContainer.innerHTML = "";
}


// const url = 'https://api.openai.com/v1/completions';

// const setupTextarea = document.getElementById('setup-textarea'); 
// const setupInputContainer = document.getElementById('setup-input-container');
// const movieBossText = document.getElementById('movie-boss-text');
// const outputContainer = document.getElementById('output-container');
// const outputText = document.getElementById('output-text');
// const outputTitle = document.getElementById('output-title');


// //$(window).on(load)

// document.getElementById("send-btn").addEventListener("click", () => {
//     //if (setupTextarea.value) {
//     setupInputContainer.innerHTML = '<img src="images/loading.gif" class="loading" id="loading">'
//     movieBossText.innerText = 'Ok, just wait a second while my digital brain digests that...'
//     //userInput = setupTextarea;
// // }
// fetchWriting()
// })
// async function fetchGrammar(){
// try {
//     console.log('fetchBotReply called');
//     const user_input = setupTextarea.value;
//     const response = await fetch(url,{  
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`
//     },
//     body: JSON.stringify({
//         'model': 'gpt-3.5-turbo-instruct',
//         'prompt': `
//         You are an AI that helps improve users' English writing by highlighting and correcting grammatical errors. 
// You also correct spelling errors. For each correction, provide a brief explanation. 

// Please correct the text and explain each correction.


//           ###
// user_input: I has a apple and he have a bannana.
// Corrected Text: I have an apple and he has a banana.
// Corrections and Explanations:
// 1. "I has" should be "I have" - "has" is incorrect for the subject "I"; it should be "have".
// 2. "a apple" should be "an apple" - "an" is used before words starting with a vowel sound.
// 3. "he have" should be "he has" - "have" is incorrect for the subject "he"; it should be "has".
// 4. "bannana" should be "banana" - Correct spelling of the word.
// ###
// user_input: The temprature was extremly cold yesturday.
// Corrected Text: The temperature was extremely cold yesterday.
// Corrections:
// 1. "temprature" should be "temperature" - Correct spelling of the word.
// 2. "extremly" should be "extremely" - Correct spelling of the word.
// 3. "yesturday" should be "yesterday" - Correct spelling of the word.
// ###
// user_input: ${user_input}
// corrected text:
// corrections:
//         `,
//         'max_tokens': 250, 
//         //'temperature':0.3
//     })
//     });
//     const data = await response.json();
//     const botReply = data.choices[0].text.trim();
//     console.log(botReply);
//     //movieBossText.innerText = data.choices[0].text.trim()
//     //you are given some text, which is "${outline}". Correct the grammar wherever possible and improve the vocabulary and print the improved version of the users innput

//     setupInputContainer.innerHTML = "";
//     movieBossText.innerText = data.choices[0].text.trim()
//     fetchSynopsis(outline);

// }
// catch(error)
//     {console.error('Error',error);
//     movieBossText.innerText = "Sorry there was an error"}
// //setupInputContainer = "";
// }

// async function fetchWriting(){
//     try {
//         console.log('fetchSynopsis called');
//         const user_input = setupTextarea.value;
//         const response = await fetch(url,{  
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${apiKey}`
//         },
//         body: JSON.stringify({
//             'model': 'gpt-3.5-turbo-instruct',
//             'prompt': `
//             You are an AI that helps users improve their writing style. Review the following text and provide tips to enhance readability, avoid redundancy, and use active voice. Please provide a revised version of the text with explanations for each change.
// ###
// User input:
// The report was written by the team in a detailed and comprehensive manner. It is important that all the data is carefully analyzed and evaluated.
// Output:
// Revised Text: The team wrote the report in a detailed and comprehensive manner. It is important to carefully analyze and evaluate all the data.
// Writing Style Suggestions:
// 1. "The report was written by the team" to "The team wrote the report" - Changing from passive to active voice for more direct and engaging writing.
// 2. "in a detailed and comprehensive manner" - Consider if "detailed" and "comprehensive" are both needed or if one suffices. If both are kept, ensure they add distinct value.
// 3. "It is important that all the data is carefully analyzed and evaluated" to "It is important to carefully analyze and evaluate all the data" - Simplifying the sentence and making it more concise.
// ###
// User input:
// The reason why we are late is because of the traffic on the highway which was very bad.
// Output:
// Revised Text: We are late because the highway traffic was terrible.
// Writing Style Suggestions:
// 1. "The reason why we are late is because of" to "We are late because" - Eliminating redundancy and making the sentence more direct.
// 2. "the traffic on the highway which was very bad" to "the highway traffic was terrible" - Using a stronger adjective ("terrible" instead of "very bad") and making the sentence more concise.

// ###
// User input:In my opinion, I think that the new policy will have a positive impact on the company's growth.
// Output:
// Revised Text: I believe the new policy will positively impact the company's growth.
// Writing Style Suggestions:
// 1. "In my opinion, I think that" to "I believe" - Avoiding redundancy since "I think" and "In my opinion" convey the same idea.
// 2. "will have a positive impact on" to "will positively impact" - Making the sentence more concise and direct.

//             ###

//             user_input: ${user_input}
//             Output:
//             Revised Text: `,
//             'max_tokens': 300
//         })
//         });
//         const data = await response.json();
        
//         //console.log(synopsis);
   
//         $("#output-container").css('display','block')
//         //document.getElementById("output-container").style.display = 'block'
//         outputText.innerText = data.choices[0].text.trim();
        
//         //movieBossText.innerText = data.choices[0].text.trim()

//     }
//     catch(error)
//     {console.error('Error',error);
//     movieBossText.innerText = "Sorry there was an error"}
//     setupInputContainer.innerHTML = "";

// }