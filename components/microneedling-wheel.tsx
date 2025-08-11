"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, RefreshCw, Droplets, Sparkles, Lightbulb, X } from "lucide-react"

interface StepData {
  id: number
  title: string
  subtitle: string
  icon: React.ReactNode
  angle: number
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
    subtitle: "Micro-perforations",
    icon: <Zap className="w-6 h-6" />,
    angle: 0, // Top
    content: {
      description: "Création de micro-canaux contrôlés dans la peau à l'aide d'aiguilles fines stérilisées.",
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
    subtitle: "Auto-réparation",
    icon: <RefreshCw className="w-6 h-6" />,
    angle: 72, // 72 degrees clockwise
    content: {
      description: "La peau déclenche immédiatement son processus naturel de guérison et de régénération.",
      details: [
        {
          title: "Stimulation du collagène",
          content: "Déclenche la production naturelle de collagène et d'élastine",
          bgColor: "#F9D2D9",
        },
        {
          title: "Renouvellement cellulaire",
          content: "Accélère le processus de régénération de la peau",
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
    title: "ABSORPTION ACTIFS",
    subtitle: "Pénétration sérum",
    icon: <Droplets className="w-6 h-6" />,
    angle: 144, // 144 degrees clockwise
    content: {
      description: "Les micro-canaux créés permettent une absorption exceptionnelle des principes actifs.",
      details: [
        {
          title: "Pénétration profonde",
          content: "Absorption jusqu'à 80% plus efficace des principes actifs",
          bgColor: "#C3B1E1",
        },
        {
          title: "Actions ciblées",
          content: "Sérums spécifiques selon les besoins de la peau",
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
    title: "RÉSULTATS",
    subtitle: "Amélioration visible",
    icon: <Sparkles className="w-6 h-6" />,
    angle: 216, // 216 degrees clockwise
    content: {
      description: "Les effets se manifestent progressivement avec une amélioration continue de la qualité de la peau.",
      details: [
        {
          title: "Teint lumineux",
          content: "Amélioration visible de la texture et de l'éclat",
          bgColor: "#BFE4E4",
        },
        {
          title: "Moins d'imperfections",
          content: "Réduction de l'acné, des tâches et des pores",
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
    subtitle: "Option complémentaire",
    icon: <Lightbulb className="w-6 h-6" />,
    angle: 288, // 288 degrees clockwise
    content: {
      description: "La luminothérapie peut être ajoutée pour optimiser les résultats selon les besoins spécifiques.",
      details: [
        {
          title: "Lumière rouge",
          content: "Stimule la production de collagène (630-660nm)",
          bgColor: "#C3B1E1",
        },
        {
          title: "Lumière bleue",
          content: "Propriétés antibactériennes pour l'acné (415-430nm)",
          bgColor: "#BFE4E4",
        },
        {
          title: "Lumière jaune",
          content: "Réduit l'hyperpigmentation (585-595nm)",
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

export default function MicroneedlingWheel() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const radius = 200 // Radius of the circle
  const centerX = 250 // Center X coordinate
  const centerY = 250 // Center Y coordinate

  const getStepPosition = (angle: number) => {
    const radian = (angle - 90) * (Math.PI / 180) // -90 to start from top
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY + radius * Math.sin(radian),
    }
  }

  const getConnectionPath = (fromAngle: number, toAngle: number) => {
    const fromPos = getStepPosition(fromAngle)
    const toPos = getStepPosition(toAngle)

    // Create a curved path
    const midX = centerX
    const midY = centerY

    return `M ${fromPos.x} ${fromPos.y} Q ${midX} ${midY} ${toPos.x} ${toPos.y}`
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        {/* Main Wheel Container */}
        <div className="relative w-[500px] h-[500px] mx-auto">
          <svg width="500" height="500" className="absolute inset-0" style={{ overflow: "visible" }}>
            {/* Connection Lines */}
            {steps.map((step, index) => {
              const nextStep = steps[(index + 1) % steps.length]
              return (
                <motion.path
                  key={`connection-${step.id}`}
                  d={getConnectionPath(step.angle, nextStep.angle)}
                  stroke="#F765A3"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                />
              )
            })}

            {/* Step Circles */}
            {steps.map((step, index) => {
              const position = getStepPosition(step.angle)
              const isHovered = hoveredStep === step.id
              const isSelected = selectedStep === step.id

              return (
                <g key={step.id}>
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={isHovered || isSelected ? 45 : 40}
                    fill={step.colorScheme.primary}
                    stroke="white"
                    strokeWidth="4"
                    className="cursor-pointer drop-shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setSelectedStep(step.id)}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  />
                  <motion.text
                    x={position.x}
                    y={position.y - 5}
                    textAnchor="middle"
                    className="text-sm font-bold pointer-events-none"
                    fill="white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {step.id}
                  </motion.text>
                  <motion.text
                    x={position.x}
                    y={position.y + 8}
                    textAnchor="middle"
                    className="text-xs font-medium pointer-events-none"
                    fill="white"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    ÉTAPE
                  </motion.text>
                </g>
              )
            })}
          </svg>

          {/* Central Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-xl"
            style={{
              background: "linear-gradient(135deg, #F765A3 0%, #C3B1E1 100%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-white">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <h3 className="text-sm font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                MICRO-
              </h3>
              <h3 className="text-sm font-black -mt-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                NEEDLING
              </h3>
            </div>
          </motion.div>

          {/* Step Labels */}
          {steps.map((step, index) => {
            const position = getStepPosition(step.angle)
            const labelOffset = 70
            const labelAngle = (step.angle - 90) * (Math.PI / 180)
            const labelX = centerX + (radius + labelOffset) * Math.cos(labelAngle)
            const labelY = centerY + (radius + labelOffset) * Math.sin(labelAngle)

            return (
              <motion.div
                key={`label-${step.id}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer"
                style={{
                  left: labelX,
                  top: labelY,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                onClick={() => setSelectedStep(step.id)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2 flex justify-center" style={{ color: step.colorScheme.primary }}>
                  {step.icon}
                </div>
                <h4 className="text-xs font-bold text-gray-800 mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.subtitle}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Detail Panel */}
        <AnimatePresence>
          {selectedStep && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {(() => {
                const step = steps.find((s) => s.id === selectedStep)!
                return (
                  <>
                    <div
                      className="p-6 relative"
                      style={{
                        background: `linear-gradient(135deg, ${step.colorScheme.primary} 0%, ${step.colorScheme.secondary} 100%)`,
                      }}
                    >
                      <button
                        onClick={() => setSelectedStep(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <div style={{ color: "#161616" }}>{step.icon}</div>
                        </div>
                        <div>
                          <h2
                            className="text-2xl font-black text-white"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {step.title}
                          </h2>
                          <p className="text-white/90 font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-white/95 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {step.content.description}
                      </p>
                    </div>

                    <div className="p-6">
                      <div
                        className={`grid gap-4 ${step.content.details.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
                      >
                        {step.content.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="p-4 rounded-xl shadow-md"
                            style={{ backgroundColor: detail.bgColor }}
                          >
                            <h3
                              className="font-bold mb-2 text-sm"
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
                  </>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Cliquez sur une étape du cercle pour voir les détails
          </p>
        </div>
      </div>
    </div>
  )
}
