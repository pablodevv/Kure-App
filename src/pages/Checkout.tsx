import { useState, useEffect } from 'react'
import { CheckCircle, Gift, Shield, Star, X, HelpCircle, Activity, Smile, Frown, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/button'

interface Plan {
  id: '7-day' | '1-month' | '3-month'
  title: string
  price: number
  originalPrice: number
  pricePerDay: number
  originalPricePerDay: number
  popular?: boolean
  hasGift?: boolean
}

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

const plans: Plan[] = [
  {
    id: '7-day',
    title: 'Plano de 7 dias',
    price: 7.59,
    originalPrice: 15.18,
    pricePerDay: 1.08,
    originalPricePerDay: 2.16
  },
  {
    id: '1-month',
    title: 'Plano de 1 mês',
    price: 19.29,
    originalPrice: 38.58,
    pricePerDay: 0.64,
    originalPricePerDay: 1.28,
    popular: true
  },
  {
    id: '3-month',
    title: 'Plano de 3 meses',
    price: 28.59,
    originalPrice: 57.19,
    pricePerDay: 0.31,
    originalPricePerDay: 0.63,
    hasGift: true
  }
]

const features = [
  'App digital criado por especialistas em hipnose, neurociência e vício em comida',
  'Introdução às sessões de hipnose',
  'Sessões diárias personalizadas de hipnoterapia antes de dormir',
  'Programa especial de 21 dias para perda de peso acelerada',
  'Suporte ao cliente 24/7',
  'Garantia de privacidade e segurança',
  'Acompanhamento do progresso'
]

const reviews = [
  {
    name: 'Jasmine Z.',
    date: '2024 Jun 27',
    text: 'Kure mudou meu corpo de maneiras que eu não poderia imaginar. Recomendo para todas as garotas que procuram algo diferente que realmente funciona!',
    image: 'https://placehold.co/400x600',
    stars: 5
  },
  {
    name: 'Joseph S.',
    date: '2024 Jun 24',
    text: 'Finalmente parei de comer compulsivamente e comecei a me exercitar. Kure foi a única coisa que funcionou para mim.',
    image: 'https://placehold.co/400x600',
    stars: 5
  },
  {
    name: 'Simona K.',
    date: '2024 Jun 19',
    text: 'Experiência fenomenal. O app Kure é a principal razão por trás da minha mudança. Ser saudável agora é tão fácil, vem naturalmente.',
    image: 'https://placehold.co/400x600',
    stars: 5
  }
]

const comparisonItems = [
  {
    label: 'Taxa de sucesso',
    kure: { icon: Star, text: 'Acima de 90%', color: 'text-green-400' },
    alternative: { icon: HelpCircle, text: 'Amplamente imprevisível', color: 'text-gray-500' }
  },
  {
    label: 'Preço',
    kure: { icon: CheckCircle, text: 'USD 19.29 por mês*', color: 'text-green-400' },
    alternative: { icon: X, text: 'USD 55.00–150.00 por visita**', color: 'text-gray-500' }
  },
  {
    label: 'Foco na causa raiz',
    kure: { icon: CheckCircle, text: 'Sim', color: 'text-green-400' },
    alternative: { icon: X, text: 'Não', color: 'text-gray-500' }
  },
  {
    label: 'Impacto duradouro',
    kure: { icon: CheckCircle, text: 'Sim', color: 'text-green-400' },
    alternative: { icon: X, text: 'Não', color: 'text-gray-500' }
  },
  {
    label: 'Baixo esforço necessário',
    kure: { icon: Shield, text: 'Nenhum', color: 'text-green-400' },
    alternative: { icon: Activity, text: 'Médio a alto', color: 'text-gray-500' }
  },
  {
    label: 'Experiência do usuário',
    kure: { icon: Smile, text: 'Baseado no prazer', color: 'text-green-400' },
    alternative: { icon: Frown, text: 'Baseado no sofrimento', color: 'text-gray-500' }
  }
]

export function Checkout() {
  const [selectedPlan, setSelectedPlan] = useState<Plan['id']>('1-month')
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 })
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: 'O que acontece depois que eu faço o pedido?',
      answer: 'Depois que você faz o pedido, nós começamos a trabalhar! Com base nas perguntas que você respondeu no questionário, vamos criar seu programa de acordo com suas necessidades pessoais específicas.',
      isOpen: false
    },
    {
      question: 'Como posso cancelar minha assinatura?',
      answer: 'Os cancelamentos são tratados diretamente pela Apple e podem ser solicitados usando as instruções aqui. Se você ainda tiver dúvidas sobre como cancelar sua assinatura, entre em contato conosco em info@kureapp.health',
      isOpen: false
    },
    {
      question: 'É seguro usar auto-hipnose?',
      answer: 'A auto-hipnoterapia é um procedimento completamente seguro.',
      isOpen: false
    },
    {
      question: 'O que acontece se eu dormir durante a sessão?',
      answer: 'É perfeitamente normal e seguro adormecer durante uma sessão de hipnose. Na verdade, isso prova que você entrou em uma fase de relaxamento profundo onde a hipnose é mais eficaz. Se isso acontecer com você e quiser revisitar sua sessão noturna, você pode fazer isso selecionando o dia anterior no app Kure.',
      isOpen: false
    }
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timer)
            return prev
          }
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { ...prev, seconds: prev.seconds - 1 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  const handleGetPlan = () => {
    const checkoutUrls = {
      '7-day': 'https://example.com/checkout/7-day',
      '1-month': 'https://example.com/checkout/1-month',
      '3-month': 'https://example.com/checkout/3-month'
    }
    window.location.href = checkoutUrls[selectedPlan]
  }

  const toggleFAQ = (index: number) => {
    setFaqItems(prev => prev.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false
    })))
  }

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section')
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const renderPlansSection = () => (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto" id="plans-section">
      {/* Plans Section */}
      <div>
        <h2 className="text-xl mb-6 text-left">Selecione seu plano:</h2>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl p-6 relative ${
                selectedPlan === plan.id ? 'ring-2 ring-purple-500' : ''
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
                    name="plan"
                    id={plan.id}
                    checked={selectedPlan === plan.id}
                    onChange={() => setSelectedPlan(plan.id)}
                    className="mr-3"
                  />
                  <label htmlFor={plan.id}>{plan.title}</label>
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

        <p className="text-sm mt-6 text-gray-300">
          Ao clicar em Obter meu plano, concordo em pagar USD {
            plans.find(p => p.id === selectedPlan)?.price
          } pelo meu plano e que, se eu não cancelar antes do término do plano introdutório, a Kure cobrará automaticamente meu método de pagamento o preço regular USD {
            plans.find(p => p.id === selectedPlan)?.originalPrice
          } a cada período subsequente até que eu cancele. Posso cancelar online visitando a página de assinatura em minha conta no site.
        </p>

        <Button variant="gradient" size="lg" className="w-full mt-6" onClick={handleGetPlan}>
          Obter meu plano
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm mb-4">Checkout seguro garantido</p>
          <div className="flex justify-center items-center gap-4">
            <img src="https://placehold.co/300x40" alt="Métodos de pagamento" className="h-8" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-xl mb-6 text-left">Todos os planos incluem:</h2>
        <ul className="space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Gift Box */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6">
          <div className="flex gap-4">
            <Gift className="w-12 h-12 text-purple-400" />
            <div>
              <h3 className="text-xl mb-2">Presente secreto</h3>
              <p className="text-gray-300">
                A equipe Kure quer apoiar sua relação com a comida e sua transformação, então preparamos uma surpresa para você!
              </p>
            </div>
          </div>
        </div>

        {/* Risk-free Guarantee */}
        <div className="mt-8 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6">
          <div className="flex gap-4">
            <Shield className="w-12 h-12 text-purple-400" />
            <div>
              <h3 className="text-xl mb-2">Garantia sem risco</h3>
              <p className="text-gray-300">
                Sem resultados? Entre em contato com nosso suporte ao cliente e podemos cancelar sua assinatura a qualquer momento sem cobranças adicionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0F0A3C] text-white">
      {/* Timer Banner */}
      <div className="bg-[#FF4B7B] py-3 text-center">
        <p className="text-sm">
          Comece sua primeira sessão hoje à noite! Seu desconto termina em:{' '}
          <span className="font-bold">
            {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}:00
          </span>
        </p>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5" />
          <p>Mais de 345.000 programas vendidos.</p>
        </div>
        <h1 className="text-4xl font-serif mb-12 text-center max-w-2xl mx-auto">
          Obtenha sessões personalizadas de hipnoterapia para seu sucesso na perda de peso!
        </h1>

        {renderPlansSection()}

        {/* Comparison Table */}
        <section className="mt-20 bg-[#0A0729] py-16 rounded-2xl">
          <h2 className="text-3xl mb-4 text-center">Kure app vs Alternativas</h2>
          <p className="mb-12 text-center max-w-3xl mx-auto">
            A maioria das pessoas já tentou métodos de perda de peso "baseados em dieta" ou "baseados em exercícios". 
            A abordagem Kure é superior em todos os aspectos.
          </p>

          <div className="max-w-4xl mx-auto bg-[#1B1464] rounded-xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <img src="https://placehold.co/100x30" alt="Kure Logo" className="mx-auto mb-4" />
              </div>
              <div className="text-center">
                <h3 className="text-xl">Dietas ou esportes</h3>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              {comparisonItems.map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_2fr_2fr] gap-8 py-4 border-b border-gray-700">
                  <div className="text-gray-400">{item.label}</div>
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

            <div className="mt-8 text-sm text-gray-400">
              <p>*USD 19.29 pelo primeiro mês de assinatura Kure.</p>
              <p>**Preço médio de personal coach nos EUA USD 55.00–65.00 por visita.</p>
              <p className="ml-4">Preço médio de nutricionista USD 70.00–150.00 por visita.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="gradient" size="lg" onClick={scrollToPlans}>
              Comprar agora!
            </Button>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[1,2,3,4,5].map(n => (
                <Star key={n} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span>4.6 / 5 (1000+ avaliações)</span>
          </div>

          <h2 className="text-3xl mb-12 text-center">
            Por que os <span className="text-purple-400">Kustomers</span> amam o app <span className="text-purple-400">Kure</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#1B1464] rounded-xl p-6">
                <div className="flex mb-2">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4">{review.date}</p>
                <img src={review.image} alt="Before and After" className="w-full rounded-lg mb-4" />
                <p className="mb-4">{review.text}</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{review.name}</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">USUÁRIO VERIFICADO</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="gradient" size="lg" onClick={scrollToPlans}>
              Comprar agora!
            </Button>
          </div>
        </section>

        {/* Secret Gift Section */}
        <section className="mt-20 bg-[#1B1464] rounded-xl p-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-4">
                Compre o plano de 3 meses e ganhe um presente SECRETO no valor de USD 19.99
              </h2>
              <p className="text-gray-300">
                A equipe Kure quer apoiar sua relação com a comida e sua transformação, então ganhe esta surpresa GRÁTIS!
              </p>
            </div>
            <div className="flex justify-center">
              <Gift className="w-32 h-32 text-purple-400" />
            </div>
          </div>
        </section>

        {/* Programs Ordered Section */}
        <section className="mt-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5" />
            <p>Mais de 345.000 programas vendidos.</p>
          </div>
          {renderPlansSection()}
        </section>

        {/* Start Tonight Section */}
        <section className="mt-20 bg-[#1B1464] rounded-xl p-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-4">
                Sua primeira sessão Kure pode começar hoje à noite!
              </h2>
              <Button variant="gradient" size="lg" onClick={scrollToPlans}>
                Comprar agora!
              </Button>
            </div>
            <div className="flex justify-center">
              <img src="https://placehold.co/500x300" alt="Mulher relaxando com fones de ouvido" className="rounded-lg" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">As pessoas nos perguntam:</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#1B1464] rounded-xl">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl">{item.question}</h3>
                  {item.isOpen ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
                {item.isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">© 2024 Kure App. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
