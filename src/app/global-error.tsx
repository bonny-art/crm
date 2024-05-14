"use client";

import React from "react";

export interface IGlobalErrorProps {}

export default function GlobalError({}: IGlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
