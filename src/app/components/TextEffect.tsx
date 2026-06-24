"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/lib/utils";

type TextEffectProps = {
  words: string;
  role: string;
  className?: string;
};

export const TextEffect = ({
                             words,
                              role,
                             className,
                           }: TextEffectProps) => {
  const [scope, animate] = useAnimate();
  const [animationComplete, setAnimationComplete] = useState(false);

  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    let mounted = true;

    setAnimationComplete(false);

    const runAnimation = async () => {
      await animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 2,
            delay: stagger(0.2),
          }
      );

      if (mounted) {
        setAnimationComplete(true);
      }
    };

    runAnimation();

    return () => {
      mounted = false;
    };
  }, [words, animate]);

  return (
      <div className={cn("font-bold", className)}>
        <div className="p-5 pt-1">
          <div className="text-white text-4xl leading-snug tracking-wide space-y-2">
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={`${word}-${idx}`}
                        initial={{ opacity: 0 }}
                        className={
                            word.replace(/[.,!?]/g, "") === "Lívia"
                                ? "text-pink"
                                : "dark:text-white text-white"
                        }
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>

            <div>
              {animationComplete && (
                  <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="font-normal uppercase text-sm text-pink"
                  >
                    {role}
                  </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};