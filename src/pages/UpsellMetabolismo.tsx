import { useEffect, useState } from "react"
import { Button } from '../components/Button';
import { CheckCircle, Flame, TimerReset } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function UpsellMetabolismo() {
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
    window.location.href = "https://kirvano.com"
  }

  const handleDecline = () => {
    navigate("/upsell-2")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12 text-center space-y-6 border border-gray-200 dark:border-gray-800">
        <div className="flex justify-center items-center gap-2 text-red-600 text-sm font-semibold uppercase tracking-wide">
          <Flame className="w-5 h-5" />
          Oferta Secreta Exclusiva
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Ative seu Metabolismo com <span className="text-red-500">Hipnose Profunda</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Descubra uma sessão secreta de hipnose que ativa seu metabolismo para resultados mais rápidos. 
          Inclui <strong>sessão bônus</strong> para controle de compulsão.
        </p>

        <div className="text-center bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 font-semibold px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
          <TimerReset className="w-5 h-5" />
          Oferta disponível por tempo limitado:{" "}
          <span className="ml-1 font-bold">{formatTime(timeLeft)}</span>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 md:p-6 space-y-4 text-left text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Sessão Premium de Hipnose Metabólica</p>
              <p className="text-sm">Crie uma ativação profunda no seu metabolismo enquanto dorme.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Sessão Bônus Anti-Compulsão</p>
              <p className="text-sm">Controle emocional para evitar recaídas e ataques de fome.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Apenas R$ 17,90</p>
              <p className="text-sm line-through text-gray-400">De R$ 39,90 por tempo limitado</p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleAccept}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
        >
          SIM! Quero ativar meu metabolismo agora 🔥
        </Button>

        <button
          onClick={handleDecline}
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline mt-2"
        >
          Não quero acelerar meus resultados agora
        </button>

        <div className="text-xs text-gray-400 pt-6">
          Garantia incondicional de reembolso em 7 dias. Sem riscos.
        </div>
      </div>
    </div>
  )
}
