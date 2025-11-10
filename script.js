/* script.js
   - Genera toda la UI en JS.
   - Guarda preguntas como objetos con texto + opciones (texto+score).
   - Muestra progreso, calcula puntaje, muestra resultado con copy/share.
*/

const app = document.getElementById('app');

/* ---------- Preguntas y opciones (sencillo y divertido) ---------- */
const questions = [
  {
    q: "¿Qué harías si ves un rayo de sol perfecto en el suelo?",
    opts: [
      { t: "Me tiro ahí y me tomo una siesta", s: 10 },
      { t: "Lo ignoro y sigo mi camino", s: 3 },
      { t: "Cazo el rayo y me hago el misterioso", s: 7 },
      { t: "Marco el lugar para volver luego", s: 6 }
    ]
  },
  {
    q: "¿Tu reacción ante una caja vacía?",
    opts: [
      { t: "Entrar, dormir y reclamarla como mía", s: 10 },
      { t: "Mirarla por 5 segundos y seguir", s: 4 },
      { t: "Construir una fortaleza imaginaria", s: 8 },
      { t: "Meditar frente a ella", s: 6 }
    ]
  },
  {
    q: "¿Qué tan independiente eres?",
    opts: [
      { t: "Hago lo que quiero, cuándo quiero", s: 10 },
      { t: "Dependo de snacks y Wi-Fi", s: 4 },
      { t: "Me adapto y sobrevivo", s: 7 },
      { t: "Necesito compañía para todo", s: 2 }
    ]
  },
  {
    q: "¿Cómo caminas por la casa a las 3 AM?",
    opts: [
      { t: "Como un ninja sigiloso", s: 10 },
      { t: "Pisando fuerte por accidente", s: 3 },
      { t: "Con actitud de dueño del lugar", s: 8 },
      { t: "Arrastrándome en silencio", s: 6 }
    ]
  },
  {
    q: "¿Tu relación con el agua?",
    opts: [
      { t: "Evito, me mojo solo si es necesario", s: 8 },
      { t: "Me encanta un buen baño", s: 4 },
      { t: "Curioso: la observo, no la toco", s: 7 },
      { t: "Me lanzo y rompo todo", s: 2 }
    ]
  },
  {
    q: "¿En una fiesta, tú eres:",
    opts: [
      { t: "La figura misteriosa en la esquina", s: 9 },
      { t: "El rey/reina de la pista", s: 7 },
      { t: "Me escondo detrás de una maceta", s: 5 },
      { t: "Acompaño a quien quiera hablar conmigo", s: 6 }
    ]
  },
  {
    q: "¿Cuánto valoras tu siesta diaria?",
    opts: [
      { t: "Sagrada. No negociar.", s: 10 },
      { t: "Depende del día", s: 6 },
      { t: "Prefiero cafeína", s: 3 },
      { t: "No necesito siesta", s: 1 }
    ]
  }
];

/* ---------- Resultado según puntaje ---------- */
function getResult(total, max) {
  const pct = Math.round((total / max) * 100);

  if (pct >= 90)
    return {
      title: "Gato Supremo del Multiverso",
      emoji: "🌌😼",
      desc: `Nivel ${pct}% — Has alcanzado el máximo nivel felino. Tu poder: derribar vasos solo con la mirada.`,
    };

  if (pct >= 75)
    return {
      title: "Gato Dramático",
      emoji: "🎭🐱",
      desc: `Nivel ${pct}% — Duermes 20 horas, exiges comida a gritos y miras con desprecio a los humanos. Bravísimo.`,
    };

  if (pct >= 60)
    return {
      title: "Gato Hacker",
      emoji: "💻🐾",
      desc: `Nivel ${pct}% — Misterioso, nocturno y probablemente sabes abrir la nevera. Cuidado, el Wi-Fi es tu territorio.`,
    };

  if (pct >= 45)
    return {
      title: "Gato Curioso",
      emoji: "🕵️‍♂️😺",
      desc: `Nivel ${pct}% — Metes la cabeza en todas las bolsas y siempre terminas atrapado en una cortina.`,
    };

  if (pct >= 30)
    return {
      title: "Gato Flojito",
      emoji: "😴🐈",
      desc: `Nivel ${pct}% — Tienes espíritu gatuno, pero te gana la pereza. Un bostezo más y listo.`,
    };

  if (pct >= 10)
    return {
      title: "Gato Confundido",
      emoji: "🤔🐱",
      desc: `Nivel ${pct}% — No sabes si eres un gato, un perro o una croqueta. Pero hey, te ves adorable igual.`,
    };

  return {
    title: "Gato en Entrenamiento",
    emoji: "🐾🥺",
    desc: `Nivel ${pct}% — Apenas estás aprendiendo a maullar. Sigue practicando, pequeño felino.`,
  };
}


