"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function IntroText() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-left flex items-center justify-start"
        style={{
          background: '#EFECFF',
          borderRadius: 20,
          padding: 8
        }}
      >
        <motion.div
          initial="hidden"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          className="flex items-center justify-around"
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
              paddingLeft: 25
            }}
          >
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-6 text-lg leading-8"
            >
              Ahead app
            </motion.p>

            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Mastering your life by mastering your emotions
            </motion.h1>

            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="mt-10 flex items-center justify-left gap-x-6 "
            >
              <Link href="/text-variants" className="z-50">
                <div className="bg-black text-white" 
                  style={{
                      borderRadius: 8,
                      display: "flex",
                      alignItems: 'center',
                      padding: 10
                    }}
                >
                  <div>
                    <Image
                      src="/apple-icon.png"
                      width={32}
                      height={32}
                      alt="icon"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col p-2">
                    <span style={{
                      fontSize: '12px'
                    }}>
                      Download on the 
                    </span>
                    <span style={{
                      fontSize: '20px'
                    }}>
                      App Store
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Image 
              src="/hero-1.png"
              alt="hero-section-1"
              width={800}
              height={800}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-16 flow-root sm:mt-24">
        <motion.div
          className="rounded-md"
          initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
          animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr'
            }}
          >
            <div
              style={{
                fontSize: '30px',
                fontWeight: '600',
                padding: '0% 10%'
              }}
            >
              EQ beats IQ
            </div>
            <div
              style={{
                fontSize: '18px',
                padding: '0% 14%'
              }}
            >
              People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
            </div>
            <div
              style={{
                fontSize: '18px',
                padding: '0% 14%'
              }}
            >
              They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
