"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        className="h-2 w-full"
        indicatorColor={cn({
          "bg-red-500": progress < 40,
          "bg-yellow-500": progress >= 41 && progress < 70,
          "bg-green-500": progress >= 71,
        })}
      />
    </div>
  );
}
