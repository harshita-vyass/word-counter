const count = () => {  
  var textArea = text_area.value;
  count_char.innerText = textArea.length;
  wordCount(textArea);
  lineCount(textArea);
  paragraphCount(textArea);
  label_char.innerText = count_char.innerText > 1 ? "Characters" : "Character"
  label_word.innerText = count_word.innerText > 1 ? "Words" : "Word"
  label_line.innerText = count_line.innerText > 1 ? "Lines" : "Line"
  label_paragraph.innerText = count_paragraph.innerText > 1 ? "Paragraphs" : "Paragraph"
};

const wordCount = (textArea) => {
  var regex = textArea.match(/[\w\d\’\'-]+/gi);

  if (regex) {
    count_word.innerText = regex.length;
  } else {
    count_word.innerText = 0;
  }
};

const lineCount = (textArea) => {
  var regex = textArea.split("\n");

  if (textArea.length > 0) {
    count_line.innerText = regex.length;
  } else {
    count_line.innerText = "0";
  }
};

const paragraphCount = (textArea) => {
  var regex = textArea.split("\n\n");

  if (textArea.length > 0) {
    count_paragraph.innerText = regex.length;
  } else {
    count_paragraph.innerText = "0";
  }
};

const synthesize = () => {
    const text = text_area.value
    if(text.length === 0) {
        alert("No text to synthensize!")
    }
    let utterance = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices()
    for(let i=0; i< voices.length; i++) {
        if(voices[i].lang === "en-IN")
            console.log(i + ") " + voices[i].name + " " + voices[i].lang)
    }

    // Set the text and voice of the utterance
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[26];
  
    // Speak the utterance
    window.speechSynthesis.speak(utterance);
}
