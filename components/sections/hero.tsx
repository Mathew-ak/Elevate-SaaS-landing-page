"use client"

import { motion } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-foreground">New: AI-powered insights</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6"
          >
            Supercharge your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              team's productivity
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamline workflows, collaborate seamlessly, and deliver results faster. Trusted by teams worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline">
                Watch demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust message */}
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground mt-8">
            Trusted by 10,000+ companies
          </motion.p>

          {/* Company logos */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mt-4 flex-wrap">
            {["Netflix", "Stripe", "Figma", "Notion", "Linear"].map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.1 }}
                className="text-xs font-semibold text-muted-foreground opacity-60"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating card animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="text-center text-sm text-muted-foreground">↓ Scroll to explore</div>
      </motion.div>
    </section>
  )
}
