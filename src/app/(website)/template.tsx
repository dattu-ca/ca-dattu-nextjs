"use client"
import { motion } from "framer-motion"
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "just",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
}