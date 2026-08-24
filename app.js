const data = [
  {
    category: "Basics",
    phrases: [
      { en: "Hello / Hi", gr: "Γεια σου (γεια σας formal)", pr: "yah soo / yah sas" },
      { en: "Good morning", gr: "Καλημέρα", pr: "kah-lee-MEH-rah" },
      { en: "Good evening", gr: "Καλησπέρα", pr: "kah-lee-SPEH-rah" },
      { en: "Good night", gr: "Καληνύχτα", pr: "kah-lee-NEEKH-tah" },
      { en: "Goodbye", gr: "Αντίο", pr: "ahn-DEE-oh" },
      { en: "See you later", gr: "Τα λέμε", pr: "tah LEH-meh" },
      { en: "Please", gr: "Παρακαλώ", pr: "pah-rah-kah-LOH" },
      { en: "Thank you (very much)", gr: "Ευχαριστώ (πολύ)", pr: "ef-khah-ree-STOH (poh-LEE)" },
      { en: "You're welcome", gr: "Παρακαλώ", pr: "pah-rah-kah-LOH" },
      { en: "Yes / No", gr: "Ναι / Όχι", pr: "neh / OH-hee" },
      { en: "Sorry / Excuse me", gr: "Συγγνώμη", pr: "see-GHNOH-mee" }
    ]
  },
  {
    category: "Getting by",
    phrases: [
      { en: "Do you speak English?", gr: "Μιλάτε αγγλικά;", pr: "mee-LAH-teh ang-glee-KAH" },
      { en: "I don't understand", gr: "Δεν καταλαβαίνω", pr: "dhen kah-tah-lah-VEH-noh" },
      { en: "I don't speak Greek (well)", gr: "Δεν μιλάω καλά ελληνικά", pr: "dhen mee-LAH-oh kah-LAH eh-lee-nee-KAH" },
      { en: "How do you say...?", gr: "Πώς λέγεται...;", pr: "pos LEH-yeh-teh" },
      { en: "Can you help me?", gr: "Μπορείτε να με βοηθήσετε;", pr: "boh-REE-teh nah meh voh-ee-THEE-seh-teh" },
      { en: "Where is...?", gr: "Πού είναι...;", pr: "poo EE-neh" },
      { en: "How much does it cost?", gr: "Πόσο κοστίζει;", pr: "POH-soh kos-TEE-zee" }
    ]
  },
  {
    category: "Small talk",
    phrases: [
      { en: "How are you?", gr: "Τι κάνεις; (τι κάνετε; formal)", pr: "tee KAH-nees / tee KAH-neh-teh" },
      { en: "I'm fine, thanks", gr: "Καλά, ευχαριστώ", pr: "kah-LAH, ef-khah-ree-STOH" },
      { en: "What's your name?", gr: "Πώς σε λένε;", pr: "pos seh LEH-neh" },
      { en: "My name is...", gr: "Με λένε...", pr: "meh LEH-neh" },
      { en: "Nice to meet you", gr: "Χάρηκα", pr: "HAH-ree-kah" },
      { en: "Where are you from?", gr: "Από πού είσαι;", pr: "ah-POH poo EE-seh" }
    ]
  },
  {
    category: "Eating & drinking",
    phrases: [
      { en: "The menu, please", gr: "Τον κατάλογο, παρακαλώ", pr: "tone kah-TAH-loh-goh, pah-rah-kah-LOH" },
      { en: "Cheers!", gr: "Στην υγειά μας!", pr: "steen ee-YAH mas" },
      { en: "The bill, please", gr: "Τον λογαριασμό, παρακαλώ", pr: "tone loh-ghah-ree-as-MOH" },
      { en: "It was delicious", gr: "Ήταν πεντανόστιμο", pr: "EE-tan pen-dah-NOS-tee-moh" },
      { en: "I'm a vegetarian", gr: "Είμαι χορτοφάγος", pr: "EE-meh khor-toh-FAH-ghos" }
    ]
  },
  {
    category: "Getting around",
    phrases: [
      { en: "Where is the bathroom?", gr: "Πού είναι η τουαλέτα;", pr: "poo EE-neh ee too-ah-LEH-tah" },
      { en: "I'm looking for...", gr: "Ψάχνω για...", pr: "PSAKH-noh yah" },
      { en: "Turn left / right", gr: "Στρίψε αριστερά / δεξιά", pr: "STREEP-seh ah-rees-teh-RAH / dhek-see-AH" },
      { en: "Straight ahead", gr: "Ευθεία", pr: "ef-THEE-ah" }
    ]
  },
  {
    category: "Travel – Airport",
    phrases: [
      { en: "Where is passport control?", gr: "Πού είναι ο έλεγχος διαβατηρίων;", pr: "poo EE-neh oh EH-leng-khos dhee-ah-vah-tee-REE-ohn" },
      { en: "I'm here on vacation / for work", gr: "Είμαι εδώ για διακοπές / για δουλειά", pr: "EE-meh eh-DHOH yah dhee-ah-koh-PES / yah dhoo-LYAH" },
      { en: "Where can I get a taxi?", gr: "Πού μπορώ να βρω ταξί;", pr: "poo boh-ROH nah vroh tak-SEE" },
      { en: "Baggage claim", gr: "Παραλαβή αποσκευών", pr: "pah-rah-lah-VEE ah-pos-keh-VOHN" }
    ]
  },
  {
    category: "Travel – Getting around",
    phrases: [
      { en: "How do I get to...?", gr: "Πώς πάω στο...;", pr: "pos PAH-oh stoh" },
      { en: "Is it far / close?", gr: "Είναι μακριά / κοντά;", pr: "EE-neh mah-kree-AH / kon-DAH" },
      { en: "One ticket to..., please", gr: "Ένα εισιτήριο για..., παρακαλώ", pr: "EH-nah ee-see-TEE-ree-oh yah... pah-rah-kah-LOH" },
      { en: "What time does it leave / arrive?", gr: "Τι ώρα φεύγει / φτάνει;", pr: "tee OH-rah FEV-yee / FTAH-nee" },
      { en: "Which platform / bus stop?", gr: "Ποια πλατφόρμα / στάση;", pr: "pyah plaht-FOR-mah / STAH-see" },
      { en: "Can you call me a taxi?", gr: "Μπορείτε να μου καλέσετε ταξί;", pr: "boh-REE-teh nah moo kah-LEH-seh-teh tak-SEE" },
      { en: "Stop here, please", gr: "Σταματήστε εδώ, παρακαλώ", pr: "stah-mah-TEE-steh eh-DHOH" },
      { en: "Keep the change", gr: "Κρατήστε τα ρέστα", pr: "krah-TEE-steh tah RES-tah" }
    ]
  },
  {
    category: "Hotel",
    phrases: [
      { en: "I have a reservation", gr: "Έχω κράτηση", pr: "EH-khoh KRAH-tee-see" },
      { en: "Do you have a room available?", gr: "Έχετε διαθέσιμο δωμάτιο;", pr: "EH-kheh-teh dhee-ah-THEH-see-moh dhoh-MAH-tee-oh" },
      { en: "What time is check-out?", gr: "Τι ώρα είναι το check-out;", pr: "tee OH-rah EE-neh toh check-out" },
      { en: "Is breakfast included?", gr: "Περιλαμβάνεται πρωινό;", pr: "peh-ree-lam-VAH-neh-teh proh-ee-NOH" },
      { en: "The Wi-Fi password, please", gr: "Τον κωδικό Wi-Fi, παρακαλώ", pr: "tone koh-dhee-KOH" },
      { en: "Is there air conditioning?", gr: "Υπάρχει κλιματισμός;", pr: "ee-PAR-khee klee-mah-tees-MOS" }
    ]
  },
  {
    category: "Emergencies",
    phrases: [
      { en: "I'm lost", gr: "Έχω χαθεί", pr: "EH-khoh khah-THEE" },
      { en: "I lost my passport / bag", gr: "Έχασα το διαβατήριό μου / την τσάντα μου", pr: "EH-khah-sah toh dhee-ah-vah-TEE-ree-oh moo" },
      { en: "Call the police / a doctor", gr: "Καλέστε την αστυνομία / έναν γιατρό", pr: "kah-LES-teh teen ah-stee-noh-MEE-ah / EH-nan yah-TROH" },
      { en: "It's an emergency", gr: "Είναι επείγον", pr: "EE-neh eh-PEE-ghon" }
    ]
  },
  {
    category: "Dining – Seating & Ordering",
    phrases: [
      { en: "A table for two, please", gr: "Ένα τραπέζι για δύο, παρακαλώ", pr: "EH-nah trah-PEH-zee yah DHEE-oh" },
      { en: "Do you have an outdoor table?", gr: "Έχετε τραπέζι έξω;", pr: "EH-kheh-teh trah-PEH-zee EK-soh" },
      { en: "Is this table free?", gr: "Είναι ελεύθερο αυτό το τραπέζι;", pr: "EE-neh eh-LEF-theh-roh af-TOH toh trah-PEH-zee" },
      { en: "I'd like...", gr: "Θα ήθελα...", pr: "thah EE-theh-lah" },
      { en: "What do you recommend?", gr: "Τι προτείνετε;", pr: "tee proh-TEE-neh-teh" },
      { en: "What's the local specialty?", gr: "Ποια είναι η τοπική σπεσιαλιτέ;", pr: "pyah EE-neh ee toh-pee-KEE speh-see-ah-lee-TEH" },
      { en: "Not too spicy, please", gr: "Όχι πολύ πικάντικο, παρακαλώ", pr: "OH-hee poh-LEE pee-KAN-dee-koh" },
      { en: "Water (still / sparkling)", gr: "Νερό (χωρίς / με ανθρακικό)", pr: "neh-ROH (khoh-REES / meh an-thrah-kee-KOH)" },
      { en: "A glass of red / white wine", gr: "Ένα ποτήρι κόκκινο / λευκό κρασί", pr: "EH-nah poh-TEE-ree KOH-kee-noh / lef-KOH krah-SEE" },
      { en: "Some bread, please", gr: "Λίγο ψωμί, παρακαλώ", pr: "LEE-ghoh psoh-MEE" }
    ]
  },
  {
    category: "Dining – Dietary & Paying",
    phrases: [
      { en: "I'm allergic to...", gr: "Έχω αλλεργία σε...", pr: "EH-khoh ah-ler-YEE-ah seh" },
      { en: "Does this contain nuts / gluten / dairy?", gr: "Περιέχει ξηρούς καρπούς / γλουτένη / γαλακτοκομικά;", pr: "peh-ree-EH-khee ksee-ROOS kar-POOS / ghloo-TEH-nee / ghah-lak-toh-koh-mee-KAH" },
      { en: "No meat, please", gr: "Χωρίς κρέας, παρακαλώ", pr: "khoh-REES KREH-as" },
      { en: "It was delicious", gr: "Ήταν πεντανόστιμο", pr: "EE-tan pen-dah-NOS-tee-moh" },
      { en: "The bill, please", gr: "Τον λογαριασμό, παρακαλώ", pr: "tone loh-ghah-ree-as-MOH" },
      { en: "Do you take cards?", gr: "Δέχεστε κάρτες;", pr: "DHEH-kheh-steh KAR-tes" },
      { en: "Is service included?", gr: "Περιλαμβάνεται το φιλοδώρημα;", pr: "peh-ree-lam-VAH-neh-teh toh fee-loh-DHOH-ree-mah" }
    ]
  },
  {
    category: "Numbers",
    phrases: [
      { en: "1", gr: "ένα", pr: "EH-nah" },
      { en: "2", gr: "δύο", pr: "DHEE-oh" },
      { en: "3", gr: "τρία", pr: "TREE-ah" },
      { en: "4", gr: "τέσσερα", pr: "TEH-seh-rah" },
      { en: "5", gr: "πέντε", pr: "PEN-deh" },
      { en: "6", gr: "έξι", pr: "EK-see" },
      { en: "7", gr: "επτά / εφτά", pr: "ep-TAH" },
      { en: "8", gr: "οκτώ / οχτώ", pr: "ok-TOH" },
      { en: "9", gr: "εννέα / εννιά", pr: "eh-NEH-ah" },
      { en: "10", gr: "δέκα", pr: "DHEH-kah" },
      { en: "11–20", gr: "έντεκα … είκοσι", pr: "EN-deh-kah … EE-koh-see" },
      { en: "30 / 40 / 50 / 100", gr: "τριάντα / σαράντα / πενήντα / εκατό", pr: "tree-AN-dah / sah-RAN-dah / peh-NEEN-dah / eh-kah-TOH" }
    ]
  },
  {
    category: "Time & Days",
    phrases: [
      { en: "What time is it?", gr: "Τι ώρα είναι;", pr: "tee OH-rah EE-neh" },
      { en: "It's 3 o'clock", gr: "Είναι τρεις η ώρα", pr: "EE-neh trees ee OH-rah" },
      { en: "Half past...", gr: "...και μισή", pr: "keh mee-SEE" },
      { en: "Quarter past / to", gr: "...και τέταρτο / παρά τέταρτο", pr: "keh TEH-tar-toh / pah-RAH TEH-tar-toh" },
      { en: "Today / Tomorrow / Yesterday", gr: "Σήμερα / Αύριο / Χθες", pr: "SEE-meh-rah / AHV-ree-oh / khthes" },
      { en: "Tonight", gr: "Απόψε", pr: "ah-POP-seh" },
      { en: "Days of the week", gr: "Δευτέρα … Κυριακή", pr: "dhef-TEH-rah … kee-ree-ah-KEE" },
      { en: "What time do you open / close?", gr: "Τι ώρα ανοίγετε / κλείνετε;", pr: "tee OH-rah ah-NEE-yeh-teh / KLEE-neh-teh" },
      { en: "Table at 8 / book for 7:30", gr: "τραπέζι στις οκτώ / στις εφτά και μισή", pr: "stees ok-TOH / stees ep-TAH keh mee-SEE" }
    ]
  }
];

