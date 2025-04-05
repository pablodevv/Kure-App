import { useState, useEffect } from 'react';
import { CheckCircle, Gift, Shield, Star, X, HelpCircle, Activity, Smile, Frown, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/Button';

interface Plan {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  pricePerDay: number;
  originalPricePerDay: number;
  popular?: boolean;
  hasGift?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const plans: Plan[] = [
  {
    id: '1-month',
    title: 'Plano Mensal',
    price: 49.99,
    originalPrice: 99.99,
    pricePerDay: 1.67,
    originalPricePerDay: 3.33,
    popular: true,
    hasGift: true
  },
  {
    id: '3-months',
    title: 'Plano Trimestral',
    price: 129.99,
    originalPrice: 299.99,
    pricePerDay: 1.44,
    originalPricePerDay: 3.33
  },
  {
    id: '6-months',
    title: 'Plano Semestral',
    price: 239.99,
    originalPrice: 599.99,
    pricePerDay: 1.33,
    originalPricePerDay: 3.33
  }
];

const comparisonItems = [
  {
    label: 'Eficácia',
    kure: {
      icon: CheckCircle,
      text: 'Resultados comprovados',
      color: 'text-green-500'
    },
    alternative: {
      icon: X,
      text: 'Resultados variáveis',
      color: 'text-red-500'
    }
  },
  {
    label: 'Abordagem',
    kure: {
      icon: Shield,
      text: 'Holística e personalizada',
      color: 'text-blue-500'
    },
    alternative: {
      icon: HelpCircle,
      text: 'Genérica e padronizada',
      color: 'text-yellow-500'
    }
  },
  {
    label: 'Monitoramento',
    kure: {
      icon: Activity,
      text: 'Contínuo e adaptativo',
      color: 'text-purple-500'
    },
    alternative: {
      icon: X,
      text: 'Limitado ou inexistente',
      color: 'text-red-500'
    }
  },
  {
    label: 'Satisfação',
    kure: {
      icon: Smile,
      text: '98% satisfação',
      color: 'text-green-500'
    },
    alternative: {
      icon: Frown,
      text: 'Baixa satisfação',
      color: 'text-red-500'
    }
  }
];

export default function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState<Plan['id']>('1-month');
  const [selectedPlanBottom, setSelectedPlanBottom] = useState<Plan['id']>('1-month');
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "Como funciona o Kure?",
      answer: "O Kure utiliza técnicas avançadas de hipnose e programação mental para ajudar você a alcançar seus objetivos de forma natural e duradoura.",
      isOpen: false
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários começa a notar mudanças positivas já nas primeiras semanas de uso regular.",
      isOpen: false
    },
    {
      question: "É seguro usar o Kure?",
      answer: "Sim, o Kure é 100% seguro e natural. Não utilizamos medicamentos ou substâncias químicas.",
      isOpen: false
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer);
            return prev;
          }
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeOfDayMessage = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "hoje de manhã";
    if (hour >= 12 && hour < 18) return "hoje à tarde";
    return "hoje à noite";
  };

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  const handleGetPlan = (planId: string = selectedPlan) => {
    const selectedPlanPrice = plans.find(p => p.id === planId)?.price;
    console.log(`Processing checkout for plan: ${planId} at $${selectedPlanPrice}`);
  };

  const toggleFAQ = (index: number) => {
    setFaqItems(prev => prev.map((item, i) => 
      i === index ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  const renderPlansSection = (isBottom: boolean = false) => (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto" id={isBottom ? "plans-section-bottom" : "plans-section"}>
      <div>
        <h2 className="text-xl mb-6 text-left">Selecione seu plano:</h2>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => isBottom ? setSelectedPlanBottom(plan.id) : setSelectedPlan(plan.id)}
              className={`bg-white rounded-xl p-6 relative cursor-pointer ${
                (isBottom ? selectedPlanBottom : selectedPlan) === plan.id 
                  ? 'ring-2 ring-purple-500' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  Mais popular
                </div>
              )}
              <div className="flex justify-between items-center text-gray-900">
                <div>
                  <input
                    type="radio"
                    name={isBottom ? "plan-bottom" : "plan"}
                    id={`${plan.id}${isBottom ? '-bottom' : ''}`}
                    checked={(isBottom ? selectedPlanBottom : selectedPlan) === plan.id}
                    onChange={() => isBottom ? setSelectedPlanBottom(plan.id) : setSelectedPlan(plan.id)}
                    className="mr-3 accent-purple-500"
                  />
                  <label htmlFor={`${plan.id}${isBottom ? '-bottom' : ''}`}>{plan.title}</label>
                  <div className="mt-1">
                    <span className="line-through text-gray-500">USD {plan.originalPrice}</span>{' '}
                    <span className="font-bold">USD {plan.price}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div>
                    <span className="line-through text-gray-500">USD {plan.originalPricePerDay}</span>
                  </div>
                  <div>
                    <span className="font-bold">USD {plan.pricePerDay}</span>
                    <span className="text-gray-500 text-sm">/dia</span>
                  </div>
                </div>
              </div>
              {plan.hasGift && (
                <div className="mt-4 w-full bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-full px-4 py-2 flex items-center justify-center">
                  <Gift className="w-4 h-4 mr-2" />
                  Ganhe um presente secreto!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {!isBottom && (
        <div className="bg-white rounded-xl p-6 text-gray-900">
          <h3 className="text-xl font-semibold mb-4">O que você recebe:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Acesso ilimitado a todas as sessões
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Garantia de satisfação de 30 dias
            </li>
            <li className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-500" />
              Monitoramento de progresso
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F0A3C] text-white">
      <div className="bg-[#FF4B7B] py-3 text-center">
        <p className="text-sm">
          Comece sua primeira sessão {getTimeOfDayMessage()}! Seu desconto termina em:{' '}
          <span className="font-bold">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </p>
      </div>

      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Transforme sua vida com o Kure</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Junte-se a mais de 345.000 pessoas que já descobriram o poder da transformação mental
        </p>
      </header>

      {renderPlansSection()}

      <section className="mt-20 bg-[#0A0729] py-16 rounded-2xl">
        <h2 className="text-3xl mb-4 text-center">Kure app vs Alternativas</h2>
        <p className="mb-12 text-center max-w-3xl mx-auto">
          A maioria das pessoas já tentou métodos de perda de peso "baseados em dieta" ou "baseados em exercícios". 
          A abordagem Kure é superior em todos os aspectos.
        </p>

        <div className="max-w-4xl mx-auto bg-[#1B1464] rounded-xl p-8">
          <div className="grid grid-cols-[1fr_2fr_2fr] gap-8 pb-4 border-b border-gray-700">
            <div></div>
            <div className="text-center font-semibold">Kure</div>
            <div className="text-center font-semibold">Alternativas</div>
          </div>

          <div className="space-y-6 mt-8">
            {comparisonItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_2fr_2fr] gap-8 py-4 border-b border-gray-700">
                <div className="text-white">{item.label}</div>
                <div className="flex items-center gap-2">
                  <item.kure.icon className={`w-6 h-6 ${item.kure.color}`} />
                  <span>{item.kure.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <item.alternative.icon className={`w-6 h-6 ${item.alternative.color}`} />
                  <span>{item.alternative.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="gradient" size="lg" onClick={() => handleGetPlan(selectedPlanBottom)}>
            Comprar agora!
          </Button>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl mb-12 text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#1B1464] rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                {item.isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {item.isOpen && (
                <div className="px-6 pb-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-[#1B1464] rounded-xl p-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl mb-4">
              Sua primeira sessão Kure pode começar {getTimeOfDayMessage()}!
            </h2>
            <Button variant="gradient" size="lg" onClick={() => handleGetPlan(selectedPlanBottom)}>
              Comprar agora!
            </Button>
          </div>
          <div className="flex justify-center">
            <img src="https://placehold.co/500x300" alt="Mulher relaxando com fones de ouvido" className="rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5" />
          <p>Mais de 345.000 programas vendidos.</p>
        </div>
        {renderPlansSection(true)}
        <div className="text-center mt-8">
          <Button variant="gradient" size="lg" onClick={() => handleGetPlan(selectedPlanBottom)}>
            Obter meu plano
          </Button>
        </div>
      </section>

      <footer className="mt-20 py-8 text-center text-gray-400">
        <p>© 2024 Kure. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
