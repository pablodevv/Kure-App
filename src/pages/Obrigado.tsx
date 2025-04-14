import { Smile, CheckCircle, Rocket } from "lucide-react"

export default function AgradecimentoFinal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 md:p-12 text-center space-y-6 border border-gray-200 dark:border-gray-800">

        <div className="flex justify-center items-center gap-2 text-green-600 text-sm font-semibold uppercase tracking-wide">
          <CheckCircle className="w-5 h-5" />
          Compra Confirmada
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Parabéns! Sua jornada continua 💫
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Tudo certo com sua sessão. Agora é hora de focar em você, cuidar da sua mente e transformar seus resultados com a Kura.
        </p>

        <a
          href="https://hipnose-kura.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-lg transition-all"
        >
          <Rocket className="mr-2 w-5 h-5" />
          Acessar o App Kura
        </a>

        <div className="text-sm text-gray-400 pt-6">
          Dica: você também receberá um e-mail com o link de acesso. Salve nos favoritos 💚
        </div>

        <div className="text-xs text-gray-500">
          Suporte: suporte@kura.app
        </div>
      </div>
    </div>
  )
}
