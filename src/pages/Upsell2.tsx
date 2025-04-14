import { useEffect, useState } from "react"
import { Button } from '../components/Button';
import { CheckCircle, Flame, TimerReset, Users, Star, Gift } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function UpsellPlano6Meses() {
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
    navigate("/downsell1")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex flex-col items-center justify-start px-4 py-6">
      {/* Barra de progresso */}
      <div className="w-full max-w-2xl mb-4">
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-red-500 h-2 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">Passo 2 de 2 – Upgrade final</p>
      </div>

      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-6 md:p-10 text-center space-y-6 border border-gray-200 dark:border-gray-800">
        <div className="flex justify-center items-center gap-2 text-red-600 text-sm font-semibold uppercase tracking-wide">
          <Flame className="w-5 h-5" />
          Oferta Final Exclusiva
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Prolongue seus resultados com <span className="text-red-500">6 meses + VIP</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Imagine onde você pode estar em 6 meses com sessões contínuas, apoio VIP no Telegram e bônus que transformam sua mente. Só agora: <strong>R$ 49,90</strong>.
        </p>

        <div className="text-center bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 font-semibold px-4 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
          <TimerReset className="w-5 h-5" />
          Oferta expira em: <span className="ml-1 font-bold">{formatTime(timeLeft)}</span>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 md:p-6 space-y-4 text-left text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">6 meses de acesso ao Kure</p>
              <p className="text-sm">Sessões noturnas e personalizadas para resultados consistentes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Gift className="text-yellow-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Presente Surpresa Exclusivo 🎁</p>
              <p className="text-sm">Revelado após a ativação. Só agora!</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="text-blue-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Acesso ao Grupo VIP (R$ 199 incluso)</p>
              <p className="text-sm">Motivação, suporte e conteúdo exclusivo no Telegram.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Sessão de Autoestima (R$ 59 incluso)</p>
              <p className="text-sm">Fortaleça sua autoconfiança e amor próprio com hipnose guiada.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">1 nova sessão mensal (R$ 297 total)</p>
              <p className="text-sm">Todo mês, uma nova sessão é desbloqueada.</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-xl text-sm text-left space-y-1 border border-red-200 dark:border-red-700">
          <p>❌ Ficar sem o grupo VIP de apoio e motivação</p>
          <p>❌ Não receber novas sessões mensais</p>
          <p>❌ Perder o presente exclusivo disponível só agora</p>
        </div>

        <Button
          onClick={handleAccept}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-sm md:text-lg font-semibold py-4 rounded-xl shadow-xl transition-all animate-pulse"
        >
          SIM! Quero garantir meus 6 meses + bônus 🔒
        </Button>

        <button
          onClick={handleDecline}
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline mt-2"
        >
          Não quero garantir meus resultados a longo prazo
        </button>

        <div className="text-xs text-gray-400 pt-6">
          Garantia de reembolso incondicional em até 7 dias. Zero risco.
        </div>

        {/* Depoimento */}
        <div className="mt-6 text-left">
          <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">O que dizem nossos usuários:</h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>“Entrei no grupo VIP e as mensagens me mantêm firme todos os dias. Já eliminei 8kg em 2 meses.” <span className="font-semibold">— Juliana, 34</span></p>
            <p>“Essa sessão da autoestima mexeu comigo de um jeito muito positivo. Valeu cada centavo.” <span className="font-semibold">— Camila, 28</span></p>
            <p>“As sessões novas todo mês me mantêm motivada e conectada com meu objetivo.” <span className="font-semibold">— Patricia, 41</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}
