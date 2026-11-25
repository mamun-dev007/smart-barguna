import { useState, type ReactNode } from "react";

type AutoScrollProps = {
  children: ReactNode;
  label: string;
};

export default function AutoScroll({ children, label }: AutoScrollProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="sb-autoscroll"
      data-paused={paused ? "true" : "false"}
      role="group"
      aria-label={label}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerCancel={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="sb-autoscroll-track">
        <div className="sb-autoscroll-group">{children}</div>
        <div className="sb-autoscroll-group" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
