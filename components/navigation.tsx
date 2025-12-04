"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-primary">
          Elevate
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Product", "Customers", "Pricing", "Resources"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ color: "#6366f1" }}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Log in</Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Free</Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
