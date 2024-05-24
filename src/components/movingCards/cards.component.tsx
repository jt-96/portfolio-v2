"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: any;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, [start]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_50%,white_50%,transparent)] md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[160px] h-[100px] relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote className="flex flex-col items-center">
              <Image
                src={item.icon}
                alt={`${item.name} Icon`}
                width={64}
                height={64}
                color="#000000"
                className="p-4"
              />
              <div className="z-20 w-full flex">
                <span className="text-md leading-[1.6] text-gray-400 w-full text-center">
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
