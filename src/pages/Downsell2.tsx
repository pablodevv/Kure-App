import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Heart, Brain, TimerReset, CheckCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function DownsellSessaoUnica() {
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutos
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  const handleAccept = () => {
    window.location.href = "https://pay.kirvano.com/301f8398-6094-4973-9391-10e329907aba"
  }

  const handleDecline = () => {
    navigate("/Obrigado") // pode ser a tela final do funil
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12 text-center space-y-6 border border-gray-200 dark:border-gray-800">

        <div className="flex justify-center items-center gap-2 text-indigo-600 text-sm font-semibold uppercase tracking-wide">
          <Brain className="w-5 h-5" />
          Oferta Final Especial
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
          Se só <span className="text-indigo-500">uma única coisa</span> pudesse te ajudar agora…
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Escolha uma sessão única que pode transformar seu momento atual.
        </p>

        <div className="text-center bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 font-semibold px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
          <TimerReset className="w-5 h-5" />
          Oferta válida pelos próximos: <span className="ml-1 font-bold">{formatTime(timeLeft)}</span>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 md:p-6 space-y-4 text-left text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Sessão de Autoestima</p>
              <p className="text-sm">Fortaleça sua confiança e a imagem que você tem de si.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">OU Sessão de Ansiedade</p>
              <p className="text-sm">Acalme sua mente e volte ao controle mesmo em momentos difíceis.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Só R$ 9,90</p>
              <p className="text-sm line-through text-gray-400">De R$ 29,90 por tempo limitado</p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleAccept}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
        >
          SIM! Quero essa sessão por R$ 9,90 💜
        </Button>

        <button
          onClick={handleDecline}
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline mt-2"
        >
          Não preciso de nenhuma ajuda extra agora
        </button>

        <div className="text-xs text-gray-400 pt-6">
          Garantia total de 7 dias. Risco zero. A escolha é sua 💡
        </div>
      </div>
    </div>
  )
}
