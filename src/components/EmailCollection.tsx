import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

interface EmailCollectionProps {
  onSubmit: (email: string) => void;
}

export default function EmailCollection({ onSubmit }: EmailCollectionProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, insira seu email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, insira um email válido');
      return;
    }
    setError('');
    onSubmit(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto text-center space-y-6"
    >
      <h2 className="text-3xl font-semibold mb-4">
        Seu programa está pronto.
      </h2>
      <p className="text-gray-300 mb-8">
        Desbloqueie acesso ao seu programa personalizado inserindo seu email.
        Junte-se à comunidade Kure que atingiu seu peso ideal, com taxa de sucesso superior a 90%.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            className="w-full p-4 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 
                     border border-gray-700 focus:border-purple-500 focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 
                   hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Lock className="w-5 h-5" />
          <span>Desbloquear meu programa</span>
        </button>
      </form>

      <div className="mt-8 p-6 bg-gray-800/30 rounded-lg">
        <div className="flex justify-center mb-4">
          <div className="flex">
            {'★'.repeat(4)}{'☆'.repeat(1)}
          </div>
        </div>
        <p className="italic text-gray-300">
          "É a solução de perda de peso mais fácil que já experimentei. As sessões noturnas melhoraram muito a qualidade do meu sono e reduziram significativamente meu estresse."
        </p>
      </div>
    </motion.div>
  );
}