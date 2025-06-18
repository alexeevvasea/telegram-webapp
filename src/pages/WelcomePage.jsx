import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Timer, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((prev) => prev + 1);

  const fadeVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  };

  if (step === 4) {
    return <div className="text-center text-white p-4">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6 py-10">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
          >
            <div className="w-20 h-20 bg-white rounded-full mb-4 mx-auto">
              {/* Replace with your logo */}
              <span className="text-indigo-600 font-bold text-3xl leading-[5rem]">D</span>
            </div>
            <h1 className="text-5xl font-bold mb-2">DealManager</h1>
            <p className="text-xl opacity-90">Smart sales assistant inside Telegram</p>
            <Button className="mt-6 text-lg px-8 py-3" onClick={next}>Continue</Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy & Permissions</h2>
            <p className="opacity-80 mb-6">To continue, please agree to our privacy policy and grant the necessary permissions to integrate with Telegram and WhatsApp chats.</p>
            <Button className="text-lg px-8 py-3" onClick={next}>Agree and Continue</Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-2">Welcome to DealManager</h2>
            <p className="text-xl opacity-90">Capture leads from Telegram, OLX, eMAG and more — automatically.</p>
            <Button className="mt-6 text-lg px-8 py-3" onClick={next}>Next</Button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-w-md w-full"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Why DealManager?</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Timer className="w-6 h-6 mt-1" />
                <span>Save 10+ hours weekly by eliminating manual data entry.</span>
              </li>
              <li className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 mt-1" />
                <span>Auto-create client cards from Telegram and WhatsApp chats.</span>
              </li>
              <li className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 mt-1" />
                <span>Secure, private and always under your control.</span>
              </li>
            </ul>
            <div className="text-center mt-8">
              <Button className="text-lg px-8 py-3" onClick={next}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
