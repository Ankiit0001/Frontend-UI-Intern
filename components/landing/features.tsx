"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import variants from "./variant-carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
// import { useInView } from "react-intersection-observer";

export default function Features() {
  //   const { ref: refAbout, inView: inViewAbout } = useInView({
  //     triggerOnce: false,
  //   });
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_LEFT_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 20, transition: { type: "spring" } },
  };

  const [width, setWidth] = useState(0);
  const [hovered, setHoverd] = useState<number>(-1);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(carousel.current !== null)
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: false }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="mt-12 px-10 sm:mt-56 lg:px-8 flex items-center justify-start">
        <div className="lg:text-left">
          <motion.p
            variants={FADE_LEFT_ANIMATION_VARIANTS}
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Does this sound familiar....
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            x: ['40vw', '30vw', '20vw', '10vw', '1vw'],
            y: [40, 50, 40, 30, 0],
            transition: {
              duration: 1,
              ease: 'linear'
            },
            opacity: 1
          }}
          style={{
            marginLeft: '50px',
            transform: 'rotate(-25deg)'
          }}
        >
          <Image 
            src="/section-2.png"
            alt="avatar-2"
            width={50}
            height={50}
          />
        </motion.div>
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            ref={carousel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              padding: '0% 2%'
            }}
          >
            <div className="">
              <motion.div
                style={{
                  display: 'flex',
                  marginTop: '40px',
                  cursor: "grab"
                }}
                drag="x"
                dragConstraints={{right: 0, left: -width}}
              >
                {variants.map((d,i) => {
                  return (
                    <motion.div
                      style={{
                        minHeight: '15rem',
                        minWidth: '30%',
                        padding: '10px'
                      }}
                    >
                    <Card key={i} style={{
                      backgroundColor: `${d.color}`,
                      borderRadius: 20,
                      height: '100%',
                      width: '100%',
                      transform: hovered == i ? 'rotate(-25deg)' : 'rotate(0deg)',
                      transition: 'transform 1s ease-in'
                    }}
                    onMouseEnter={() => {
                      setHoverd(i)
                    }}
                    onMouseLeave={() => {
                      setHoverd(-1)
                    }}
                    >
                      <CardContent style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "flex-start",
                        flexDirection: 'column'
                      }}>
                        <div style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          flexDirection: 'column'
                        }}>
                          <span role="img">
                            {d.emoji}
                          </span>
                          {d.content}
                        </div>
                        <div>
                          {d.description}
                        </div>
                      </CardContent>
                    </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
