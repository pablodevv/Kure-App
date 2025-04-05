import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface InfoPageWithIllustrationProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  image: string;
  rating?: number;
  onContinue: () => void;
  showRating?: boolean;
}

export default function InfoPageWithIllustration({
  title,
  subtitle,
  children,
  image,
  rating = 4.5,
  onContinue,
  showRating = false,
}: InfoPageWithIllustrationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto p-8"
    >
      <div className="flex-1">
        <img
          src={image}
          alt=""
          className="w-full max-w-md mx-auto rounded-lg shadow-xl mb-8 md:mb-0"
          style={{ marginBottom: '0' }}
        />
      </div>

      <div className="flex-1 space-y-8">
        {showRating && (
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(rating) ? 'fill-current' : 'stroke-current'}`}
                />
              ))}
            </div>
            <span className="text-gray-300">{rating} de 5 usuários recomendam o Kure</span>
          </div>
        )}

        <h2 className="text-3xl font-semibold">{title}</h2>
        {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}

        <div className="space-y-4 text-gray-300">
          {children}
        </div>

        <button
          onClick={onContinue}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500
                           hover:opacity-90 transition-opacity text-white font-medium"
        >
          Entendi
        </button>
      </div>

      {/* Adicionando a div com o botão e a barra de progresso */}
      <div className="flex items-center gap-4 mb-12" style={{ marginBottom: '0' }}>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left w-6 h-6"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <div className="w-full bg-gray-800 h-1 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: '15%' }}
          ></div>
        </div>
        <span className="text-gray-400 min-w-[4rem]">3 de 20</span>
      </div>
    </motion.div>
  );
}
