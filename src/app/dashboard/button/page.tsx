"use client";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-8 ">
      <Button>default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost Rider</Button>
      <Button variant="link">Link </Button>
      <Button variant="outline">outline</Button>
      <Button disabled>Outline</Button>
      <Button onClick={() => console.log("Hello HP")}>Small</Button>
      <Button variant="success"> Genial Click me </Button>
      <Button Capitalize={false}> Click mee </Button>
      <Button variant="Loading">
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled size="default">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please a wait Moment{" "}
      </Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
