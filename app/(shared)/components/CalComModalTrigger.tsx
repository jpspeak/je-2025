"use client";

import React, { ComponentProps } from "react";
import { Button, ButtonProps } from "./ui/button";
import CalComModal from "./CalComModal";
import { cn } from "../lib/utils";

function CalComModalTrigger(
  props: ComponentProps<"button"> & ButtonProps & { containerclass?: string }
) {
  return (
    <CalComModal.Trigger className={props.containerclass}>
      <Button {...props} className={cn("w-full lg:w-max", props.className)}>
        {props.children}
      </Button>
    </CalComModal.Trigger>
  );
}

export default CalComModalTrigger;
