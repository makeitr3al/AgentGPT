import FadeIn from "../motions/FadeIn";
import BannerBadge from "../BannerBadge";
import clsx from "clsx";
import PrimaryButton from "../PrimaryButton";
import TextButton from "../TextButton";
import Backing from "./Backing";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      <div className="z-10 col-span-1">
        <FadeIn duration={1.5} delay={0}>
          <div className="mb-2">
            <BannerBadge href="https://calendly.com/reworkdai/enterprise-customers" target="_blank">
              <span className="sm:hidden">Shape AI agents for your business</span>
              <span className="hidden sm:inline">
                Shape the future of AI agents for your business
              </span>
            </BannerBadge>
          </div>
          <h1
            className={clsx(
              "pb-2 text-left font-normal tracking-[.09rem]",
              "text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-white to-transparent"
            )}
          >
            <div>
              AI Agents at
              <br />
              Your Fingertips.
            </div>
          </h1>
          <div className="w-4/5">
            <p
              className={clsx(
                "my-3 inline-block w-full font-inter",
                "text-left align-top font-light leading-[22px]",
                "tracking-[.08rem]",
                "bg-gradient-to-r bg-clip-text text-transparent",
                "from-white via-white via-50% to-neutral-600"
              )}
            >
              Create and deploy AI agents in the web in seconds. Simply give them a name and goal.
              Then experience a new way to accomplish any objective.
            </p>
          </div>
          <PrimaryButton
            onClick={() => {
              router.push("/").catch(console.error);
            }}
          >
            Get started
          </PrimaryButton>
        </FadeIn>
      </div>

      <FadeIn
        initialY={50}
        duration={1.5}
        className="absolute bottom-10 right-0 z-10 hidden w-screen justify-center lg:flex"
      >
        <Backing />
      </FadeIn>
    </div>
  );
};

export default Hero;
