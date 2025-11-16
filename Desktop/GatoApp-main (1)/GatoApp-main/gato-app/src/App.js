import React, { useState } from 'react'

const questions = [
  {
    question: "¿Qué haces cuando te despiertas?",
    options: ["Busco comida 😋", "Duermo otra vez 💤", "Miro por la ventana 👀", "Persigo un rayo de luz 💡"],
    points: [3, 2, 1, 4],
  },
  {
    question: "Tu lugar favorito en casa es...",
    options: ["Encima del teclado 💻", "En el sofá 🛋️", "Dentro de una caja 📦", "Donde me dé el sol ☀️"],
    points: [4, 2, 3, 1],
  },
  {
    question: "Si alguien te llama, tú...",
    options: ["Ignoro 😼", "Respondo si quiero 😹", "Voy feliz 😺", "Corro porque creo que hay comida 🍗"],
    points: [4, 3, 2, 1],
  },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [total, setTotal] = useState(0)
  const [finished, setFinished] = useState(false)

  const handleAnswer = (points) => {
    setTotal(total + points)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    setCurrent(0)
    setTotal(0)
    setFinished(false)
  }

  const getResult = (total) => {
    const pct = Math.round((total / (questions.length * 4)) * 100)
    if (pct >= 90)
      return { title: "🌌😼 Gato Supremo del Multiverso", desc: "Derribas vasos solo con la mirada." }
    if (pct >= 75)
      return { title: "🎭🐱 Gato Dramático", desc: "Duermes 20 horas y exiges comida a gritos." }
    if (pct >= 60)
      return { title: "💻🐾 Gato Hacker", desc: "Probablemente sabes abrir la nevera." }
    if (pct >= 45)
      return { title: "🕵️‍♂️😺 Gato Curioso", desc: "Metes la cabeza en todas las bolsas." }
    if (pct >= 30)
      return { title: "😴🐈 Gato Flojito", desc: "Te gana la pereza, pero te ves tierno." }
    if (pct >= 10)
      return { title: "🤔🐱 Gato Confundido", desc: "No sabes si eres gato, perro o croqueta." }
    return { title: "🐾🥺 Gato en Entrenamiento", desc: "Apenas estás aprendiendo a maullar." }
  }

  if (finished) {
    const result = getResult(total)
    return React.createElement('div', { className: 'contenedor' },
      React.createElement('h2', null, result.title),
      React.createElement('p', null, result.desc),
      React.createElement('button', { onClick: restart }, 'Reintentar 🌀')
    )
  }

  const q = questions[current]
  return React.createElement('div', { className: 'contenedor' },
    React.createElement('h2', { className: 'titulo' }, q.question),
    React.createElement('div', { className: 'botones' },
      q.options.map((opt, i) =>
        React.createElement('button', {
          key: i,
          onClick: () => handleAnswer(q.points[i])
        }, opt)
      )
    )
  )
}
