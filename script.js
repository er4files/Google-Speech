const textInput = document.getElementById("input");
const speakButton = document.getElementById("speak");

if ("speechSynthesis" in window) {
    const synthesis = window.speechSynthesis;

    let voices = [];
    synthesis.onvoiceschanged = () => {
        voices = synthesis.getVoices();
    };

    speakButton.addEventListener("click", () => {
        const textToSpeak = textInput.value;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        utterance.voice = voices[40];
        utterance.lang = "id-ID";

        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;

        synthesis.speak(utterance);
    });
} else {
    alert("Web Speech error, try input again.");
}