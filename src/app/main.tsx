// SPDX-FileCopyrightText: 2024-present Emmanuel Roux
// SPDX-License-Identifier: MIT

import "../styles/globals.css";

import React from 'react';
import ReactDOM from 'react-dom';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}

function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div class="m-2">
      <h1>Welcome to my app</h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <ButtonDemo />
          <AccordionDemo />
        </div>
        <div> Some text </div>
      </div>
    </div>
  );
}





ReactDOM.render(<MyApp />, document.getElementById('root'));
