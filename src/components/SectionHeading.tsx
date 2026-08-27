import { type ReactNode } from "react";

export default function SectionHeading({ index, label, action }: { index: string; label: string; action?: ReactNode }) {
  return <div className="section-heading"><span>{index} / {label}</span>{action}</div>;
}
