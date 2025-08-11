"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface StepProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  isLast?: boolean
  colorScheme: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary"
}

const colorSchemes = {
  primary: {
    background: "linear-gradient(135deg, #000435 0%, #4A148C 100%)",
    border: "#000435",
    text: "#FFFFFF",
  },
  secondary: {
    background: "linear-gradient(135deg, #4A148C 0%, #7B1FA2 100%)",
    border: "#4A148C",
    text: "#FFFFFF",
  },
  tertiary: {
    background: "linear-gradient(135deg, #7B1FA2 0%, #9C27B0 100%)",
    border: "#7B1FA2",
    text: "#FFFFFF",
  },
  quaternary: {
    background: "linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)",
    border: "#9C27B0",
    text: "#FFFFFF",
  },
  quinary: {
    background: "linear-gradient(135deg, #BA68C8 0%, #CF9FFF 100%)",
    border: "#BA68C8",
    text: "#000435",
  },
}

const Step = ({ title, subtitle, children, isLast = false, colorScheme }: StepProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const stepRef = useRef<HTMLDivElement>(null)
  const colors = colorSchemes[colorScheme]

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <motion.div
        ref={stepRef}
        className="w-full border-2 rounded-lg shadow-md overflow-hidden"
        style={{ borderColor: colors.border }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 4px 12px rgba(0, 4, 53, 0.25)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      >
        <div
          className="cursor-pointer p-3 flex flex-col items-center justify-center transition-all duration-200 ease-out"
          style={{ background: colors.background }}
          onClick={handleToggle}
        >
          <h2
            className="text-sm md:text-base font-black text-center mb-1 transition-all duration-200"
            style={{
              color: colors.text,
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-center font-bold text-xs transition-all duration-200"
              style={{
                color: colors.text,
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              {subtitle}
            </p>
          )}
          <motion.button
            className="mt-2 p-1 rounded-full transition-all duration-200 hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
              <ChevronDown size={16} style={{ color: colors.text }} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <motion.div
                className="p-3 border-t-2"
                style={{ borderColor: colors.border }}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.2 }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {!isLast && (
        <motion.div
          className="flex justify-center my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <motion.path
              d="M15 5 L15 25 M10 20 L15 25 L20 20"
              stroke="#000435"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
    </>
  )
}

const InfoCard = ({ title, content, bgColor }: { title: string; content: string; bgColor: string }) => (
  <motion.div
    className="p-3 rounded-lg shadow-sm"
    style={{ backgroundColor: bgColor }}
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 4px 12px rgba(0, 4, 53, 0.15)",
      transition: { duration: 0.15, ease: "easeOut" },
    }}
  >
    <h3
      className="font-bold mb-2 text-xs md:text-sm transition-colors duration-150"
      style={{
        color: "#000435",
        fontFamily: "Quicksand, sans-serif",
      }}
    >
      {title}
    </h3>
    <p
      className="text-xs leading-relaxed transition-colors duration-150"
      style={{
        color: "#000435",
        fontFamily: "Quicksand, sans-serif",
      }}
    >
      {content}
    </p>
  </motion.div>
)

export default function MicroneedlingFlowchart() {
  useEffect(() => {
    const scrollbarStyles = `
      .scrollbar-custom::-webkit-scrollbar {
        width: 12px;
      }
      
      .scrollbar-custom::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
        margin: 10px;
      }
      
      .scrollbar-custom::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #000435 0%, #CF9FFF 100%);
        border-radius: 10px;
        border: 2px solid #f1f1f1;
      }
      
      .scrollbar-custom::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #000435 0%, #9C27B0 100%);
        box-shadow: 0 0 10px rgba(0, 4, 53, 0.5);
      }
      
      .scrollbar-custom {
        scrollbar-width: thin;
        scrollbar-color: #000435 #f1f1f1;
      }
    `

    const styleElement = document.createElement("style")
    styleElement.textContent = scrollbarStyles
    document.head.appendChild(styleElement)

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-custom">
      <div
        className="p-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #000435 0%, #CF9FFF 100%)" }}
      >
        <h2
          className="text-lg md:text-xl font-bold text-white"
          style={{
            fontFamily: "Quicksand, sans-serif",
          }}
        >
          RÉCAPITULATIF : GESTION EFFICACE DES RENDEZ-VOUS
        </h2>
      </div>

      <div className="p-4 space-y-2">
        <Step title="1 Préparer les outils nécessaires" colorScheme="primary">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Actions essentielles
              </h4>
              <InfoCard title="" content="Préparer le poste téléphonique" bgColor="#E8EAF6" />
              <InfoCard title="" content="Vérifier l'agenda, le répertoire, la brochure" bgColor="#E8EAF6" />
              <InfoCard title="" content="Préparer un stylo ou crayon" bgColor="#E8EAF6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Outils et supports
              </h4>
              <InfoCard title="" content="Agenda papier ou logiciel" bgColor="#F3E5F5" />
              <InfoCard title="" content="Répertoire clients" bgColor="#F3E5F5" />
              <InfoCard title="" content="Brochure de soins" bgColor="#F3E5F5" />
            </div>
          </div>
        </Step>

        <Step title="2 Adopter une posture professionnelle" colorScheme="secondary">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Actions essentielles
              </h4>
              <InfoCard title="" content="Être accueillant, précis et ferme" bgColor="#E8EAF6" />
              <InfoCard title="" content="Garder une posture droite, voix Claire" bgColor="#E8EAF6" />
              <InfoCard
                title=""
                content="Arrêter toute autre activité pendant la prise de rendez-vous"
                bgColor="#E8EAF6"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Outils et supports
              </h4>
              <InfoCard title="" content="Règles de communication professionnelle" bgColor="#F3E5F5" />
            </div>
          </div>
        </Step>

        <Step title="3 Rendre la prise de rendez-vous flexible" colorScheme="tertiary">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Actions essentielles
              </h4>
              <InfoCard title="" content="Coordonner les soins et les ressources" bgColor="#E8EAF6" />
              <InfoCard title="" content="Adapter les horaires selon les disponibilités" bgColor="#E8EAF6" />
              <InfoCard title="" content="Éviter les pertes de temps" bgColor="#E8EAF6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Outils et supports
              </h4>
              <InfoCard title="" content="Agenda flexible" bgColor="#F3E5F5" />
              <InfoCard title="" content="Logiciel de gestion" bgColor="#F3E5F5" />
            </div>
          </div>
        </Step>

        <Step title="4 Réussir la prise de rendez-vous" colorScheme="quaternary">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Actions essentielles
              </h4>
              <InfoCard title="" content="Vérifier les disponibilités de cabines et personnel" bgColor="#E8EAF6" />
              <InfoCard title="" content="Confirmer le soin, la durée, les coordonnées client" bgColor="#E8EAF6" />
              <InfoCard title="" content="Noter tous les détails correctement" bgColor="#E8EAF6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Outils et supports
              </h4>
              <InfoCard title="" content="Agenda ou logiciel" bgColor="#F3E5F5" />
              <InfoCard title="" content="Répertoire client" bgColor="#F3E5F5" />
              <InfoCard title="" content="Fiche de réservation" bgColor="#F3E5F5" />
            </div>
          </div>
        </Step>

        <Step title="5 Établir un planning efficace" colorScheme="quinary" isLast={true}>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Actions essentielles
              </h4>
              <InfoCard
                title=""
                content="Planifier en tenant compte des horaires, soins, personnel"
                bgColor="#E8EAF6"
              />
              <InfoCard title="" content="Répartir les soins de façon équilibrée" bgColor="#E8EAF6" />
              <InfoCard title="" content="Laisser des marges pour imprévus" bgColor="#E8EAF6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-gray-800" style={{ fontFamily: "Quicksand, sans-serif" }}>
                Outils et supports
              </h4>
              <InfoCard title="" content="Planning structuré" bgColor="#F3E5F5" />
              <InfoCard title="" content="Agenda/logiciel mis à jour" bgColor="#F3E5F5" />
            </div>
          </div>
        </Step>
      </div>
    </div>
  )
}