// ========== VOICE INPUT + TRANSLATE (Option B) ==========
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognitionSupported = !!SpeechRecognition;

let recognition = null;
let isListening = false;

function initVoiceInput() {
  const micBtn = document.getElementById("mic-btn");
  const statusEl = document.getElementById("voice-status");
  const resultBox = document.getElementById("voice-result");
  const englishHeard = document.getElementById("english-heard");
  const greekResult = document.getElementById("greek-result");
  const speakResultBtn = document.getElementById("speak-result-btn");
  const clearResultBtn = document.getElementById("clear-result-btn");

  if (!recognitionSupported) {
    statusEl.textContent = "Speech recognition not supported in this browser (try Chrome or Edge)";
    micBtn.disabled = true;
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  recognition.continuous = false;

  micBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      return;
    }
    startListening();
  });

  recognition.onstart = () => {
    isListening = true;
    micBtn.classList.add("listening");
    micBtn.textContent = "⏹️";
    statusEl.textContent = "Listening... speak now";
    resultBox.classList.remove("show");
  };

  recognition.onend = () => {
    isListening = false;
    micBtn.classList.remove("listening");
    micBtn.textContent = "🎤";
    if (!englishHeard.textContent) {
      statusEl.textContent = "Tap the mic and speak an English phrase";
    }
  };

  recognition.onerror = (e) => {
    console.warn("Recognition error:", e.error);
    statusEl.textContent = e.error === "no-speech" 
      ? "No speech detected. Try again." 
      : "Error: " + e.error;
    isListening = false;
    micBtn.classList.remove("listening");
    micBtn.textContent = "🎤";
  };

  recognition.onresult = async (event) => {
    const transcript = event.results[0][0].transcript.trim();
    statusEl.textContent = "Processing...";

    englishHeard.textContent = transcript;
    resultBox.classList.add("show");

    // 1. Try to match against existing phrases first (Option B)
    const match = findBestPhraseMatch(transcript);

    if (match) {
      greekResult.textContent = match.gr;
      statusEl.textContent = "Matched existing phrase ✓";
    } else {
      // 2. Fallback to MyMemory translation
      try {
        const translated = await translateWithMyMemory(transcript);
        greekResult.textContent = translated || "Translation failed";
        statusEl.textContent = "Translated with MyMemory";
      } catch (err) {
        console.error(err);
        greekResult.textContent = "Translation error";
        statusEl.textContent = "Could not translate. Check internet connection.";
      }
    }
  };

  // Speak the Greek result
  speakResultBtn.addEventListener("click", () => {
    const greek = greekResult.textContent;
    if (greek && greek !== "Translation failed" && greek !== "Translation error") {
      speakPhrase("", greek, speakResultBtn);
    }
  });

  clearResultBtn.addEventListener("click", () => {
    resultBox.classList.remove("show");
    englishHeard.textContent = "";
    greekResult.textContent = "";
    statusEl.textContent = "Tap the mic and speak an English phrase";
  });
}

