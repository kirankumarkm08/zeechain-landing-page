import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "framer-motion";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps
  extends Omit<ComponentPropsWithoutRef<"div">, "className"> {
  name: string;
  className: string;
  background: string;
  textPosition?: "top-left" | "top-right" | "bottom";
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <motion.div
      className={cn("grid w-full gap-6", className)}
      {...props}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  textPosition = "top-left",
  ...props
}: BentoCardProps) => {
  const textPositionClasses = {
    "top-left": "justify-start items-start",
    "top-right": "justify-start items-end",
    bottom: "justify-end items-start",
  }[textPosition];

  const motionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
    whileHover: { scale: 1.05 },
  };

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-lightgray transition-all duration-300",
        className
      )}
      {...props}
      {...motionProps}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300 group-hover:opacity-60"
        style={{ backgroundImage: `url(${background})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.div
        className={cn(
          "relative z-10 flex h-full w-full flex-col p-6",
          textPositionClasses
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.h3
          className="text-24 font-clash font-medium tracking-wide leading-relaxed bg-linear-gradient bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {name}
        </motion.h3>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
