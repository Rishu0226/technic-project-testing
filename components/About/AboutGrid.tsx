"use client";
import React from "react";

const AboutGridArray = [
    {
        order: -1,
        heading: "Building Technology for",
        highlightText: "Real-World Impact",
        description:
            "TechNic Technologies builds high-quality software products and delivers reliable digital solutions across web, mobile, cloud, AI, and custom software development.",
        BtnText: "Explore Our Services",
        BtnLink: "/services",
    },
    {
        order: 1,
        heading: "Product Engineering",
        description:
            "We transform ideas into high-quality digital products designed for performance, usability, scalability, and long-term business value.",
    },
    {
        order: 2,
        heading: "Modern Technology",
        description:
            "We leverage modern web, mobile, cloud, and AI technologies to create secure, scalable, and future-ready digital solutions.",
    },
    {
        order: 3,
        heading: "Engineering Excellence",
        description:
            "Our development process emphasizes clean architecture, quality assurance, security, and maintainable code to deliver reliable production-ready solutions.",
    },
    {
        order: 4,
        heading: "AI & Automation",
        description:
            "We integrate AI and intelligent automation into products and business workflows to improve efficiency, enhance experiences, and unlock new possibilities.",
    },
    {
        order: 5,
        heading: "Built to Scale",
        description:
            "From MVPs and mobile applications to enterprise platforms, we build solutions that evolve with your business and growing user needs.",
    },
];

const AboutGrid = () => {
    return (
        <div className="mx-auto mb-12 grid w-[350px] grid-cols-1 xl:w-fit xl:grid-cols-4">
            {AboutGridArray.map((card, i) => {
                return (
                    <div
                        key={i}
                        className={`
              ${i === 0 && "xl:col-span-2 xl:h-[294px]"}
              ${card.order % 2 === 1
                                ? "h-[294px] bg-[#2D3544]"
                                : card.order % 2 === 0
                                    ? "h-[294px] bg-[#0B1221]"
                                    : "bg-transparent"
                            }
              ${card.order === 3 && "xl:col-start-2"}
            `}
                    >
                        {card.order < 0 ? (
                            <div className="flex flex-col gap-4 pb-10 xl:w-[90%] xl:pb-0">
                                <div className="text-4xl font-semibold leading-tight text-white">
                                    {card.heading}{" "}
                                    <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                                        {card.highlightText}
                                    </span>
                                </div>

                                <p className="font-medium leading-7 text-slate-400">
                                    {card.description}
                                </p>

                                <div className="mt-2 w-fit">
                                    <a
                                        href={card.BtnLink}
                                        className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
                                    >
                                        {card.BtnText}
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-full flex-col gap-8 p-8">
                                <h2 className="text-lg font-medium leading-7 text-white">
                                    {card.heading}
                                </h2>

                                <p className="font-medium leading-7 text-slate-400">
                                    {card.description}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default AboutGrid;