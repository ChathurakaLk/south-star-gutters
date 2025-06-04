"use client";
import React from "react";
import { BentoCard } from "@/components/eldoraui/bentogrid";
import { FadeDown } from "@/components/eldoraui/fadedown";
import Image from "next/image";
import { services } from "@/data";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <FadeDown
        text="Why Homeowners Trust Us"
        highlight={["Trust", "Us"]}
        className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      />
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
       {services.map((service, index) => (
        <BentoCard
          key={index}
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.description}
          graphic={
            <div className="relative h-80 w-full">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-lg"
                priority={index < 3}
              />
            </div>
          }
          fade={
            Array.isArray(service.fade)
              ? service.fade.filter((f) => f === "top" || f === "bottom")
              : []
          }
          className={service.className}
        />
      ))}
    </div>

    </div>
  )
}

export default Services