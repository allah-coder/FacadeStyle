"use client";

import { BProgress } from "@bprogress/core";
import { useEffect } from "react";

BProgress.configure({
  minimum: 0,
  maximum: 2,
  showSpinner: false,
});

export default function BProgressHandler() {
  useEffect(() => {
    const range =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight +
      335;

    function onScroll() {
      BProgress.set(window.scrollY / range);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      BProgress.set(0);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