/* ---------- Construcción de UI ---------- */
function buildUI() {
  app.innerHTML = ''; // limpio
  const maxScore = questions.reduce((acc,q)=>acc + Math.max(...q.opts.map(o=>o.s)), 0);

  const container = el('div','app');
  const mainCol = el('div','main');
  const sideCol = el('div','side');

  // Header
  const headerCard = el('div','card header');
  headerCard.innerHTML = `
    <div style="display:flex; gap:12px; align-items:center">
      <div class="logo">G4</div>
      <div>
        <div class="title">¿Qué tan gato eres?</div>
        <div class="subtitle">Responde rápido — te diré cuán felino eres.</div>
      </div>
    </div>
  `;

  mainCol.appendChild(headerCard);

  // Question card dynamic
  const qCard = el('div','card');
  const progWrap = el('div','progress-wrap');
  const progress = el('div','progress');
  const progBar = el('i');
  progress.appendChild(progBar);
  progWrap.appendChild(progress);
  progWrap.appendChild(el('div','small','0 / '+questions.length));

  qCard.appendChild(progWrap);

  const questionTitle = el('div','question');
  qCard.appendChild(questionTitle);
  const optsDiv = el('div','options');
  qCard.appendChild(optsDiv);

  // Controls
  const controls = el('div','controls');
  const skipBtn = el('button','btn btn-ghost','Saltar');
  const nextBtn = el('button','btn btn-primary','Siguiente');
  controls.appendChild(skipBtn);
  controls.appendChild(nextBtn);
  qCard.appendChild(controls);

  mainCol.appendChild(qCard);

  // Side preview
  const preview = el('div','card preview center');
  const previewScore = el('div','score','0');
  const previewDesc = el('div','desc','Responde para ver tu nivel felino.');
  preview.appendChild(previewScore);
  preview.appendChild(previewDesc);
  sideCol.appendChild(preview);

  // Result small box
  const resultBox = el('div','card center small');
  resultBox.innerHTML = `<div class="result-title">Progreso</div><div class="result-desc">Completa el test para obtener un título felino.</div>`;
  sideCol.appendChild(resultBox);

  // Footer
  const copyright = el('div','copyright','Hecho con 🐾 — versión minimal');

  // append to main app
  container.appendChild(mainCol);
  container.appendChild(sideCol);
  app.appendChild(container);
  app.appendChild(copyright);

  /* ---------- Estado y lógica ---------- */
  let index = 0;
  let total = 0;
  const answers = new Array(questions.length).fill(null);

  function renderQuestion(i) {
    const q = questions[i];
    questionTitle.textContent = `Pregunta ${i+1}: ${q.q}`;
    optsDiv.innerHTML = '';

    q.opts.forEach((opt, j) => {
      const btn = el('button','option-btn');
      btn.innerHTML = `<div class="badge">${j+1}</div><div style="flex:1">${opt.t}</div>`;
      btn.onclick = () => {
        // marcar selección
        answers[i] = opt.s;
        // visual select
        Array.from(optsDiv.children).forEach(c => c.classList.remove('selected'));
        btn.classList.add('selected');
        // auto next (suave)
        setTimeout(()=> {
          if (index < questions.length - 1) goTo(index + 1);
          else showResult();
        }, 220);
        updatePreview();
      };
      if (answers[i] === opt.s) btn.classList.add('selected');
      optsDiv.appendChild(btn);
    });

    // progress update
    progBar.style.width = `${Math.round(((i)/questions.length)*100)}%`;
    progWrap.querySelector('.small').textContent = `${i+1} / ${questions.length}`;
  }

  function goTo(i) {
    index = i;
    renderQuestion(index);
  }

  function updatePreview(){
    total = answers.filter(Boolean).reduce((a,b)=>a+b,0);
    const res = getResult(total, maxScore);
    previewScore.textContent = total ? total : '0';
    previewDesc.textContent = total ? `${res.title} — ${res.desc}` : 'Responde para ver tu nivel felino.';
    // update progress bar percent full
    const filled = answers.filter(Boolean).length;
    progBar.style.width = `${Math.round((filled/questions.length)*100)}%`;
  }

  function showResult(){
    total = answers.filter(Boolean).reduce((a,b)=>a+b,0);
    const res = getResult(total, maxScore);
    // Replace main area with final result
    mainCol.innerHTML = '';
    const finalCard = el('div','card final center');
    finalCard.innerHTML = `
      <div class="emoji">${res.emoji}</div>
      <div class="title">${res.title}</div>
      <div class="explain">${res.desc}</div>
    `;
    const scoreLine = el('div','small', `Puntaje: ${total} / ${maxScore}`);
    finalCard.appendChild(scoreLine);

    const ctrl = el('div','controls');
    const restart = el('button','btn btn-ghost','Repetir');
    const copyBtn = el('button','btn btn-primary','Copiar resultado');
    ctrl.appendChild(restart);
    ctrl.appendChild(copyBtn);
    finalCard.appendChild(ctrl);

    mainCol.appendChild(finalCard);

    restart.onclick = () => {
      // reset state and rebuild
      answers.fill(null);
      total = 0;
      buildUI();
    };

    copyBtn.onclick = async () => {
      const text = `Mi resultado: ${res.title} — ${res.desc} (puntaje ${total}/${maxScore})`;
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copiado ✔';
        setTimeout(()=> copyBtn.textContent = 'Copiar resultado', 1400);
      } catch {
        alert('No se pudo copiar (prueba desde navegador moderno).');
      }
    };
  }

  // skip and next behavior
  skipBtn.onclick = () => {
    if (index < questions.length - 1) goTo(index + 1);
  };
  nextBtn.onclick = () => {
    if (index < questions.length - 1) goTo(index + 1);
    else showResult();
  };

  // initial render
  renderQuestion(0);
  updatePreview();
}

/* ---------- helpers ---------- */
function el(tag='div', cls='', text=''){
  const node = document.createElement(tag);
  if(cls) node.className = cls;
  if(text) node.textContent = text;
  return node;
}

/* ---------- start ---------- */
buildUI();