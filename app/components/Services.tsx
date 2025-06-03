"use client";
import React from "react";
import { BentoCard } from "@/components/eldoraui/bentogrid";
import { FadeDown } from "@/components/eldoraui/fadedown";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <FadeDown
        text="Why Homeowners Trust Us"
        highlight={["Trust", "Us"]}
        className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      />
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      <BentoCard
        eyebrow="Craftsmanship"
        title="Experienced Team"
        description="With years of hands-on experience in gutter installation and roofing, our skilled professionals deliver reliable craftsmanship and trusted results every time."
        graphic={
          <div className="relative h-80 w-full">
            <Image
              src="/roof-damage-prone-areas-singapore-min.jpeg"
              alt="Experienced team"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
              priority={true}
            />
          </div>
        }
        fade={["bottom"]}
        className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow="Care"
        title="Free After Service"
        description="We stand by our work even after the job is done. Enjoy complimentary after-service support to keep your gutters performing perfectly year-round."
        graphic={
          <div className="relative h-80 w-full">
            <Image
              src="/Rain-Gutter-Prices.webp"
              alt="Free After Service"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
              priority={true}
            />
          </div>
        }
        fade={["bottom"]}
        className="lg:rounded-tr-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow="Transparency"
        title="Free Estimates"
        description="Get transparent, no-obligation quotes for your gutter or roofing project—fast, accurate, and tailored to your property’s needs."
        graphic={
          <div className="relative h-80 w-full">
            <Image
              src="/coworker.jpg"
              alt="Free Estimates"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
              priority={true}
            />
          </div>
        }
        fade={["bottom"]}
        className="lg:rounded-bl-4xl lg:col-span-2"
      />
      <BentoCard
        eyebrow="Efficiency"
        title="Fast & Clean Work"
        description="We respect your time and your space. Our crew completes every job efficiently while keeping your property clean and disruption-free."
        graphic={
          <div className="relative h-80 w-full">
            <Image
              src="/g6.jpeg"
              alt="Fast & Clean Work"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
              priority={true}
            />
          </div>
        }
        fade={["bottom"]}
        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow="Trust"
        title="10 Years Warranty"
        description="Our work is built to last. We offer a 10-year warranty on all installations, giving you lasting peace of mind and unmatched protection."
        graphic={
          <div className="relative h-80 w-full">
            <Image
              src="/10-year-roofing-warranty.png"
              alt="10 Years Warranty"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-lg"
              priority={true}
            />
          </div>
        }
        className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
        fade={["bottom"]}
      />
    </div>

    </div>
  )
}

export default Services