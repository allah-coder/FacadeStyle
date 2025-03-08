"use client";

import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import AppLogo from "#/shared/app-logo";

import company from "#/public/svg/company.svg";
import home from "#/public/svg/home.svg";
import menu from "#/public/svg/menu.svg";

import styles from "./mobile-menu.module.css";

export default function MobileMenu() {
  const pathname = usePathname();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <IconButton
        className={styles.icon_button}
        onClick={() => setOpenDrawer(true)}
      >
        <Image src={menu} alt="menu" />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ className: styles.drawer }}
        style={{
          zIndex: 6,
        }}
      >
        <div className={styles.logo}>
          <AppLogo />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <ButtonBase
                  className={
                    styles.btn + " " + (pathname === "/" ? styles.active : "")
                  }
                >
                  <Image src={home} alt="home" />
                  Главная
                </ButtonBase>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <ButtonBase
                  className={
                    styles.btn +
                    " " +
                    (pathname === "/company" ? styles.active : "")
                  }
                >
                  <Image src={company} alt="company" /> О компании
                </ButtonBase>
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