function startListening() {
  try {
    recognition.start();
  } catch (e) {
    console.error(e);
  }
}

// Fuzzy match against existing phrases
function findBestPhraseMatch(spoken) {
  const spokenLower = spoken.toLowerCase().replace(/[?.!,]/g, "").trim();
  
  let bestMatch = null;
  let bestScore = 0;

  data.forEach(cat => {
    cat.phrases.forEach(p => {
      const enLower = p.en.toLowerCase().replace(/[?.!,]/g, "").trim();
      
      // Exact or contains match
      if (enLower === spokenLower || enLower.includes(spokenLower) || spokenLower.includes(enLower)) {
        const score = Math.min(enLower.length, spokenLower.length) / Math.max(enLower.length, spokenLower.length);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = p;
        }
      }
    });
  });

  // Only accept reasonably good matches
  return bestScore > 0.45 ? bestMatch : null;
}

// Free MyMemory translation (no API key needed)
async function translateWithMyMemory(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|el`;
  const res = await fetch(url);
  const data = await res.json();
  
  if (data.responseStatus === 200 && data.responseData) {
    return data.responseData.translatedText;
  }
  throw new Error("Translation failed");
}

// ========== STATE ==========
let activeCategory = "All";
let showFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem("greek-favorites") || "[]");
let speechRate = parseFloat(localStorage.getItem("greek-speech-rate")) || 0.9;
let voices = [];
let greekVoice = null;
const ttsSupported = "speechSynthesis" in window;

// ========== DOM ==========
const nav = document.getElementById("categories");
const main = document.getElementById("phrases");
const search = document.getElementById("search");
const themeToggle = document.getElementById("theme-toggle");
const favFilterBtn = document.getElementById("fav-filter");

// ========== THEME ==========
function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
  localStorage.setItem("greek-theme", theme);
}

const savedTheme = localStorage.getItem("greek-theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
});

// ========== FAVORITES ==========
function isFavorite(en) {
  return favorites.includes(en);
}

function toggleFavorite(en) {
  if (isFavorite(en)) {
    favorites = favorites.filter(f => f !== en);
  } else {
    favorites.push(en);
  }
  localStorage.setItem("greek-favorites", JSON.stringify(favorites));
  render();
}

favFilterBtn.addEventListener("click", () => {
  showFavoritesOnly = !showFavoritesOnly;
  favFilterBtn.classList.toggle("active", showFavoritesOnly);
  render();
});

// ========== COPY ==========
function copyPronunciation(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = "✓";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "📋";
      btn.classList.remove("copied");
    }, 1500);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    btn.textContent = "✓";
    setTimeout(() => btn.textContent = "📋", 1500);
  });
}

// ========== SPEECH SYNTHESIS ==========
function loadVoices() {
  voices = speechSynthesis.getVoices();

  greekVoice = voices.find(v => {
    const lang = (v.lang || "").replace("_", "-").toLowerCase();
    return lang === "el-gr" || lang === "el";
  }) || voices.find(v => {
    const lang = (v.lang || "").replace("_", "-").toLowerCase();
    return lang.startsWith("el");
  }) || null;
}

if (ttsSupported) {
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
  setTimeout(loadVoices, 250);
  setTimeout(loadVoices, 1000);
}

function speakPhrase(english, greek, btn) {
  if (!ttsSupported) {
    alert("Text-to-speech is not supported in this browser.\nPlease try Chrome, Edge, Safari or Firefox.");
    return;
  }

  speechSynthesis.cancel();
  loadVoices();

  const speakEnglishFirst = document.getElementById("en-gr-toggle")?.checked || false;

  function makeUtterance(text, lang, voice = null) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = speechRate;
    u.pitch = 1;
    u.volume = 1;
    if (voice) u.voice = voice;
    return u;
  }

  if (btn) {
    btn.textContent = "⏹️";
    btn.classList.add("speaking");
  }

  const finish = () => {
    if (btn) {
      btn.textContent = "🔊";
      btn.classList.remove("speaking");
    }
  };

  if (speakEnglishFirst && english) {
    // Speak English first, then Greek
    const enUtterance = makeUtterance(english, "en-US");

    enUtterance.onend = () => {
      setTimeout(() => {
        const grUtterance = makeUtterance(greek, "el-GR", greekVoice);
        grUtterance.onend = finish;
        grUtterance.onerror = (e) => {
          console.warn("Greek speech error:", e.error);
          finish();
        };
        speechSynthesis.speak(grUtterance);
      }, 350);
    };

    enUtterance.onerror = () => {
      // Fallback: just speak Greek
      const grUtterance = makeUtterance(greek, "el-GR", greekVoice);
      grUtterance.onend = finish;
      speechSynthesis.speak(grUtterance);
    };

    speechSynthesis.speak(enUtterance);
  } else {
    // Only Greek
    const grUtterance = makeUtterance(greek, "el-GR", greekVoice);
    grUtterance.onend = finish;
    grUtterance.onerror = (e) => {
      console.warn("Speech error:", e.error);
      finish();
      if (e.error === "language-unavailable" || e.error === "voice-unavailable") {
        alert("No Greek voice available on this device.");
      }
    };
    speechSynthesis.speak(grUtterance);
  }
}

// ========== RATE CONTROL + EN→GR TOGGLE ==========
function createRateControl() {
  const container = document.createElement("div");
  container.className = "rate-control";
  container.innerHTML = `
    <span>Speed</span>
    <input type="range" id="rate-slider" min="0.6" max="1.3" step="0.05" value="${speechRate}">
    <span class="rate-value" id="rate-value">${speechRate.toFixed(2)}×</span>
    
    <label class="en-gr-toggle" title="Speak English first, then Greek">
      <input type="checkbox" id="en-gr-toggle">
      <span>EN → GR</span>
    </label>
  `;

  const searchEl = document.getElementById("search");
  searchEl.parentNode.insertBefore(container, searchEl.nextSibling);

  // Rate slider
  const slider = document.getElementById("rate-slider");
  const valueLabel = document.getElementById("rate-value");
  slider.addEventListener("input", () => {
    speechRate = parseFloat(slider.value);
    valueLabel.textContent = speechRate.toFixed(2) + "×";
    localStorage.setItem("greek-speech-rate", speechRate);
  });

  // EN → GR toggle (saved)
  const enGrToggle = document.getElementById("en-gr-toggle");
  enGrToggle.checked = localStorage.getItem("greek-en-gr") === "true";

  enGrToggle.addEventListener("change", () => {
    localStorage.setItem("greek-en-gr", enGrToggle.checked);
  });
}

function showTtsStatus() {
  if (!ttsSupported) {
    const warn = document.createElement("div");
    warn.className = "tts-warning";
    warn.textContent = "Text-to-speech is not supported in this browser.";
    document.querySelector("header").appendChild(warn);
    return;
  }

  setTimeout(() => {
    loadVoices();
    if (!greekVoice) {
      const warn = document.createElement("div");
      warn.className = "tts-warning";
      warn.innerHTML = "⚠️ No Greek voice detected. Speech may not work well on this device.";
      document.querySelector("header").appendChild(warn);
    }
  }, 1200);
}

// ========== RENDER ==========
function renderNav() {
  nav.innerHTML = `<button data-cat="All" class="${activeCategory === "All" ? "active" : ""}">All</button>` +
    data.map(c =>
      `<button data-cat="${c.category}" class="${activeCategory === c.category ? "active" : ""}">${c.category}</button>`
    ).join("");

  nav.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderNav();
      render();
    });
  });
}

function render() {
  const query = search.value.toLowerCase().trim();
  main.innerHTML = "";

  data.forEach(cat => {
    if (activeCategory !== "All" && activeCategory !== cat.category) return;

    const filtered = cat.phrases.filter(p => {
      const matchesSearch = !query ||
        p.en.toLowerCase().includes(query) ||
        p.gr.toLowerCase().includes(query) ||
        p.pr.toLowerCase().includes(query);
      const matchesFav = !showFavoritesOnly || isFavorite(p.en);
      return matchesSearch && matchesFav;
    });

    if (filtered.length === 0) return;

    const section = document.createElement("section");
    section.className = "category";
    section.innerHTML = `<h2>${cat.category}</h2>`;

    filtered.forEach(p => {
      const div = document.createElement("div");
      div.className = "phrase";
      div.innerHTML = `
        <div class="phrase-content">
          <div class="english">${p.en}</div>
          <div class="greek">${p.gr}</div>
          <div class="pron">${p.pr}</div>
        </div>
        <div class="phrase-actions">
          <button class="fav-btn ${isFavorite(p.en) ? "favorited" : ""}" title="Toggle favorite" data-en="${p.en}">
            ${isFavorite(p.en) ? "★" : "☆"}
          </button>
          <button class="copy-btn" title="Copy pronunciation" data-pr="${p.pr}">📋</button>
          <button class="speak-btn" title="Speak" data-gr="${p.gr}" ${!ttsSupported ? "disabled" : ""}>🔊</button>
        </div>
      `;
      section.appendChild(div);
    });

    main.appendChild(section);
  });

  // Event listeners
  main.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(btn.dataset.en));
  });

  main.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => copyPronunciation(btn.dataset.pr, btn));
  });

  main.querySelectorAll(".speak-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("speaking")) {
        speechSynthesis.cancel();
        btn.textContent = "🔊";
        btn.classList.remove("speaking");
      } else {
        const card = btn.closest(".phrase");
        const english = card.querySelector(".english").textContent;
        const greek = btn.dataset.gr;
        speakPhrase(english, greek, btn);
      }
    });
  });

  if (main.children.length === 0) {
    main.innerHTML = `<p style="text-align:center;color:var(--muted);padding:2rem">
      ${showFavoritesOnly ? "No favorites yet. Tap ☆ on phrases you want to save." : "No phrases found"}
    </p>`;
  }
}

// ========== INIT ==========
search.addEventListener("input", render);
createRateControl();
showTtsStatus();
renderNav();
render();
initVoiceInput();
