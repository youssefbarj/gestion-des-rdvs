"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Zap, RefreshCw, Droplets, Sparkles, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StepData {
  id: number
  title: string
  subtitle: string
  icon: React.ReactNode
  content: {
    description: string
    details: Array<{
      title: string
      content: string
      bgColor: string
    }>
  }
  colorScheme: {
    primary: string
    secondary: string
    accent: string
  }
}

const steps: StepData[] = [
  {
    id: 1,
    title: "ACTION MÉCANIQUE",
    subtitle: "Micro-perforations de l'épiderme et du derme",
    icon: <Zap className="w-8 h-8" />,
    content: {
      description:
        "La première étape consiste à créer des micro-canaux contrôlés dans la peau à l'aide d'aiguilles fines stérilisées.",
      details: [
        {
          title: "Le processus",
          content: "Création de micro-canaux dans la peau à l'aide d'aiguilles fines",
          bgColor: "#BFE4E4",
        },
        {
          title: "Profondeur",
          content: "Variable selon la zone traitée (0.5mm à 2.5mm)",
          bgColor: "#A7C7E7",
        },
      ],
    },
    colorScheme: {
      primary: "#F765A3",
      secondary: "#F9D2D9",
      accent: "#FF8FA3",
    },
  },
  {
    id: 2,
    title: "RÉACTION DE LA PEAU",
    subtitle: "Auto-réparation naturelle",
    icon: <RefreshCw className="w-8 h-8" />,
    content: {
      description: "La peau déclenche immédiatement son processus naturel de guérison et de régénération.",
      details: [
        {
          title: "Stimulation du collagène et de l'élastine",
          content: "Déclenche la production naturelle de collagène et d'élastine pour réparer les micro-lésions",
          bgColor: "#F9D2D9",
        },
        {
          title: "Activation du renouvellement cellulaire",
          content: "Accélère le processus de régénération de la peau pour une meilleure texture",
          bgColor: "#FFA4B6",
        },
      ],
    },
    colorScheme: {
      primary: "#C3B1E1",
      secondary: "#E8D5F2",
      accent: "#D4A5E8",
    },
  },
  {
    id: 3,
    title: "ABSORPTION DES ACTIFS",
    subtitle: "Pénétration optimale du sérum",
    icon: <Droplets className="w-8 h-8" />,
    content: {
      description: "Les micro-canaux créés permettent une absorption exceptionnelle des principes actifs.",
      details: [
        {
          title: "Pénétration profonde du sérum adapté à la peau",
          content: "Les micro-canaux permettent une absorption jusqu'à 80% plus efficace des principes actifs",
          bgColor: "#C3B1E1",
        },
        {
          title: "Actions ciblées selon le besoin",
          content: "Sérums spécifiques pour l'acné, les tâches, l'hydratation, etc.",
          bgColor: "#F9D2D9",
        },
      ],
    },
    colorScheme: {
      primary: "#BFE4E4",
      secondary: "#D4F1F1",
      accent: "#A7D7D7",
    },
  },
  {
    id: 4,
    title: "RÉSULTATS PROGRESSIFS",
    subtitle: "Amélioration visible de la peau",
    icon: <Sparkles className="w-8 h-8" />,
    content: {
      description: "Les effets se manifestent progressivement avec une amélioration continue de la qualité de la peau.",
      details: [
        {
          title: "Teint plus lumineux et homogène",
          content: "Amélioration visible de la texture et de l'éclat de la peau",
          bgColor: "#BFE4E4",
        },
        {
          title: "Diminution des imperfections",
          content: "Réduction de l'acné, des tâches et des pores dilatés",
          bgColor: "#A7C7E7",
        },
      ],
    },
    colorScheme: {
      primary: "#F765A3",
      secondary: "#F9D2D9",
      accent: "#FF8FA3",
    },
  },
  {
    id: 5,
    title: "LUMINOTHÉRAPIE",
    subtitle: "Option complémentaire en fin de soin",
    icon: <Lightbulb className="w-8 h-8" />,
    content: {
      description: "La luminothérapie peut être ajoutée pour optimiser les résultats selon les besoins spécifiques.",
      details: [
        {
          title: "Cicatrices et collagène",
          content: "Lumière rouge (630-660nm) pour stimuler davantage la production de collagène",
          bgColor: "#C3B1E1",
        },
        {
          title: "Acné",
          content: "Lumière bleue (415-430nm) pour ses propriétés antibactériennes",
          bgColor: "#BFE4E4",
        },
        {
          title: "Tâches pigmentaires",
          content: "Lumière jaune (585-595nm) pour réduire l'hyperpigmentation",
          bgColor: "#FFA4B6",
        },
      ],
    },
    colorScheme: {
      primary: "#FFA4B6",
      secondary: "#FFD1DC",
      accent: "#FF8FA3",
    },
  },
]

export default function MicroneedlingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const step = steps[currentStep]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                index === currentStep
                  ? "bg-[#F765A3] text-white shadow-lg scale-110"
                  : index < currentStep
                    ? "bg-[#A7C7E7] text-white"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundColor: step.colorScheme.primary }}
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="text-center mt-2 text-sm text-gray-600">
          Étape {currentStep + 1} sur {steps.length}
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div
            className="p-8 text-center"
            style={{
              background: `linear-gradient(135deg, ${step.colorScheme.primary} 0%, ${step.colorScheme.secondary} 100%)`,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4"
            >
              <div style={{ color: "#161616" }}>{step.icon}</div>
            </motion.div>
            <h2
              className="text-2xl md:text-3xl font-black mb-2"
              style={{
                color: "#161616",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {step.title}
            </h2>
            <p
              className="text-lg font-bold"
              style={{
                color: "#161616",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {step.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg text-gray-700 mb-8 text-center leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {step.content.description}
            </motion.p>

            <div className={`grid gap-6 ${step.content.details.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {step.content.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: detail.bgColor }}
                >
                  <h3
                    className="font-bold mb-3 text-base"
                    style={{
                      color: "#161616",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {detail.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#161616",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {detail.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
          className="flex items-center gap-2 px-6 py-3 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
          Précédent
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Navigation rapide</p>
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStep ? "bg-[#F765A3] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-6 py-3"
          style={{ backgroundColor: step.colorScheme.primary }}
        >
          Suivant
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
