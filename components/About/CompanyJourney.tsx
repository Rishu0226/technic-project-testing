"use client";

import React from "react";
import { motion } from "framer-motion";

const journeyData = [
    {
        number: "01",
        label: "OUR FOUNDING STORY",
        title: "It Started With an Idea",
        description:
            "Technic Technologies was founded with a simple belief — technology should solve real problems. We bring together engineering, creativity, and innovation to transform ambitious ideas into practical digital solutions.",
        image:
            "https://res.cloudinary.com/dgd3tfqgp/image/upload/f_auto,q_auto,w_600/v1788963580/journey1_pp10uj.png",
    },
    {
        number: "02",
        label: "OUR MISSION",
        title: "Building Technology That Matters",
        description:
            "Our mission is to transform complex challenges into simple, powerful digital experiences. From web and mobile applications to AI and cloud solutions, we build technology around real business needs.",
        image:
            "https://res.cloudinary.com/dgd3tfqgp/image/upload/f_auto,q_auto,w_600/v1788963575/journey2_fzfvub.png",
    },
    {
        number: "03",
        label: "OUR VISION",
        title: "Engineering What Comes Next",
        description:
            "We envision a future where technology continuously creates new possibilities. By exploring AI, automation, cloud and emerging technologies, we aim to build products that help businesses evolve and grow.",
        image:
            "https://res.cloudinary.com/dgd3tfqgp/image/upload/f_auto,q_auto,w_600/v1788963574/journey3_vmlwud.png",
    },
];

export default function CompanyJourney() {
    return (
        <section className="relative overflow-hidden bg-[#0B1221] px-6 py-24 sm:px-10 lg:px-16">

            {/* Background glow */}

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]"
            />

            {/* Heading */}

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto mb-24 max-w-3xl text-center"
            >
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-orange-400">
                    Our Journey
                </p>

                <h2 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                    Built From an Idea.
                    <br />

                    <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                        Driven By Possibility.
                    </span>
                </h2>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light font-sans mx-auto mt-6 max-w-2xl">
                    Our journey is shaped by ideas, innovation and a continuous desire
                    to build technology that creates meaningful impact.
                </p>
            </motion.div>

            {/* Journey */}

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Center line */}

                <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-orange-500/0 via-orange-500/50 to-purple-500/0 lg:block" />

                <div className="space-y-20 lg:space-y-32">

                    {journeyData.map((item, index) => {
                        const reversed = index % 2 !== 0;

                        return (
                            <motion.div
                                key={item.number}
                                initial={{
                                    opacity: 0,
                                    y: 80,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: false,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                }}
                                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${reversed ? "lg:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* IMAGE */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: reversed ? 80 : -80,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: false,
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative flex w-full items-center justify-center lg:w-1/2"
                                >

                                    {/* Glow */}

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.08, 1],
                                            opacity: [0.2, 0.4, 0.2],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[70px]"
                                    />

                                    {/* Image */}

                                    <motion.div
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        whileHover={{
                                            scale: 1.04,
                                            rotateY: 4,
                                        }}
                                        className="relative z-10 h-[280px] w-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#111A2B] shadow-2xl sm:h-[340px] sm:w-[340px]"
                                    >

                                        <img
                                            src={item.image}
                                            alt={`${item.title} - Technic Technologies`}
                                            width={600}
                                            height={600}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover"
                                        />

                                        {/* Overlay */}

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1221]/60 via-transparent to-orange-500/5" />

                                        {/* Scan animation */}

                                        <motion.div
                                            animate={{
                                                y: ["-100%", "400%"],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="pointer-events-none absolute left-0 top-0 h-1/3 w-full bg-gradient-to-b from-transparent via-orange-400/20 to-transparent"
                                        />

                                    </motion.div>

                                    {/* Decorative ring */}

                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-orange-500/20 sm:h-[400px] sm:w-[400px]"
                                    />

                                </motion.div>

                                {/* CARD */}

                                <motion.div
                                    whileHover={{
                                        y: -8,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="w-full lg:w-1/2"
                                >

                                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111A2B]/80 p-8 backdrop-blur-xl sm:p-10">

                                        {/* Top line */}

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: false }}
                                            transition={{
                                                duration: 1.2,
                                            }}
                                            className="absolute left-0 top-0 h-px bg-gradient-to-r from-orange-500 via-purple-500 to-transparent"
                                        />

                                        {/* Number */}

                                        <div className="mb-6 flex items-center gap-4">

                                            <span className="font-mono text-sm text-orange-400">
                                                {item.number}
                                            </span>

                                            <div className="h-px w-10 bg-white/10" />

                                            <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                                {item.label}
                                            </span>

                                        </div>

                                        {/* Title */}

                                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                                            {item.title}
                                        </h3>

                                        {/* Description */}

                                        <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light font-sans mt-6 text-sm sm:text-base">
                                            {item.description}
                                        </p>

                                        {/* Bottom system */}

                                        <div className="mt-8 flex items-center gap-2">

                                            <motion.span
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                                className="h-2 w-2 rounded-full bg-orange-400"
                                            />

                                            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                                TECHNIC TECHNOLOGIES
                                            </span>

                                        </div>

                                    </div>

                                </motion.div>

                            </motion.div>
                        );
                    })}

                </div>
            </div>

            {/* Bottom */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: false,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="relative z-10 mx-auto mt-28 max-w-3xl text-center"
            >

                <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
                    THE NEXT CHAPTER
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    We build for today.
                    <span className="text-orange-400"> We engineer for tomorrow.</span>
                </h3>

            </motion.div>

        </section>
    );
}