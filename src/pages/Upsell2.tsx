import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';

const UpsellPage2 = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !accepted) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, accepted]);

  const handleAccept = () => {
    setAccepted(true);
    window.location.href = "https://kirvano.com"; // Redireciona para o link de compra
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-center text-blue-600">
        Você está prestes a mudar sua vida!
      </h2>
      <p className="mt-2 text-center text-lg text-gray-700">
        Aproveite essa oferta exclusiva para garantir 6 meses de sessões + bônus incríveis.
      </p>

      {/* Countdown Timer */}
      <div className="mt-8 text-center">
        <h3 className="text-xl text-red-600 font-semibold">
          Sua oferta expira em:
        </h3>
        <div className="text-4xl font-bold text-red-600">
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Main Offer */}
      <div className="mt-12 text-center bg-white shadow-lg p-6 rounded-xl w-full md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">
          Pacote Premium: Plano de 6 Meses com Bônus Exclusivos
        </h3>
        <p className="text-lg text-gray-700">
          Garanta o acesso total ao nosso programa de 6 meses, com sessões novas todo mês, e ainda ganhe um presente secreto!
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Acesso ao grupo VIP no Telegram</li>
          <li>Sessão exclusiva para autoestima</li>
          <li>1 nova sessão todo mês</li>
          <li>Presente secreto surpresa</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          <span className="text-xl font-semibold">Por apenas R$ 49,90</span>
        </p>
        
        {/* CTA Button */}
        <Button
          onClick={handleAccept}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
        >
          SIM! Quero garantir meu Plano de 6 Meses Agora 💥
        </Button>
      </div>

      {/* Testimonials */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-blue-600">O que nossos clientes estão dizendo:</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8 md:space-y-0 mt-8">
          <div className="bg-white p-4 rounded-xl shadow-lg w-full md:w-1/3">
            <p className="text-gray-700">“Eu nunca me senti tão motivada a continuar. A minha autoestima melhorou demais!” - Maria S.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg w-full md:w-1/3">
            <p className="text-gray-700">“O grupo VIP e as sessões bônus foram a chave para meu sucesso. Estou vivendo uma nova fase!” - João M.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg w-full md:w-1/3">
            <p className="text-gray-700">“O presente secreto valeu mais do que eu esperava. Totalmente surpreendente!” - Carla T.</p>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Não perca essa chance de garantir a transformação total. O que está esperando para mudar sua vida?
        </p>
        <Button
          onClick={handleAccept}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
        >
          SIM! Eu quero minha transformação completa 💥
        </Button>
      </div>
    </div>
  );
};

export default UpsellPage2;
