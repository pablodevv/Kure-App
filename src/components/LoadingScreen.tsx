import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface LoadingScreenProps {
  messages: string[];
}

export default function LoadingScreen({ messages }: LoadingScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0A061E] flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-md space-y-8 text-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto w-16 h-16 text-purple-500"
        >
          <Brain className="w-full h-full" />
        </motion.div>
        
        {messages.map((message, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="text-lg text-gray-300"
          >
            {message}
          </motion.p>
        ))}
        
        <div className="w-full bg-gray-800 h-2 rounded-full mt-8">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}