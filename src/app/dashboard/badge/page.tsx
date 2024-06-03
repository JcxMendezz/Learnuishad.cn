"use client";
import { Badge } from "@/components/ui/badge";
import { RocketIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="flex grid-cols-2 gap-4">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive"> Hello Error Code 404</Badge>
      <Badge variant="outline"> Hello Error Code 404</Badge>
      <Badge variant="iffocus"> Hello Error Code 404</Badge>

      <Badge capitalize variant="success">
        <RocketIcon className=" h-4 w-4 bg-emeral-400" />
        success
      </Badge>
    </div>
  );
}
