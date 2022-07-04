import React from "react";

export default function StatisticGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stats stats-vertical w-full drop-shadow lg:stats-horizontal ">
      {children}
    </div>
  );
}
