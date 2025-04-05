import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Star, Lock as LockOpen } from 'lucide-react';
import { useQuizStore } from '../store/quiz';
import QuizProgress from '../components/QuizProgress';
import QuizOption from '../components/QuizOption';
import InfoPage from '../components/InfoPage';
import NumberInput from '../components/NumberInput';
import SuccessScreen from '../components/SuccessScreen';
import InfoPageWithIllustration from '../components/InfoPageWithIllustration';

function LoadingScreen({ messages, onLoadingComplete }: { messages: string[]; onLoadingComplete: () => void }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    // Set a timeout to trigger the completion callback
    const loadingTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 8000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(loadingTimeout);
    };
  }, [messages.length, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0A061E] text-white flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-3xl font-semibold text-center mb-12">
        Tudo pronto! Aguarde um momento enquanto processamos seus dados...
      </h1>

      <div className="w-full max-w-md mb-12">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={currentMessageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-lg text-gray-300 text-center mb-16"
        >
          {messages[currentMessageIndex]}
        </motion.p>
      </AnimatePresence>

      <div className="bg-[#1A1130] rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        <p className="text-center text-gray-200 mb-4">
          "É a solução mais fácil para perda de peso que já experimentei. As sessões noturnas melhoraram muito a qualidade do meu sono e reduziram significativamente meu estresse."
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-current"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
          <span>Usuário verificado</span>
        </div>
      </div>
    </motion.div>
  );
}

function EmailCollection({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      onSubmit(email);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0A061E] text-white flex flex-col items-center justify-center p-4"
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Seu programa está pronto.
          </h1>
          <p className="text-gray-300">
            Desbloqueie o acesso ao programa personalizado inserindo seu email.
            Junte-se à comunidade Kure que atingiu seu peso ideal, com uma taxa de sucesso superior a 90%.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1A1130] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="h-4 w-4 mt-1 rounded border-gray-600 text-purple-500 focus:ring-purple-500 bg-[#1A1130]"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label className="ml-2 text-sm text-gray-300">
              Eu gostaria de receber um email sobre meu relatório de dados corporais e concordo com a{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Política de Privacidade
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={!email || !agreed}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LockOpen className="w-5 h-5" />
            <span>Desbloquear meu programa</span>
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [processingAnswers, setProcessingAnswers] = useState(false);
  const [showEmailCollection, setShowEmailCollection] = useState(false);

  const {
    setAnswer,
    setHeight,
    setWeight,
    setTargetWeight,
    setAge,
    weight: currentWeight,
    setEmail
  } = useQuizStore();

  const handleLoadingComplete = () => {
    setProcessingAnswers(false);
    setShowEmailCollection(true);
  };

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <SuccessScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      {processingAnswers && (
        <LoadingScreen
          messages={[
            "Analisando suas respostas...",
            "Calculando sua previsão de perda de peso...",
            "Criando seu programa personalizado de hipnose..."
          ]}
          onLoadingComplete={handleLoadingComplete}
        />
      )}
      {showEmailCollection && <EmailCollection onSubmit={handleEmailSubmit} />}
      {!processingAnswers && !showEmailCollection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-[#0A061E] text-white flex flex-col items-center justify-center p-4"
        >
          <QuizProgress currentStep={currentQuestion} totalSteps={5} />
          <div className="max-w-md w-full space-y-8">
            <InfoPage />
            <QuizOption />
            <NumberInput />
            <InfoPageWithIllustration />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
