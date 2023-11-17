"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Blockquote() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="px-6 lg:px-8">
      <div className="text-left flex items-center justify-start"
        style={{
          background: '#FEF7F1',
          borderRadius: 20,
          padding: 8,
          marginTop: '14rem'
        }}
      >
        <motion.div
          initial="hidden"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          className="flex items-center justify-around"
          style={{
            flexDirection: 'column'
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div
            style={{
              width: '100%',
              paddingLeft: 25
            }}
          >
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-lg leading-8"
            >
              Built out of Frustation
            </motion.p>

            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Meet the ahead app
            </motion.h1>
          </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                <Image 
                  src="/section-3.png"
                  alt="hero-section-3"
                  width={500}
                  height={500}
                />
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mt-10 flex items-center justify-left gap-x-6 "
                style={{
                  paddingLeft: 25,
                  width: '40%'
                }}
              >
                A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                <br/>
                Think of it as a pocket cheer leader towards the better, more fulfilling.
              </motion.div>
            </div>
        </motion.div>
      </div>
      </div>
  );
}
