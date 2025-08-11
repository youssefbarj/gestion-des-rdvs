"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface VisualStep {
  id: number
  title: string
  subtitle: string
  visual: React.ReactNode
  color: string
  details: Array<{
    title: string
    content: string
    bgColor: string
  }>
}

const SkinLayer = ({ depth, active, color }: { depth: number; active: boolean; color: string }) => (
  <motion.div
    className={`h-8 border-2 border-gray-300 relative overflow-hidden ${active ? "border-pink-500" : ""}`}
    style={{ backgroundColor: active ? color : "#f8f8f8" }}
    animate={{
      backgroundColor: active ? color : "#f8f8f8",
      borderColor: active ? "#ec4899" : "#d1d5db",
    }}
    transition={{ duration: 0.5 }}
  >
    {active && (
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="w-1 h-6 bg-pink-600 rounded-full"></div>
        <div className="w-1 h-4 bg-pink-600 rounded-full mx-1"></div>
        <div className="w-1 h-5 bg-pink-600 rounded-full"></div>
      </motion.div>
    )}
  </motion.div>
)

const NeedleAnimation = ({ active }: { active: boolean }) => (
  <div className="relative h-20 flex items-center justify-center">
    <motion.div
      className="w-1 bg-gray-400 rounded-full origin-top"
      style={{ height: active ? "60px" : "20px" }}
      animate={{ height: active ? "60px" : "20px" }}
      transition={{ duration: 0.8, repeat: active ? Number.POSITIVE_INFINITY : 0, repeatType: "reverse" }}
    />
    <motion.div
      className="absolute top-0 w-3 h-3 bg-pink-500 rounded-full"
      animate={{ y: active ? [0, 40, 0] : 0 }}
      transition={{ duration: 0.8, repeat: active ? Number.POSITIVE_INFINITY : 0 }}
    />
  </div>
)

const CollagenAnimation = ({ active }: { active: boolean }) => (
  <div className="relative h-20 flex items-center justify-center">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-blue-400 rounded-full mx-1"
        animate={
          active
            ? {
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                y: [0, -10, 0],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          repeat: active ? Number.POSITIVE_INFINITY : 0,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
)

const SerumAnimation = ({ active }: { active: boolean }) => (
  <div className="relative h-20 flex items-center justify-center">
    <motion.div
      className="w-8 h-12 bg-gradient-to-b from-green-300 to-green-500 rounded-lg relative overflow-hidden"
      animate={active ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1, repeat: active ? Number.POSITIVE_INFINITY : 0 }}
    >
      {active &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-600 rounded-full"
            style={{ left: `${20 + i * 20}%`, top: "10%" }}
            animate={{
              y: [0, 40],
              opacity: [1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
    </motion.div>
  </div>
)

const ResultAnimation = ({ active }: { active: boolean }) => (
  <div className="relative h-20 flex items-center justify-center">
    <motion.div
      className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center"
      animate={
        active
          ? {
              boxShadow: ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 20px rgba(236, 72, 153, 0)"],
            }
          : {}
      }
      transition={{ duration: 2, repeat: active ? Number.POSITIVE_INFINITY : 0 }}
    >
      <motion.div
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
        animate={active ? { rotate: 360 } : {}}
        transition={{ duration: 2, repeat: active ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
      >
        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
      </motion.div>
    </motion.div>
  </div>
)

const LightAnimation = ({ active }: { active: boolean }) => (
  <div className="relative h-20 flex items-center justify-center">
    <motion.div
      className="w-12 h-8 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 rounded-lg relative"
      animate={active ? { opacity: [0.5, 1, 0.5] } : {}}
      transition={{ duration: 1.5, repeat: active ? Number.POSITIVE_INFINITY : 0 }}
    >
      {active &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-12 bg-yellow-300 opacity-60"
            style={{ left: `${10 + i * 15}%`, top: "-8px" }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
            }}
          />
        ))}
    </motion.div>
  </div>
)

const steps: VisualStep[] = [
  {
    id: 1,
    title: "ACTION MÉCANIQUE",
    subtitle: "Micro-perforations de l'épiderme et du derme",
    visual: <NeedleAnimation active={false} />,
    color: "#fce7f3",
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
  {
    id: 2,
    title: "RÉACTION DE LA PEAU",
    subtitle: "Auto-réparation naturelle",
    visual: <CollagenAnimation active={false} />,
    color: "#ddd6fe",
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
  {
    id: 3,
    title: "ABSORPTION DES ACTIFS",
    subtitle: "Pénétration optimale du sérum",
    visual: <SerumAnimation active={false} />,
    color: "#ccfbf1",
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
  {
    id: 4,
    title: "RÉSULTATS PROGRESSIFS",
    subtitle: "Amélioration visible de la peau",
    visual: <ResultAnimation active={false} />,
    color: "#fef3c7",
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
  {
    id: 5,
    title: "LUMINOTHÉRAPIE",
    subtitle: "Option complémentaire en fin de soin",
    visual: <LightAnimation active={false} />,
    color: "#fed7d7",
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
]

export default function MicroneedlingVisual() {
  const [activeStep, setActiveStep] = useState<number>(1)

  const getActiveVisual = (stepId: number) => {
    switch (stepId) {
      case 1:
        return <NeedleAnimation active={activeStep === stepId} />
      case 2:
        return <CollagenAnimation active={activeStep === stepId} />
      case 3:
        return <SerumAnimation active={activeStep === stepId} />
      case 4:
        return <ResultAnimation active={activeStep === stepId} />
      case 5:
        return <LightAnimation active={activeStep === stepId} />
      default:
        return null
    }
  }

  const currentStep = steps.find((step) => step.id === activeStep)!

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-4 text-center">
        <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
          MICRONEEDLING : LE PRINCIPE ET LES ÉTAPES
        </h1>
      </div>

      <div className="p-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Left: Skin Cross-Section */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h2 className="text-lg font-bold text-center mb-3 text-gray-800">PEAU</h2>
            <div className="space-y-1">
              <SkinLayer depth={1} active={activeStep === 1} color="#fce7f3" />
              <SkinLayer depth={2} active={activeStep === 2} color="#ddd6fe" />
              <SkinLayer depth={3} active={activeStep === 3} color="#ccfbf1" />
              <SkinLayer depth={4} active={activeStep === 4} color="#fef3c7" />
            </div>
          </div>

          {/* Center: Animation */}
          <div className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold mb-3 text-gray-800">ACTION</h2>
            <div className="flex-1 flex items-center justify-center">{getActiveVisual(activeStep)}</div>
            <div className="text-center mt-2">
              <h3 className="text-sm font-bold text-gray-800" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {currentStep.title}
              </h3>
              <p className="text-xs text-gray-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {currentStep.subtitle}
              </p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h2 className="text-lg font-bold text-center mb-3 text-gray-800">DÉTAILS</h2>
            <div className="space-y-2">
              {currentStep.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="p-3 rounded-lg shadow-sm"
                  style={{ backgroundColor: detail.bgColor }}
                >
                  <h4
                    className="font-bold mb-1 text-xs"
                    style={{
                      color: "#161616",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {detail.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
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
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {steps.map((step) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3 rounded-xl text-center transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: activeStep === step.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-lg font-bold mb-1">{step.id}</div>
              <div className="text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {step.title.split(" ")[0]}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            animate={{ width: `${(activeStep / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}
