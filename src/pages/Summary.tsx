import { motion } from 'framer-motion';
import { Brain, Check } from 'lucide-react';
import { useQuizStore } from '../store/quiz';

export default function Summary() {
  const { weight, targetWeight, answers } = useQuizStore();
  const weightLoss = weight && targetWeight ? weight - targetWeight : 0;

  return (
    <div className="min-h-screen bg-[#0A061E] text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Seu Programa Personalizado</h1>
            <p className="text-gray-300">
              Baseado em suas respostas, criamos um programa específico para você
            </p>
          </div>

          {/* Weight Loss Goal */}
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Sua Meta de Perda de Peso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <p className="text-gray-400">Peso Atual</p>
                <p className="text-3xl font-bold mt-2">{weight} kg</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl">
                <p className="text-gray-400">Meta</p>
                <p className="text-3xl font-bold mt-2">{targetWeight} kg</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl">
                <p className="text-gray-400">Perda Total</p>
                <p className="text-3xl font-bold mt-2">{weightLoss} kg</p>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Seu Programa Inclui:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Sessões de hipnose personalizadas',
                'Monitoramento de progresso diário',
                'Exercícios de mindfulness',
                'Suporte via chat 24/7',
                'Comunidade de apoio',
                'Relatórios semanais'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Cronograma do Programa</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span>1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Semana 1-2</h3>
                  <p className="text-gray-400">Fundação e Adaptação</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                  <span>2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Semana 3-4</h3>
                  <p className="text-gray-400">Transformação de Hábitos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <span>3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Semana 5-6</h3>
                  <p className="text-gray-400">Consolidação e Resultados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">Histórias de Sucesso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800/30 rounded-lg">
                <p className="text-sm italic mb-4">
                  "Perdi 15kg em 3 meses com o programa Kure"
                </p>
                <div className="flex justify-center">
                  {'★'.repeat(5)}
                </div>
              </div>
              <div className="p-6 bg-gray-800/30 rounded-lg">
                <p className="text-sm italic mb-4">
                  "Finalmente encontrei algo que realmente funciona"
                </p>
                <div className="flex justify-center">
                  {'★'.repeat(5)}
                </div>
              </div>
              <div className="p-6 bg-gray-800/30 rounded-lg">
                <p className="text-sm italic mb-4">
                  "Mudou completamente minha relação com a comida"
                </p>
                <div className="flex justify-center">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}