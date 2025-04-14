import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function UpsellAutossabotagem() {
  const handleAccept = () => {
    window.location.href = "https://kirvano.com";
  };

  const handleRefuse = () => {
    window.location.href = "/obrigado";
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">
          Você está prestes a desbloquear sua transformação...
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Mas antes, queremos te entregar algo que impede milhares de pessoas de emagrecer:
          <span className="text-pink-300 font-semibold"> A autossabotagem.</span>
        </p>

        <div className="bg-pink-950 rounded-2xl p-6 mb-6 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-pink-400">
            📕 Ebook Exclusivo: 7 Técnicas de Autossabotagem que Impedem o Emagrecimento
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-400 mt-1" size={20} />
              Identifique as armadilhas mentais que travam seu progresso
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-400 mt-1" size={20} />
              Elimine hábitos inconscientes que sabotam sua dieta
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-400 mt-1" size={20} />
              Técnicas práticas e aplicáveis em menos de 5 minutos por dia
            </li>
          </ul>
          <p className="mt-4 text-xl font-bold text-yellow-400">
            Tudo isso por apenas <span className="line-through text-white">R$29,90</span> R$7,90
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="text-yellow-400 animate-pulse" />
          <p className="text-yellow-400 font-semibold">Oferta disponível pelos próximos <span id="countdown">5:00</span> minutos!</p>
        </div>

        <Button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-2xl w-full mb-4 shadow-lg"
        >
          Sim! Quero desbloquear o ebook por R$7,90
        </Button>

        <button
          onClick={handleRefuse}
          className="text-sm text-gray-400 hover:text-white underline"
        >
          Não quero saber das técnicas que sabotam meu emagrecimento
        </button>

        <div className="mt-10 text-left">
          <h3 className="text-lg font-semibold mb-2 text-pink-300">📣 O que dizem sobre o ebook:</h3>
          <div className="space-y-4">
            <blockquote className="bg-gray-900 rounded-xl p-4">
              “Me vi em cada uma das técnicas. Parecia que foi escrito pra mim. Depois disso, parei de desistir no 3º dia da dieta.”<br />
              <span className="text-sm text-gray-400">– Vanessa M.</span>
            </blockquote>
            <blockquote className="bg-gray-900 rounded-xl p-4">
              “Achei que fosse só mais um ebook, mas mexeu real com minha cabeça. Vale muito mais do que R$7,90.”<br />
              <span className="text-sm text-gray-400">– Carla R.</span>
            </blockquote>
            <blockquote className="bg-gray-900 rounded-xl p-4">
              “Finalmente entendi por que sempre engordava de novo. As técnicas são simples e funcionam!”<br />
              <span className="text-sm text-gray-400">– Juliana S.</span>
            </blockquote>
          </div>
        </div>
      </motion.div>

      <script dangerouslySetInnerHTML={{
        __html: `
          let countdown = 300;
          const countdownEl = document.getElementById("countdown");
          const interval = setInterval(() => {
            const minutes = Math.floor(countdown / 60);
            const seconds = countdown % 60;
            countdownEl.textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
            countdown--;
            if (countdown < 0) clearInterval(interval);
          }, 1000);
        `,
      }} />
    </div>
  );
}
