import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "dark";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase",
        variant === "default" && "bg-primary/10 text-primary border border-primary/20",
        variant === "dark" && "bg-white/10 text-white/80 border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
