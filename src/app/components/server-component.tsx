import React from "react";

export interface IServerComponentProps {
  children?: React.ReactNode;
}

export default function ServerComponent({ children }: IServerComponentProps) {
  console.log("Server Component :>> ");
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
