const url = 'https://api.openai.com/v1/completions';

const setupTextarea = document.getElementById('setup-textarea'); 
const setupInputContainer = document.getElementById('setup-input-container');
const movieBossText = document.getElementById('movie-boss-text');
const outputContainer = document.getElementById('output-container');
const outputText = document.getElementById('output-text');
const outputTitle = document.getElementById('output-title');
//const heading = document.getElementById('heading');
const heading = document.getElementById('heading');

let buttonval=1;

document.getElementById("b1").addEventListener("click", () => {
  heading.innerText = `Grammar, and Sentence Improvement`;
  console.log(buttonval)
  buttonval = 1;
  
})

document.getElementById("b2").addEventListener("click", () => {
  buttonval  = 2; 
  heading.innerText = `Writing Style Suggestions`;
}) 

document.getElementById("b3").addEventListener("click", () => {
  buttonval  = 3; 
  heading.innerText = `Vocabulary Enhancement`;
}) 

document.getElementById("b4").addEventListener("click", () => {
  buttonval  = 4; 
  heading.innerText= `Pronounciation help`;
}) 

document.getElementById("send-btn").addEventListener("click", () => {
    //if (setupTextarea.value) {
    setupInputContainer.innerHTML = '<img src="images/loading.gif" class="loading" id="loading">'
    outputText.innerText = 'Ok, just wait a second while my digital brain digests that...'
    //userInput = setupTextarea;
// }
if (buttonval === 1){
  console.log(buttonval)
  fetchGrammar()
} else if (buttonval === 2){
  console.log(buttonval)
  fetchWriting()
}
else if (buttonval === 3){
  console.log(buttonval)
  fetchVocab()
}
else {
  console.log(buttonval)
  fetchPronounce()
}

});
async function fetchGrammar(){
try {
    console.log('fetchBotReply called');
    const user_input = setupTextarea.value;
    const response = await fetch(url,{  
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'gpt-3.5-turbo-instruct',
        'prompt': `
        You are an AI that helps improve users' English writing by highlighting and correcting grammatical errors. 
You also correct spelling errors. For each correction, provide a brief explanation. 

Please correct the text and explain each correction. The output produced must include the corrected sentence as well.
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
user_input: ${user_input}
corrected text:
corrections:
        `,
        'max_tokens': 250, 
        //'temperature':0.3
    })
    });
    const data = await response.json();
    const botReply = data.choices[0].text.trim();
    console.log(botReply);
    //movieBossText.innerText = data.choices[0].text.trim()
    //you are given some text, which is "${outline}". Correct the grammar wherever possible and improve the vocabulary and print the improved version of the users innput

    setupInputContainer.innerHTML = user_input;
    $("#output-container").css('display','block')
    outputText.innerText = data.choices[0].text.trim()
    

}
catch(error)
    {console.error('Error',error);
      outputText.innerText = "Sorry there was an error"}
//setupInputContainer = "";
}

async function fetchWriting(){
    try {
        console.log('fetchSynopsis called');
        const user_input = setupTextarea.value;
        const response = await fetch(url,{  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'model': 'gpt-3.5-turbo-instruct',
            'prompt': `
            You are an AI that helps users improve their writing style. Review the following text and provide tips to enhance readability, avoid redundancy, and use active voice. 

Please provide a revised version of the text with explanations for each change.
###
User input:
The report was written by the team in a detailed and comprehensive manner. It is important that all the data is carefully analyzed and evaluated.
Output:
Revised Text: The team wrote the report in a detailed and comprehensive manner. It is important to carefully analyze and evaluate all the data.
Writing Style Suggestions:
1. "The report was written by the team" to "The team wrote the report" - Changing from passive to active voice for more direct and engaging writing.
2. "in a detailed and comprehensive manner" - Consider if "detailed" and "comprehensive" are both needed or if one suffices. If both are kept, ensure they add distinct value.
3. "It is important that all the data is carefully analyzed and evaluated" to "It is important to carefully analyze and evaluate all the data" - Simplifying the sentence and making it more concise.
###
User input:
The reason why we are late is because of the traffic on the highway which was very bad.
Output:
Revised Text: We are late because the highway traffic was terrible.
Writing Style Suggestions:
1. "The reason why we are late is because of" to "We are late because" - Eliminating redundancy and making the sentence more direct.
2. "the traffic on the highway which was very bad" to "the highway traffic was terrible" - Using a stronger adjective ("terrible" instead of "very bad") and making the sentence more concise.

###
User input:In my opinion, I think that the new policy will have a positive impact on the company's growth.
Output:
Revised Text: I believe the new policy will positively impact the company's growth.
Writing Style Suggestions:
1. "In my opinion, I think that" to "I believe" - Avoiding redundancy since "I think" and "In my opinion" convey the same idea.
2. "will have a positive impact on" to "will positively impact" - Making the sentence more concise and direct.

            ###

            user_input:${user_input}
            Output:
            Revised Text:

            `,
            'max_tokens': 300
        })
        });
        const data = await response.json();
        
        //console.log(synopsis);
        setupInputContainer.innerHTML = user_input;
   
        $("#output-container").css('display','block')
        //document.getElementById("output-container").style.display = 'block'
        outputText.innerText = data.choices[0].text.trim();
        
        //movieBossText.innerText = data.choices[0].text.trim()

    }
    catch(error)
    {console.error('Error',error);
    movieBossText.innerText = "Sorry there was an error"}
    setupInputContainer.innerHTML = "";

}

