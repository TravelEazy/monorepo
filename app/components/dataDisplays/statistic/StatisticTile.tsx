import React from "react";

export default function StatisticTile({
  title,
  stat,
  description,
}: {
  title: string;
  stat: string;
  description?: string;
}) {
  return (
    <div className="stat">
      <div className="stat-title font-bold">{title}</div>
      <div className="stat-value">{stat}</div>
      {description && <div className="stat-desc font-bold">{description}</div>}
    </div>
  );
}
