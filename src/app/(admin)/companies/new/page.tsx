"use client";

import CompanyForm from "@/app/components/company-form";
import React from "react";

export interface IPageProps {}

export default function Page(props: IPageProps) {
  return (
    <div className="py-6 px-10 ">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
