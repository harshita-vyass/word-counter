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

  if (text.length === 0) {
    alert("No text to synthensize!")
  }

  // const synthensizeButton = synthensize_button;
  synthensize_button.disabled = true;
  synthensize_button.classList.toggle("btn-disabled")


  let utterance = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices()
  let voice_id = 26;
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].lang === "en-IN") {
      voice_id = i;
      break;
    }
  }

  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[voice_id];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);

  utterance.onend = () => {
    // Re-enable the Synthesize button after synthesis is complete
    synthensize_button.disabled = false;
    synthensize_button.classList.toggle("btn-disabled")
  };

  utterance.onerror = (event) => {
    alert("Speech synthesis error: " + event.error);
    // Re-enable the Synthesize button in case of an error
    synthensize_button.disabled = false;
    synthensize_button.classList.toggle("btn-disabled")
  };
};
