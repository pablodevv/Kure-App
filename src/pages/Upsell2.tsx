import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';

const UpsellPage = () => {
  // Timer para urgência
  const [timer, setTimer] = useState(10 * 60); // 10 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Função para tratar a aceitação da oferta
  const handleAccept = () => {
    window.location.href = "https://kirvano.com"; // Link de checkout
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="bg-white w-full max-w-2xl px-6 py-8 rounded-lg shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-red-500 mb-6">
          🚀 Você está prestes a transformar sua vida! 🚀
        </h2>
        
        <p className="text-center text-lg mb-4">
          Quer garantir 6 meses de sessões + bônus exclusivos, acesso ao grupo VIP no Telegram com apoio direto da nossa equipe e um presente secreto? Não perca essa chance única!
        </p>

        <div className="border-t-2 border-gray-200 mt-6 pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Bônus Exclusivos para Você:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>🌟 Acesso exclusivo ao nosso Grupo VIP no Telegram</li>
            <li>💪 Sessão exclusiva para autoestima</li>
            <li>📅 1 sessão nova todo mês durante 6 meses</li>
            <li>🎁 Presente secreto surpresa</li>
          </ul>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tudo isso por apenas R$ 49,90
          </h2>
          <p className="text-lg text-gray-600">Essa oferta é uma chance única de garantir a continuidade do seu sucesso! Aproveite agora e não perca os bônus exclusivos.</p>
        </div>

        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-red-600">Oferta disponível por apenas:</h4>
          <div className="text-3xl font-bold text-red-600">
            {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </div>
          <p className="text-md text-gray-600">Corra! Essa oferta incrível acaba em breve!</p>
        </div>

        <div className="mb-8">
          <p className="text-center text-lg font-semibold text-gray-800 mb-4">
            Você já está no caminho certo! Aproveite para potencializar ainda mais sua transformação.
          </p>
          <Button
            onClick={handleAccept}
            className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-4 rounded-xl shadow-xl transition-all"
          >
            SIM! Quero garantir meus 6 meses agora! 🔥
          </Button>
        </div>

        <div className="text-center">
          <p className="text-md text-gray-500 mb-4">
            Não deixe para depois! Com esse plano de 6 meses, sua jornada será muito mais completa. 
          </p>
          <p className="text-lg text-gray-600">
            Ao clicar em "SIM! Quero garantir meus 6 meses agora!", você terá acesso imediato a todos os bônus, com suporte direto e acesso ao nosso grupo VIP no Telegram.
          </p>
        </div>

        {/* Provas Sociais e Depoimentos */}
        <div className="mt-10 border-t-2 border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">O que nossos clientes estão dizendo:</h3>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="max-w-lg text-center">
              <p className="text-gray-600 italic">"Nunca imaginei que a hipnoterapia poderia fazer tanto pela minha vida. Perdi peso de forma saudável e mudei minha mentalidade!"</p>
              <p className="text-gray-800 font-semibold mt-2">Ana Clara, 36 anos</p>
            </div>
            <div className="max-w-lg text-center">
              <p className="text-gray-600 italic">"O programa me ajudou a melhorar minha autoestima e controlar a compulsão alimentar. Vale cada centavo!"</p>
              <p className="text-gray-800 font-semibold mt-2">Carlos Almeida, 42 anos</p>
            </div>
            <div className="max-w-lg text-center">
              <p className="text-gray-600 italic">"O grupo VIP e o suporte direto fizeram toda a diferença para minha jornada. Recomendo a todos!"</p>
              <p className="text-gray-800 font-semibold mt-2">Fernanda Oliveira, 29 anos</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">Mais de 345.000 clientes satisfeitos com nossa metodologia de hipnoterapia e transformação de vida!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellPage;
