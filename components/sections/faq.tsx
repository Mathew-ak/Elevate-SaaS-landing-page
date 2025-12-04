"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free account and you can start using Elevate immediately. No credit card required. Our onboarding guide will walk you through everything.",
  },
  {
    question: "Can I change my plan anytime?",
    answer:
      "You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately and we handle billing adjustments automatically.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We use bank-level encryption, regular security audits, and comply with GDPR, SOC 2, and industry standards. Your data is always protected and backed up.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes! We offer email support for all plans, priority support for Professional, and dedicated 24/7 support for Enterprise customers.",
  },
  {
    question: "Can I import my existing data?",
    answer:
      "Of course! We support importing from all major platforms. Our migration team can help ensure a smooth transition with zero data loss.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes, our REST API is available for Professional and Enterprise plans. Full documentation and SDKs are provided.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about Elevate.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-card/50 border-t border-border text-muted-foreground">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
