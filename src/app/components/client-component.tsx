"use client";

import React from "react";
import ServerComponentCopy from "./server-component-copy";

export interface IClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: IClientComponentProps) {
  console.log("Client Component :>> ");
  return (
    <div>
      <span>Client Component</span>

      {children}
    </div>
  );
}
