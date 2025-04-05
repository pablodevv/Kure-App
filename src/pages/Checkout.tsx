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

  const handleGetPlan = () => {
    const sele
