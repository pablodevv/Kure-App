import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quiz';

const data = [
  { week: 'Start', kure: 79, other: 79 },
  { week: 'Week 2', kure: 76, other: 77 },
  { week: 'Week 4', kure: 74, other: 78 },
  { week: 'Week 8', kure: 72, other: 77 },
];

const weeklyPlan = [
  {
    week: 'Semana 1',
    title: 'Iniciando transformação profunda da mente',
    description: 'Mudando a percepção'
  },
  {
    week: 'Semana 2',
    title: 'Bloqueando desejos por comida',
    description: 'Controle de compulsão'
  },
  {
    week: 'Semana 3',
    title: 'Melhorando hábitos alimentares',
    description: 'Novos padrões'
  },
  {
    week: 'Semana 4',
    title: 'Removendo crenças internas tóxicas',
    description: 'Libertação mental'
  },
  {
    week: 'Semana 5 em diante',
    title: 'Reforçando a transformação mental',
    description: 'Resultados duradouros'
  }
];

const testimonials = [
  {
    date: '2024 Jun 27',
    rating: 5,
    text: 'O Kure transformou minha nutrição de uma maneira que eu não poderia imaginar. Recomendo para qualquer pessoa que busca um "hack" efetivo e duradouro para perda de peso.',
    author: 'João K.',
    verified: true
  },
  {
    date: '2024 Jun 24',
    rating: 5,
    text: 'Super satisfeita. Me livrei do vício em açúcar. As sessões antes de dormir se tornaram meu ritual noturno de relaxamento e pensamento positivo.',
    author: 'Laura S.',
    verified: true
  },
  {
    date: '2024 Jun 19',
    rating: 5,
    text: 'Experiência fenomenal. A hipnose do Kure desbloqueou uma nova versão de mim. Manter uma nutrição saudável agora é natural.',
    author: 'Elizabeth D.',
    verified: true
  }
];

export default function Summary() {
  const navigate = useNavigate();
  const { weight, targetWeight } = useQuizStore();

  return (
    <div className="min-h-screen bg-[#0A061E] text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Com base em suas respostas,<br />
              você pode alcançar <span className="text-purple-400">85% do<br />
              seu objetivo em 1 mês</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Aqui está o que prevemos com base em 24.000+ usuários com IMC e hábitos alimentares semelhantes.
            </p>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Começar agora
            </button>
          </div>

          <div className="bg-[#1A1632] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Sua previsão de perda de peso com o Kure</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="week" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Line
                    type="monotone"
                    dataKey="kure"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="other"
                    stroke="#4B5563"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-purple-500"></div>
                <span className="text-sm">Seu progresso usando Kure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-gray-500 border-dashed"></div>
                <span className="text-sm">Outros apps de perda de peso</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weekly Plan Section */}
      <div className="bg-[#1A1632] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Seu plano de perda de peso com<br />hipnoterapia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyPlan.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A061E] p-6 rounded-xl"
              >
                <h3 className="text-purple-400 font-medium mb-2">{week.week}</h3>
                <h4 className="text-xl font-semibold mb-2">{week.title}</h4>
                <p className="text-gray-400">{week.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Especialistas por trás do seu plano</h2>
            <p className="text-gray-400 mb-6">
              Ao criar o Kure, nosso objetivo era oferecer assistência a pessoas que se sentem inseguras
              sobre progredir em direção aos seus objetivos corporais, especialmente após experimentar
              repetidos contratempos.
            </p>
            <p className="text-gray-400 mb-6">
              Com base em nossa experiência trabalhando com milhares de clientes, entendemos que o fator
              crucial que distingue tentativas bem-sucedidas das malsucedidas está em nossa mentalidade.
              A hipnoterapia é o método perfeito para abordar esse problema.
            </p>
            <p className="text-gray-400 mb-8">
              O poder de nossos pensamentos e a forte conexão entre nosso intestino e mente são as chaves
              para alcançar sucesso nas transformações corporais e nutricionais.
            </p>
            <div className="mb-8">
              <h4 className="font-semibold">Margot Sitruk</h4>
              <p className="text-purple-400">Fundadora</p>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Começar agora
            </button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Especialista em perda de peso"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#1A1632] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-2">
              {'★'.repeat(5)}
              <span className="ml-2">4.6 / 5 (1000+ avaliações)</span>
            </div>
            <h2 className="text-4xl font-bold">O que nossos usuários dizem sobre o Kure?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A061E] p-6 rounded-xl"
              >
                <p className="text-sm text-gray-400 mb-2">{testimonial.date}</p>
                <div className="flex gap-1 mb-4">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    {testimonial.verified && (
                      <p className="text-xs text-gray-400">USUÁRIO VERIFICADO</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/checkout')}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Começar agora
            </button>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>© 2024 Kure. Todos os direitos reservados.</p>
          <p>Aviso: Os resultados podem variar de pessoa para pessoa</p>
        </div>
      </footer>
    </div>
  );
}
