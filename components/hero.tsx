"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import { useScrollAnimation } from "@/lib/use-scroll-animation"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Suspense } from "react"

// Dynamically import 3D component to avoid SSR issues
const SalesforceCloud3D = dynamic(() => import("./salesforce-cloud-3d"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/20" />
})

export default function Hero() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      {/* 3D Salesforce Cloud Background */}
      <Suspense fallback={null}>
        <SalesforceCloud3D />
      </Suspense>

      {/* Edgy gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan-500/10 opacity-60 pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(1,118,211,0.15),transparent_50%)] pointer-events-none" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ top: '20%', left: '15%', animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ top: '40%', left: '90%', animationDelay: '2s', animationDuration: '3.5s' }} />
        <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ top: '80%', left: '20%', animationDelay: '1.5s', animationDuration: '4.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-sm font-semibold text-cyan-400 mb-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  {t("hello")}
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-balance leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-foreground via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                  {t("heroTitle")}
                </span>
              </motion.h1>
            </div>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t("heroDescription")}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {[t("accentureBadge"), t("experienceBadge"), t("englishBadge")].map((badge, i) => (
                <motion.span
                  key={badge}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 rounded-full font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm shadow-lg shadow-cyan-500/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,212,255,0.4)" }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-cyan-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,212,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t("viewWork")}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-cyan-400/50 rounded-xl font-semibold text-cyan-300 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.8)", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                {t("getInTouch")}
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square group">
              {/* Edgy glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main card with enhanced styling */}
              <motion.div
                className="relative w-full aspect-square bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-3xl border border-cyan-400/30 backdrop-blur-xl flex items-center justify-center p-8 shadow-2xl shadow-cyan-500/20"
                whileHover={{
                  borderColor: "rgba(0,212,255,0.6)",
                  boxShadow: "0 0 60px rgba(0,212,255,0.4)",
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    className="flex justify-center mb-4 relative"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse opacity-60" />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src="/logos/salesforce.jpeg"
                        alt="Salesforce CRM platform logo - Jeffrey Dietz specializes in Salesforce development, Apex, Lightning Web Components, and enterprise integrations"
                        width={120}
                        height={120}
                        className="object-contain relative z-10 drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-foreground font-semibold text-lg bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {t("salesforceEcosystem")}
                  </motion.p>
                  <div className="flex flex-wrap gap-2 justify-center px-4">
                    {["Apex", "LWC", "Flows", "APIs", "Integration"].map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-cyan-400/10 backdrop-blur-sm rounded-full font-medium border border-cyan-400/30 text-cyan-300 cursor-default shadow-lg shadow-cyan-500/10"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                        whileHover={{
                          scale: 1.15,
                          borderColor: "rgba(0,212,255,0.8)",
                          boxShadow: "0 0 15px rgba(0,212,255,0.5)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
