import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center  justify-center rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-black",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        iffocus:
          " border-transparent bg-blue-400 hover:bg-blue-700 focus:ring-2",
        success:
          "border-transparent bg-green-400 text-black-foreground hover:bg-emerald-600 [&>svg]:text-success-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  capitalize?: boolean;
}

function Badge({
  className,
  variant,
  capitalize = false,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        {
          capitalize: capitalize,
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
