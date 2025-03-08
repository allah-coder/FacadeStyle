"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

import Link from "next/link";
import MobileMenu from "#/shared/mobile-menu";
import Settings from "#/shared/settings";
import AppLogo from "#/shared/app-logo";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./header.module.css";

function HeaderLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link href="/">
        <span
          className={
            styles.link +
            " " +
            (pathname === "/" ? styles.active : styles.disable)
          }
          style={pathname === "/" ? { color: "#FF3030" } : { color: "inherit" }}
        >
          Главная
        </span>
      </Link>
      <Link href="/company">
        <span
          className={
            styles.link +
            " " +
            (pathname === "/company" ? styles.active : styles.disable)
          }
          style={
            pathname === "/company"
              ? { color: "#FF3030" }
              : { color: "inherit" }
          }
        >
          О компании
        </span>
      </Link>
    </>
  );
}

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.appbar + " " + (scrolled ? styles.shadow : "")}>
      <div
        className={styles.toolbar}
        style={
          scrolled
            ? {
                backdropFilter: "blur(4px)",
                backgroundColor:
                  "rgba(var(--palette-background-defaultChannel) / 0.96)",
              }
            : {}
        }
      >
        <div className={styles.container}>
          <AppLogo />
          <div style={{ flexGrow: 1 }} />
          <nav className={styles.nav + " " + "subtitle2"}>
            <HeaderLinks />
          </nav>
          {isSmallScreen && <MobileMenu />}
          <Settings />
        </div>
      </div>
    </header>
  );
}
