import { useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { useQuizStore } from '../store/quiz';

export default function Home() {
  const navigate = useNavigate();
  const setGender = useQuizStore((state) => state.setGender);

  const handleGenderSelect = (gender: string) => {
    setGender(gender);
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-[#0A061E] text-white flex flex-col items-center">
      <div className="w-full max-w-4xl px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-semibold">kure</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&q=80"
            alt="Brain with headphones"
            className="w-48 h-48 object-cover rounded-full mb-8"
          />

          <h1 className="text-4xl font-semibold mb-4">
            Hipnose para Perda de Peso
          </h1>
          <p className="text-gray-400 mb-8">
            De acordo com idade e gênero
          </p>

          <div className="flex flex-col gap-4 w-full max-w-md">
            <p className="text-lg mb-4">Comece selecionando seu gênero:</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleGenderSelect('male')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
              >
                Masculino
              </button>
              <button
                onClick={() => handleGenderSelect('female')}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
              >
                Feminino
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 border border-gray-800 rounded-lg">
              <p className="text-sm italic mb-4">
                "71% mais peso perdido com hipnose"
              </p>
              <img src="/mnt-logo.png" alt="MNT Logo" className="h-8" />
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <p className="text-sm italic mb-4">
                "A hipnoterapia oferece vantagem sobre outros métodos de perda de peso"
              </p>
              <img src="/healthline-logo.png" alt="Healthline Logo" className="h-8" />
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <p className="text-sm italic mb-4">
                "A hipnoterapia tem sido um segredo bem guardado para perda de peso"
              </p>
              <img src="/oprah-logo.png" alt="Oprah Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-gray-800 mt-16 py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            <span>kure</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Avaliações</a>
            <a href="#" className="hover:text-white">Gerenciar Assinatura</a>
            <a href="#" className="hover:text-white">Contato</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos e Condições</a>
          </div>
        </div>
      </footer>
    </div>
  );
}