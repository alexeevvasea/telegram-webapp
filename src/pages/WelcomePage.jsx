import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Timer, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 🆕

export default function WelcomePage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate(); // 🆕

  const next = () => setStep((prev) => prev + 1);

  // Перенаправление на Dashboard после финального шага
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 1000); // ⏳ 1 секунда задержки для эффекта "загрузки"

      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  const fadeVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  if (step === 4) {
    return <div className="text-center text-white p-4">Loading dashboard...</div>;
  }

  // ... остальная часть компонента без изменений ...
}
