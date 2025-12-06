// Make the text bigger (called by the "Bigger!" button)
function makeBigger() {
  const textArea = document.getElementById("text-area");
  textArea.style.fontSize = "24pt";
}

// Update style when FancyShmancy / BoringBetty changes
function updateStyle() {
  const textArea = document.getElementById("text-area");
  const fancy = document.getElementById("fancy-radio");
  const boring = document.getElementById("boring-radio");

  if (fancy.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else if (boring.checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Uppercase text and add "-Moo" to each sentence (called by "Moo" button)
function mooify() {
  const textArea = document.getElementById("text-area");
  let text = textArea.value.toUpperCase();

  // Split into sentences by period
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length > 0) {
      sentences[i] = s + "-Moo";
    }
  }

  // Join sentences back together with periods
  textArea.value = sentences.join(". ");
}