async function fetchVocab(){
  try {
      console.log('fetchSynopsis called');
      const user_input = setupTextarea.value;
      const response = await fetch(url,{  
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          'model': 'gpt-3.5-turbo-instruct',
          'prompt': `
          You are an AI that helps users improve their vocabulary. Review the user input and provide some synonyms, antonyms, and the definition of three words.
          they can be any three words that can be replaced in the sentence.

Please provide Synonyms, Antonyms and Definitions for any three  words.
###
user input: The quick brown fox jumps over the lazy dog.
Vocabulary Enhancement:
1. "quick" - Synonyms: fast, swift, rapid. Antonyms: slow, sluggish. Definition: Moving or functioning rapidly and energetically.
2. "jumps" - Synonyms: leaps, bounds, hops. Antonyms: sits, lies. Definition: Push oneself off a surface and into the air by using the muscles in one's legs and feet.
3. "lazy" - Synonyms: idle, indolent, slothful. Antonyms: industrious, diligent. Definition: Unwilling to work or use energy.
          ###
          User Input: The bright sun shines over the calm ocean.
Vocabulary Enhancement:
"bright" - Synonyms: radiant, luminous, brilliant. Antonyms: dim, dull. Definition: Emitting or reflecting a lot of light; shining.
"shines" - Synonyms: gleams, glows, sparkles. Antonyms: darkens, fades. Definition: To give out a bright light.
"calm" - Synonyms: tranquil, serene, peaceful. Antonyms: turbulent, chaotic. Definition: Not showing or feeling nervousness, anger, or other strong emotions; free from disturbance.
###
User Input:The young girl read an exciting book about adventures in a faraway land.
Vocabulary Enhancement:
"young" - Synonyms: youthful, juvenile, adolescent. Antonyms: old, elderly. Definition: Having lived or existed for only a short time; not fully developed.
"exciting" - Synonyms: thrilling, exhilarating, stimulating. Antonyms: boring, dull. Definition: Causing great enthusiasm and eagerness.
"adventures" - Synonyms: exploits, quests, escapades. Antonyms: routines, stagnations. Definition: An unusual and exciting, typically hazardous, experience or activity.
###
          user_input:${user_input}
          Vocabulary Enhancement:

          `,
          'max_tokens': 300
      })
      });
      const data = await response.json();
      
      //console.log(synopsis);
      setupInputContainer.innerHTML = user_input;
 
      $("#output-container").css('display','block')
      //document.getElementById("output-container").style.display = 'block'
      outputText.innerText = data.choices[0].text.trim();
      
      //movieBossText.innerText = data.choices[0].text.trim()

  }
  catch(error)
  {console.error('Error',error);
  movieBossText.innerText = "Sorry there was an error"}
  setupInputContainer.innerHTML = "";

}


async function fetchPronounce(){
  try {
      console.log('fetchPronounce called');
      const user_input = setupTextarea.value;
      const response = await fetch(url,{  
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
          'model': 'gpt-3.5-turbo-instruct',
          'prompt': `
          You are an AI that helps users with pronunciation. When given a word, provide a phonetic transcription, a brief explanation of how to pronounce it, and some example words with similar sounds. 
          The user's input is user_input
Please provide the phonetic transcription, pronunciation explanation, and example words.
###
user_input : example
Phonetic Transcription: /ɪɡˈzæmpəl/
Pronunciation Explanation: The word "example" is pronounced with stress on the second syllable. The "ex" is pronounced as /ɪɡz/, the "am" as /æm/, and the "ple" as /pəl/. 
Example Words: exam (/ɪɡˈzæm/), sample (/ˈsæmpəl/), ample (/ˈæmpəl/)
###
beautiful
Phonetic Transcription: /ˈbjuːtəfəl/
Pronunciation Explanation: The word "beautiful" is pronounced with stress on the first syllable. The "beau" is pronounced as /ˈbjuː/, the "ti" as /tə/, and the "ful" as /fəl/.
Example Words: beauty (/ˈbjuːti/), duty (/ˈdjuːti/), fruitful (/ˈfruːtfəl/)
###

          user_input:${user_input}
          Phonetic Transcription:
          Pronunciation Explanation:
          Example Words:

          `,
          'max_tokens': 300
      })
      });
      const data = await response.json();
      
      //console.log(synopsis);
      setupInputContainer.innerHTML = user_input;
 
      $("#output-container").css('display','block')
      //document.getElementById("output-container").style.display = 'block'
      outputText.innerText = data.choices[0].text.trim();
      
      //movieBossText.innerText = data.choices[0].text.trim()

  }
  catch(error)
  {console.error('Error',error);
  movieBossText.innerText = "Sorry there was an error"}
  setupInputContainer.innerHTML = "";

}