import { useEffect, useState } from "react"
import { Button } from '../components/Button';
import { CheckCircle, Flame, TimerReset, Users } from "lucide-react"
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
    navigate("/downsell")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12 text-center space-y-6 border border-gray-200 dark:border-gray-800">
        <div className="flex justify-center items-center gap-2 text-red-600 text-sm font-semibold uppercase tracking-wide">
          <Flame className="w-5 h-5" />
          Upgrade exclusivo para clientes Kure
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Transforme sua jornada com <span className="text-red-500">6 meses de Kure</span> + Grupo VIP
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Continue sua transformação com sessões exclusivas, apoio diário e um presente secreto só para você.
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
              <p className="font-semibold">Plano Kure por 6 meses</p>
              <p className="text-sm">Continue com acesso total ao app com sessões noturnas todos os dias.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Grupo VIP no Telegram</p>
              <p className="text-sm">Suporte direto, conteúdos extras e novidades exclusivas para membros.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Sessão de Autoestima + Foco</p>
              <p className="text-sm">Trabalhe sua mente para acelerar os resultados e manter a disciplina.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Presente secreto</p>
              <p className="text-sm">Uma surpresa extra, só pra quem confia e continua com a gente.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold">Apenas R$ 49,90</p>
              <p className="text-sm line-through text-gray-400">De R$ 89,90 por tempo limitado</p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleAccept}
          className="w-full bg-red-500 hover:bg-red-600 text-white text-sm md:text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
        >
          SIM! Quero 6 meses de acesso + bônus agora 🚀
        </Button>

        <button
          onClick={handleDecline}
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline mt-2"
        >
          Não quero aproveitar essa chance única
        </button>

        {/* Prova social */}
        <div className="border-t pt-6 mt-4 text-left space-y-4">
          <h3 className="text-gray-900 dark:text-white text-lg font-semibold">Veja o que nossos usuários dizem:</h3>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>“Achei que seria só mais um app, mas realmente mudou minha mentalidade e meu corpo.” – <strong>Ana P.</strong></p>
            <p>“O grupo VIP é sensacional! Me ajudou a manter o foco e ter apoio real.” – <strong>João R.</strong></p>
            <p>“Não esperava tanto valor por tão pouco. Já recomendei pra 3 amigas.” – <strong>Camila S.</strong></p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs pt-2">
            <Users className="w-4 h-4" />
            Mais de 345.000 usuários felizes com Kure 💚
          </div>
        </div>

        <div className="text-xs text-gray-400 pt-6">
          Garantia incondicional de reembolso em 7 dias. Sem riscos.
        </div>
      </div>
    </div>
  )
}
