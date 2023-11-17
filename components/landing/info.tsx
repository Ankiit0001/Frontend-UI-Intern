"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import Image from "next/image";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const features = [
  {
    name: "It is not as easy as 1-2-3",
    description:
      "description 1",
    icon: HeartFilledIcon,
  },
  {
    name: "Old habits are hard to break",
    description:
      "description 2",
    icon: HeartFilledIcon,
  },
  {
    name: "You and your motivation dont have a long term relationship",
    description:
      "description 3",
    icon: HeartFilledIcon,
  },
  {
    name: "Books just dont offer practical solution",
    description:
      "description 4",
    icon: HeartFilledIcon,
  },
  {
    name: "Inspiration is great, but then what?",
    description:
      "description 5",
    icon: HeartFilledIcon,
  },
];

export default function Info() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const ref2 = React.useRef(null);
  const isInView2 = useInView(ref2);
  const ref3 = React.useRef(null);
  const isInView3 = useInView(ref3);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <><div className="overflow-hidden py-24 sm:py-32 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                viewport={{ once: false }}
                style={{
                  paddingLeft: 25
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
                <motion.h2
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="text-base font-semibold leading-7 text-muted-foreground"
                >
                  Wrong with self-improvement and how we are fixing it
                </motion.h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <motion.p
                    variants={FADE_UP_ANIMATION_VARIANTS}
                    className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    Self-improvement. Ugh.
                  </motion.p>
                  <motion.div
                    initial={{
                      opacity: 0
                    }}
                    ref={ref3}
                    viewport={{ once: false }}
                    animate={{
                      x: ['60vw', '30vw', '20vw', '10vw', '1vw'],
                      y: [40, 50, 40, 30, 0],
                      transition: {
                        duration: 1,
                        ease: 'linear'
                      },
                      opacity: isInView3 ? 1 : 0,
                    }}
                    style={{
                      marginLeft: '50px',
                      transform: 'rotate(-25deg)'
                    }}
                  >
                    <Image
                      src="/section-4.png"
                      alt="avatar-4"
                      width={50}
                      height={50} />
                  </motion.div>
                </div>


                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none"
                  style={{
                    paddingLeft: 25
                  }}
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.name}
                      variants={FADE_DOWN_ANIMATION_VARIANTS}
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-muted-foreground"
                          aria-hidden="true" />
                        {feature.name}
                      </dt>{" "}
                      <br />
                      <dd className="inline">{feature.description}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div><div className="mt-16 flow-root sm:mt-24">
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
              Be the best with your EQ
            </div>
            <div
              style={{
                fontSize: '18px',
                padding: '0% 14%'
              }}
            >
              Not having your own emotions under control might be holding you back.
            </div>
            <div
              style={{
                fontSize: '18px',
                padding: '0% 14%'
              }}
            >
              Additionally, not understanding those of others stops you from bring parent, friend you can be.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "show" : "hidden"}
          viewport={{ once: false }}
          style={{
            paddingLeft: 25
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginTop: '20rem'
              }}
            >
              <motion.div
                style={{
                  fontSize: '16px',
                  fontWeight: 500
                }}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                We take privacy seriously
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  marginBottom: '10px'
                }}
              >
                Before you get started
              </motion.div>
              <motion.p
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                style={{
                  textAlign: 'center',
                  lineClamp: 2,
                  marginBottom: '15px'
                }}
              >
                &quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell you which friends said what about you)$quot;
              </motion.p>
              <motion.p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >
                with love, 
                <Image
                  src={'/signature.png'}
                  alt="signature"
                  width={70}
                  height={50}
                />
              </motion.p>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                style={{
                  marginTop: '2rem',
                  marginBottom: '10px'
                }}
              >
                <Button>
                  Start a text
                </Button>
              </motion.div>
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                style={{
                  color: 'lightgray',
                  fontSize: '10px',
                  marginBottom: '20px'
                }}
              >
                Take only 5 minuts
              </motion.div>
            </div>
          </motion.div>
      </div></>
  );
}
