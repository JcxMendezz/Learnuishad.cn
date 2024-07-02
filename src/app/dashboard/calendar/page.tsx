"use client";

import { Calendar } from "@/components/ui/calendar";
import * as React from "react";
import { useState } from "react";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [MultipleDates, setMultipleDate] = useState<Date[] | undefined>([]);

  const SmallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex-col sm: flex-wrap sm:flex sm:flex-row gap-5 ">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={MultipleDates}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="text text-3xl">
          {" "}
          Información de lo que vamos a realizar
        </h1>
        <div className="border-b"> Hola </div>
        <p>{SmallDate}</p>
        <p>{MultipleDates?.map((date) => date.toLocaleDateString()).join(",")}</p>
      </div>
    </div>
  );
}
