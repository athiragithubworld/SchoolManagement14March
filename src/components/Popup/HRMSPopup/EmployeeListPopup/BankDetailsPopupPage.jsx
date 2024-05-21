// Created by Athira
import * as React from "react";

// Component for displaying bank details
function BankDetail({ label, value }) {
  return (
    <div className="flex gap-2">
      {/* Bank detail label */}
      <div className="gap-0 my-auto text-lg text-black w-[104px]">{label}</div>
      {/* Bank detail value input */}
      <input
        type="text"
        className="justify-center p-3 w-[200px] text-base bg-white rounded-2xl shadow-primary text-neutral-400"
        placeholder={value}
      />
    </div>
  );
}

export default function BankDetailsPopupPage() {
  // Array containing bank details
  const bankDetails = [
    { label: "Bank Name", value: "State Bank Of India" },
    { label: "BankAC. No", value: "555555555" },
    { label: "IFSC Code", value: "9999999999999999" },
    { label: "Branch", value: "3218421852" },
    { label: "Bank Add.", value: "555555555" },
    { label: "CIF No", value: "9999999999999999" },
    { label: "PF. No", value: "3218421852" },
    { label: "UAN No", value: "555555555" },
    { label: "ESI No", value: "9999999999999999" },
  ];

  return (
    <main className="flex flex-col gap-2 max-md:flex-wrap">
      {/* Bank details title */}
      <h2 className="gap-0 mt-1 w-full text-lg font-bold leading-5 text-black max-md:flex-wrap max-md:max-w-full">
        Bank Details
      </h2>
      {/* Displaying first 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap">
        {bankDetails.slice(0, 3).map((detail, index) => (
          <BankDetail key={index} label={detail.label} value={detail.value} />
        ))}
      </section>
      {/* Displaying next 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap">
        {bankDetails.slice(3, 6).map((detail, index) => (
          <BankDetail key={index} label={detail.label} value={detail.value} />
        ))}
      </section>
      {/* Displaying next 3 bank details */}
      <section className="flex gap-5 justify-between  mt-3 leading-[120%] max-md:flex-wrap">
        {bankDetails.slice(6).map((detail, index) => (
          <BankDetail key={index} label={detail.label} value={detail.value} />
        ))}
      </section>
    </main>
  );
}
