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

            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute inset-0">

                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]"
                />

                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-200px] top-[10%] h-[450px] w-[450px] rounded-full bg-purple-500/[0.04] blur-[130px]"
                />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />

            </div>

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

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
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="relative z-10 mx-auto mb-24 max-w-4xl text-center"
            >

                <div className="mb-6 flex items-center justify-center gap-4">

                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />

                    <motion.span
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                        className="text-xs font-medium uppercase tracking-[0.35em] text-orange-400"
                    >
                        Our Journey
                    </motion.span>

                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />

                </div>

                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

                    Built From an Idea.
                    <br />

                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-purple-500 bg-clip-text text-transparent">
                        Driven By Possibility.
                    </span>

                </h2>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light font-sans mx-auto mt-7 max-w-2xl">
                    Our journey is shaped by ideas, innovation and a continuous desire
                    to build technology that creates meaningful impact.
                </p>

            </motion.div>

            {/* ================================================= */}
            {/* JOURNEY CONTAINER */}
            {/* ================================================= */}

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Desktop timeline */}

                <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-500/40 to-transparent lg:block" />

                {/* ================================================= */}
                {/* JOURNEY ITEMS */}
                {/* ================================================= */}

                <div className="space-y-20 lg:space-y-28">

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
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                            >

                                {/* ================================================= */}
                                {/* DESKTOP ROW */}
                                {/* ================================================= */}

                                <div
                                    className={`flex flex-col items-stretch lg:flex-row lg:items-stretch lg:gap-16 ${reversed ? "lg:flex-row-reverse" : ""
                                        }`}
                                >

                                    {/* ================================================= */}
                                    {/* IMAGE */}
                                    {/* ================================================= */}

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
                                            duration: 0.9,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="flex w-full lg:w-1/2"
                                    >

                                        {/* THIS CONTROLS THE EXACT IMAGE HEIGHT */}

                                        <motion.div
                                            whileHover={{
                                                scale: 1.02,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                            }}
                                            className="relative min-h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#111A2B] shadow-2xl sm:min-h-[400px] lg:h-full lg:min-h-[430px]"
                                        >

                                            {/* Image */}

                                            <img
                                                src={item.image}
                                                alt={`${item.title} - Technic Technologies`}
                                                width={600}
                                                height={600}
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />

                                            {/* Dark overlay */}

                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1221]/70 via-transparent to-orange-500/[0.05]" />

                                            {/* Animated scan */}

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

                                            {/* Image number */}

                                            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">

                                                <span className="font-mono text-[10px] tracking-[0.25em] text-slate-300">
                                                    FRAME_{item.number}
                                                </span>

                                            </div>

                                            {/* Corner decoration */}

                                            <div className="absolute left-5 top-5 h-6 w-6 border-l border-t border-orange-400/60" />

                                            <div className="absolute bottom-5 right-5 h-6 w-6 border-b border-r border-purple-400/60" />

                                        </motion.div>

                                    </motion.div>

                                    {/* ================================================= */}
                                    {/* CENTER NODE */}
                                    {/* ================================================= */}

                                    <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">

                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0.15, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="absolute -inset-3 rounded-full border border-orange-500/30"
                                        />

                                        <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-orange-400/40 bg-[#0B1221]">

                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.4, 1],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                                className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.9)]"
                                            />

                                        </div>

                                    </div>

                                    {/* ================================================= */}
                                    {/* CARD */}
                                    {/* ================================================= */}

                                    <motion.div
                                        whileHover={{
                                            y: -6,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="mt-8 flex w-full lg:mt-0 lg:w-1/2"
                                    >

                                        {/*

                      IMPORTANT:
                      This card uses flex + h-full.
                      Since the parent row uses items-stretch,
                      the card becomes exactly the same height
                      as the image.

                    */}

                                        <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#111A2B]/80 p-8 backdrop-blur-xl sm:p-10 lg:p-12">

                                            {/* Animated top border */}

                                            <motion.div
                                                initial={{
                                                    width: "0%",
                                                }}
                                                whileInView={{
                                                    width: "100%",
                                                }}
                                                viewport={{
                                                    once: false,
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                }}
                                                className="absolute left-0 top-0 h-px bg-gradient-to-r from-orange-500 via-purple-500 to-transparent"
                                            />

                                            {/* Decorative circle */}

                                            <motion.div
                                                animate={{
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full border border-orange-500/[0.07]"
                                            />

                                            {/* Number + Label */}

                                            <div className="relative z-10 mb-6 flex items-center gap-4">

                                                <span className="font-mono text-sm text-orange-400">
                                                    {item.number}
                                                </span>

                                                <div className="h-px w-10 bg-white/10" />

                                                <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                                    {item.label}
                                                </span>

                                            </div>

                                            {/* Title */}

                                            <h3 className="relative z-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">

                                                {item.title}

                                            </h3>

                                            {/* Description */}

                                            <p className="text-slate-300 text-lg mb-6 leading-relaxed font-light font-sans relative z-10 mt-6 text-sm sm:text-base lg:text-lg">

                                                {item.description}

                                            </p>

                                            {/* System */}

                                            <div className="relative z-10 mt-auto pt-8">

                                                <div className="flex items-center gap-3">

                                                    <motion.span
                                                        animate={{
                                                            opacity: [0.3, 1, 0.3],
                                                            scale: [0.8, 1.2, 0.8],
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                        }}
                                                        className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                                                    />

                                                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                                        TECHNIC TECHNOLOGIES
                                                    </span>

                                                </div>

                                                <div className="mt-4 h-px w-full bg-white/[0.06]" />

                                                <div className="mt-4 flex items-center justify-between">

                                                    <span className="font-mono text-[9px] text-slate-600">
                                                        SYSTEM_{item.number}
                                                    </span>

                                                    <motion.span
                                                        animate={{
                                                            x: [0, 7, 0],
                                                        }}
                                                        transition={{
                                                            duration: 1.3,
                                                            repeat: Infinity,
                                                        }}
                                                        className="text-orange-400"
                                                    >
                                                        →
                                                    </motion.span>

                                                </div>

                                            </div>

                                        </div>

                                    </motion.div>

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

            </div>

            {/* ================================================= */}
            {/* FINAL MESSAGE */}
            {/* ================================================= */}

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
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.8,
                }}
                className="relative z-10 mx-auto mt-28 max-w-3xl text-center"
            >

                <motion.div
                    animate={{
                        width: [40, 100, 40],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                    className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                />

                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">
                    THE NEXT CHAPTER
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">

                    We build for today.

                    <span className="text-orange-400">
                        {" "}We engineer for tomorrow.
                    </span>

                </h3>

            </motion.div>

        </section>
    );
}