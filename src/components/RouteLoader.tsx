"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/basePath";

type Phase = "hidden" | "show" | "fade";

function isModifiedClick(e: MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function findInternalHrefFromClickTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  const a = target.closest("a[href]");
  if (!a) return null;

  const href = a.getAttribute("href");
  if (!href) return null;

  // Ignore external, hash-only, and special protocols
  if (href.startsWith("#")) return null;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  if (href.startsWith("http://") || href.startsWith("https://")) return null;
  if (href.startsWith("//")) return null;

  const targetAttr = a.getAttribute("target");
  if (targetAttr && targetAttr !== "_self") return null;

  const rel = (a.getAttribute("rel") || "").toLowerCase();
  if (rel.includes("external")) return null;

  return href;
}

export default function RouteLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("hidden");
  const lastNavRef = useRef<number>(0);

  // Show immediately on internal link click (so it appears even for instant navigations)
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (isModifiedClick(e)) return;
      const href = findInternalHrefFromClickTarget(e.target);
      if (!href) return;

      // If already on same path, don't flash loader
      const nextPath = href.split("?")[0] || href;
      if (nextPath === pathname) return;

      lastNavRef.current = Date.now();
      setPhase("show");
    };

    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, [pathname]);

  // When route changes (navigation completed), fade out smoothly
  useEffect(() => {
    if (phase === "hidden") return;

    const navAge = Date.now() - lastNavRef.current;
    const minVisibleMs = 50; // prevents a flash and shows logo for exactly 1 second
    const remaining = Math.max(0, minVisibleMs - navAge);

    const t = window.setTimeout(() => setPhase("fade"), remaining);
    return () => window.clearTimeout(t);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // After fade finishes, fully hide
  useEffect(() => {
    if (phase !== "fade") return;
    const t = window.setTimeout(() => setPhase("hidden"), 350);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  const fading = phase === "fade";

  return (
    <div className={`jobiho-route-loader ${fading ? "is-fading" : "is-showing"}`}>
      <div className="jobiho-loading-center">
        <div className="jobiho-logo-rotate">
          <Image
            src={asset("/jobiho%20only%20logo.png")}
            alt="Jobiho"
            width={120}
            height={120}
            priority
            style={{ width: 'auto', height: 'auto' }}
            className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}

