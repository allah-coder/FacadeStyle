import ButtonBase from "@mui/material/ButtonBase";
import Badge from "@mui/material/Badge";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import Header from "#/shared/header";
import Footer from "#/shared/footer";
import Form from "#/shared/form";

import BProgressHandler from "#/shared/utils/bprogress-handler";

import development from "#/public/svg/ic-development.svg";
import brand from "#/public/svg/ic-make-brand.svg";
import design from "#/public/svg/ic-design.svg";
import arrows from "#/public/svg/arrows.svg";
import plan from "#/public/images/plan.jpg";
import svc1 from "#/public/images/svc1.jpg";
import svc2 from "#/public/images/svc2.jpg";
import svc3 from "#/public/images/svc3.jpg";

import styles from "./page.module.css";

export const metadata = {
  title: "FacadeStyle — современная строительная компания",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero + " " + styles.section}>
          <h1 className={styles.h1}>
            <span className={styles.h1_shadow_span}>Начните постройку</span>
            своего фасада с<span className={styles.h1_span}>FacadeStyle</span>
          </h1>
          <p className={styles.h1_p + " " + "body2"}>
            Современная строительная компания, которая поможет создать
            качественные проекты для вашего комфорта.
          </p>
          <div className={styles.actions}>
            <Link href="/#form">
              <ButtonBase className={styles.action}>
                <span
                  className={styles.mask_span}
                  style={{
                    color: "var(--palette-primary-main)",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="none"
                      width="100%"
                      height="100%"
                      rx="30%"
                      ry="30%"
                    ></rect>
                  </svg>
                  <span className={styles.span} />
                </span>
                <span
                  className={styles.mask_span}
                  style={{
                    transform: "scale(-1, -1)",
                    color: "var(--palette-warning-main)",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    style={{ position: "absolute" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="none"
                      width="100%"
                      height="100%"
                      rx="30%"
                      ry="30%"
                    ></rect>
                  </svg>
                  <span className={styles.span} />
                </span>
                <Badge
                  variant="dot"
                  slotProps={{ badge: { className: styles.badge } }}
                >
                  <Icon
                    width={24}
                    icon="fluent:mail-24-filled"
                    style={{ marginLeft: -4, marginRight: 8 }}
                  />
                </Badge>
                Оставить заявку
              </ButtonBase>
            </Link>
            <Link href="https://www.instagram.com/facadestyle/" target="_blank">
              <ButtonBase className={styles.instagram}>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  style={{ marginLeft: -4, marginRight: 8 }}
                >
                  <path
                    d="M22.437 7.67096C22.3859 6.55328 22.2084 5.78997 21.9488 5.12223C21.6852 4.42158 21.2719 3.78688 20.7377 3.26241C20.2132 2.72817 19.5785 2.31476 18.8779 2.05101C18.2099 1.79158 17.4468 1.61423 16.3292 1.56345C15.2094 1.51218 14.8516 1.5 12.0001 1.5C9.14852 1.5 8.79073 1.51218 7.67096 1.56316C6.55328 1.61423 5.79018 1.79175 5.12223 2.05129C4.42156 2.31493 3.78685 2.72826 3.26237 3.26245C2.72813 3.78686 2.31472 4.4215 2.05097 5.12211C1.79154 5.79005 1.61419 6.55332 1.56341 7.67084C1.51218 8.79073 1.5 9.14835 1.5 11.9999C1.5 14.8516 1.51218 15.2094 1.56345 16.3291C1.61439 17.4467 1.79191 18.2099 2.05146 18.8779C2.31509 19.5785 2.7284 20.2132 3.26257 20.7376C3.78701 21.2718 4.4217 21.6851 5.12236 21.9487C5.79018 22.2084 6.55344 22.3857 7.67112 22.4368C8.79106 22.4879 9.14864 22.5 12.0002 22.5C14.8518 22.5 15.2096 22.4879 16.3293 22.4368C17.447 22.3857 18.2101 22.2084 18.8781 21.9487C19.5756 21.6789 20.209 21.2665 20.7378 20.7377C21.2666 20.2089 21.6791 19.5754 21.9488 18.8779C22.2085 18.2099 22.3859 17.4467 22.437 16.3292C22.4879 15.2092 22.5001 14.8516 22.5001 12.0001C22.5001 9.14835 22.4879 8.79073 22.437 7.67096ZM20.5469 16.2432C20.5003 17.2669 20.3292 17.8229 20.1855 18.1928C20.0108 18.6457 19.7432 19.057 19.4 19.4002C19.0568 19.7434 18.6455 20.011 18.1927 20.1856C17.8227 20.3294 17.2668 20.5005 16.243 20.5471C15.1361 20.5977 14.8039 20.6083 12.0001 20.6083C9.19614 20.6083 8.86415 20.5977 7.75701 20.5471C6.73342 20.5005 6.17749 20.3294 5.80736 20.1856C5.35132 20.0173 4.93879 19.7488 4.6001 19.4001C4.25133 19.0614 3.98291 18.6489 3.81457 18.1928C3.67085 17.8229 3.49973 17.2669 3.45309 16.2432C3.40264 15.1361 3.3919 14.8039 3.3919 12.0003C3.3919 9.19642 3.40264 8.86448 3.45309 7.75717C3.49985 6.73342 3.67085 6.17745 3.81457 5.80753C3.98296 5.35144 4.25138 4.93887 4.6001 4.6001C4.93879 4.25132 5.35139 3.98295 5.80753 3.81473C6.17749 3.67085 6.73342 3.49989 7.75722 3.45309C8.86432 3.40264 9.19646 3.3919 12.0001 3.3919C14.8038 3.3919 15.1357 3.40264 16.243 3.45326C17.2668 3.49989 17.8226 3.67101 18.1927 3.81473C18.6487 3.98311 19.0612 4.25147 19.3999 4.6001C19.7487 4.93879 20.0171 5.35139 20.1854 5.80753C20.3292 6.17749 20.5004 6.73342 20.5469 7.75722C20.5974 8.86432 20.6081 9.19646 20.6081 12.0001C20.6081 14.8039 20.5976 15.1358 20.5469 16.2432Z"
                    fill="url(#:rod:-1)"
                  ></path>
                  <path
                    d="M11.9999 6.60812C9.02211 6.60812 6.60808 9.02223 6.60808 12.0001C6.60808 14.9779 9.02211 17.3919 11.9999 17.3919C14.9779 17.3919 17.3919 14.9779 17.3919 12.0001C17.3919 9.02223 14.9779 6.60812 11.9999 6.60812ZM11.9999 15.5C10.067 15.4999 8.49993 13.9329 8.5001 11.9999C8.5001 10.067 10.067 8.49993 12.0001 8.49993C13.9331 8.5001 15.5 10.067 15.5 11.9999C15.5 13.9329 13.9329 15.5 11.9999 15.5Z"
                    fill="url(#:rod:-2)"
                  ></path>
                  <path
                    d="M18.8649 6.39516C18.8649 7.091 18.3008 7.65509 17.605 7.65509C16.909 7.65509 16.3449 7.09095 16.3449 6.39516C16.3449 5.69912 16.909 5.13503 17.605 5.13503C18.3008 5.13503 18.8649 5.69916 18.8649 6.39516Z"
                    fill="url(#:rod:-3)"
                  ></path>
                  <defs>
                    <linearGradient
                      id=":rod:-1"
                      x1="3.26229"
                      y1="20.7377"
                      x2="20.7378"
                      y2="3.26212"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color, #FFD600)"></stop>
                      <stop
                        offset="0.5"
                        stopColor="var(--color, #FF0100)"
                      ></stop>
                      <stop offset="1" stopColor="var(--color, #D800B9)"></stop>
                    </linearGradient>
                    <linearGradient
                      id=":rod:-2"
                      x1="4.57544"
                      y1="19.4246"
                      x2="19.4247"
                      y2="4.57532"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color, #FF6400)"></stop>
                      <stop
                        offset="0.5"
                        stopColor="var(--color, #FF0100)"
                      ></stop>
                      <stop offset="1" stopColor="var(--color, #FD0056)"></stop>
                    </linearGradient>
                    <linearGradient
                      id=":rod:-3"
                      x1="16.7139"
                      y1="7.28603"
                      x2="18.4957"
                      y2="5.50413"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color, #F30072)"></stop>
                      <stop offset="1" stopColor="var(--color, #E50097)"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Наш Instagram
              </ButtonBase>
            </Link>
          </div>
          <div className={styles.points}>
            <div
              className={styles.ball}
              style={{
                transform: "translate(calc(50% - 457px), calc(50% - 259px))",
              }}
            >
              <div
                className={styles.red + " " + styles.dark_shadow}
                style={{ "--d": "var(--palette-primary-dark)" }}
              />
            </div>
            <div
              className={styles.ball}
              style={{
                transform: "translate(calc(50% - 356px), calc(50% + 37px))",
              }}
            >
              <div
                className={styles.yellow + " " + styles.dark_shadow}
                style={{ "--d": "var(--palette-warning-dark)" }}
              />
            </div>
            <div
              className={styles.ball}
              style={{
                transform: "translate(calc(50% + 430px), calc(50% - 160px))",
              }}
            >
              <div
                className={styles.purple + " " + styles.dark_shadow}
                style={{ "--d": "var(--palette-secondary-dark)" }}
              />
            </div>
            <div
              className={styles.ball}
              style={{
                transform: "translate(calc(50% + 332px), calc(50% + 135px))",
              }}
            >
              <div
                className={styles.blue + " " + styles.dark_shadow}
                style={{ "--d": "var(--palette-info-dark)" }}
              />
            </div>
            <div
              className={styles.ball}
              style={{
                transform: "translate(calc(50% + 136px), calc(50% + 332px))",
              }}
            >
              <div
                className={styles.green + " " + styles.dark_shadow}
                style={{ "--d": "var(--palette-success-dark)" }}
              />
            </div>
            <svg
              className={styles.grid}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1440 1080"
            >
              <defs>
                <radialGradient
                  id="mask_gradient_id"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientTransform="matrix(720 0 0 420 720 560)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
                </radialGradient>
                <mask id="mask_id">
                  <ellipse
                    cx="50%"
                    cy="50%"
                    rx="50%"
                    ry="36%"
                    fill="url(#mask_gradient_id)"
                  />
                </mask>
              </defs>
              <g mask="url(#mask_id)">
                <path
                  d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
                  opacity={1}
                  style={{
                    strokeDasharray: "var(--stroke-dasharray)",
                    stroke: "var(--hero-circle-stroke-color)",
                    strokeWidth: "var(--hero-circle-stroke-width)",
                    transform: "translate(calc(50% - 480px), calc(50% - 80px))",
                  }}
                />
                <path
                  d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
                  opacity={1}
                  style={{
                    strokeDasharray: "var(--stroke-dasharray)",
                    stroke: "var(--hero-circle-stroke-color)",
                    strokeWidth: "var(--hero-circle-stroke-width)",
                    transform: "translate(calc(50% + 400px), calc(50% + 80px))",
                  }}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  fill="var(--hero-circle-stroke-color)"
                  r={5}
                  style={{
                    transform: "translate(calc(0% - 200px), calc(0% + 200px))",
                  }}
                />
                <path
                  d="M8 0V16M16 8.08889H0"
                  stroke="var(--hero-plus-stroke-color)"
                  opacity={1}
                  pathLength={1}
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                  style={{
                    transform:
                      "translate(calc(50% - 448px), calc(50% - 128px))",
                  }}
                />
                <path
                  d="M8 0V16M16 8.08889H0"
                  stroke="var(--hero-plus-stroke-color)"
                  opacity={1}
                  pathLength={1}
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                  style={{
                    transform:
                      "translate(calc(50% + 432px), calc(50% + 192px))",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((0 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((1 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((2 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((3 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((4 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((5 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((5 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((4 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((3 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((2 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((1 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1={0}
                  x2="100%"
                  y1="50%"
                  y2="50%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateY(calc(((0 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((0 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((1 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((2 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((3 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((4 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((5 * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((5 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((4 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((3 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((2 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((1 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
                <line
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                  strokeOpacity={1}
                  style={{
                    transform:
                      "translateX(calc(((0 * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))",
                    stroke: "var(--hero-line-stroke-color)",
                    strokeDasharray: "var(--stroke-dasharray)",
                    strokeWidth: "var(--hero-line-stroke-width)",
                  }}
                />
              </g>
            </svg>
            <div className={styles.overlay} />
          </div>
          <Image src={plan} alt="img" height={270} className={styles.plan} />
        </section>
        <section
          className={
            styles.features + " " + styles.container + " " + styles.section
          }
        >
          <div className={styles.cards}>
            <div className={styles.cards_span + " " + "overline"}>
              ПОЧЕМУ ЖЕ МЫ?
            </div>
            <h2>
              Наши главные <span className={styles.h2_span}>преимущества</span>
            </h2>
            <Image
              width={28}
              height={28}
              src={arrows}
              alt="arrows"
              className={styles.arrows}
            />
            <div className={styles.cards_stack}>
              <div className={styles.card}>
                <Image
                  width={40}
                  height={40}
                  src={brand}
                  alt="brand"
                  className={styles.filter}
                  style={{
                    "--i": "255, 86, 48",
                  }}
                />
                <div>
                  <h5>Опыт и профессионализм</h5>
                  <p className={styles.card_p + " " + "body1"}>
                    Наша команда имеет богатый опыт в строительстве различных
                    объектов.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <Image
                  width={40}
                  height={40}
                  src={development}
                  alt="development"
                  className={styles.filter}
                  style={{
                    "--i": "142, 51, 255",
                  }}
                />
                <div>
                  <h5>Современные технологии</h5>
                  <p className={styles.card_p + " " + "body1"}>
                    Мы следим за новыми технологиями и применяем их в своей
                    работе.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <Image
                  width={40}
                  height={40}
                  src={design}
                  alt="design"
                  className={styles.filter}
                  style={{
                    "--i": "255, 171, 0",
                  }}
                />
                <div>
                  <h5>Гарантия качества</h5>
                  <p className={styles.card_p + " " + "body1"}>
                    Качество нашей работы — наш приоритет. Мы всегда стремимся к
                    совершенству.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={plan}
            alt="img"
            width={720}
            height={483}
            className={styles.gallery}
          />
        </section>
        <section
          className={styles.tac + " " + styles.container + " " + styles.section}
        >
          <h2>
            Наши <span className={styles.h2_span}>услуги</span>
          </h2>
          <p className={styles.services_head_p + " " + "body1"}>
            Мы предлагаем широкий спектр строительных услуг: от строительства
            фасадов до ремонтных работ в домах.
          </p>
          <Image
            width={28}
            height={28}
            src={arrows}
            alt="arrows"
            className={styles.arrows}
          />
          <div className={styles.services_box}>
            <Image
              alt="img1"
              src={svc1}
              className={styles.services_img + " " + styles.border_left}
            />
            <div className={styles.services_text}>
              <h4>Коттеджное строительство</h4>
              <p className={styles.services_p + " " + "body1"}>
                Наши опытные специалисты готовы воплотить в жизнь ваши идеи по
                строительству уютного и комфортного жилья.
              </p>
            </div>
          </div>
          <div className={styles.services_box}>
            <Image
              alt="img1"
              src={svc2}
              className={
                styles.services_img +
                " " +
                styles.right +
                " " +
                styles.border_right
              }
            />
            <div className={styles.services_text}>
              <h4>Вентилируемые фасады</h4>
              <p className={styles.services_p + " " + "body1"}>
                Наши опытные специалисты готовы воплотить в жизнь ваши идеи по
                строительству уютного и комфортного жилья.
              </p>
            </div>
          </div>
          <div className={styles.services_box}>
            <Image
              alt="img1"
              src={svc3}
              className={styles.services_img + " " + styles.border_left}
            />
            <div className={styles.services_text}>
              <h4>Заливка фундамента</h4>
              <p className={styles.services_p + " " + "body1"}>
                Наши опытные специалисты готовы воплотить в жизнь ваши идеи по
                строительству уютного и комфортного жилья.
              </p>
            </div>
          </div>
        </section>
        <section
          className={styles.tac + " " + styles.container + " " + styles.section}
          id="form"
        >
          <tgs-player
            loop
            autoplay
            mode="normal"
            className={styles.tgs}
            src="/video/duck-party.tgs"
          />
          <h2>
            Не стесняйтесь обращаться к{" "}
            <span className={styles.h2_span}>нам</span>
          </h2>
          <p className={styles.services_head_p + " " + "body1"}>
            Мы будем рады вас услышать!
          </p>
          <Image
            width={28}
            height={28}
            src={arrows}
            alt="arrows"
            className={styles.arrows}
          />
          <Form extended={styles} />
        </section>
        <section className={styles.contact + " " + styles.section}>
          <h4>Остались вопросы?</h4>
          <p className={styles.contact_p + " " + "body1"}>
            Вы можете связаться с нами прямо в мессенджере
          </p>
          <Image
            width={28}
            height={28}
            src={arrows}
            alt="arrows"
            className={styles.arrows}
          />
          <Link href="https://t.me/tradifyy" target="_blank">
            <ButtonBase className={styles.contact_btn}>
              <Icon
                width={20}
                icon="fluent:mail-edit-24-filled"
                style={{ marginLeft: -4, marginRight: 8 }}
              />
              Telegram
            </ButtonBase>
          </Link>
          <span className={styles.or + " " + "overline"}>
            ИЛИ
            <div className={styles.stroke} />
          </span>
          <p className={styles.contact_p + " " + "body1"}>
            можно позвонить нам по номеру
          </p>
          <Image
            width={28}
            height={28}
            src={arrows}
            alt="arrows"
            className={styles.arrows}
          />
          <div className={styles.phone}>
            <Icon
              width={20}
              className={styles.phone_icon}
              icon="solar:phone-calling-bold"
            />
            <p className={styles.phone_p + " " + "caption"}>+7 928 869 4110</p>
          </div>
        </section>
      </main>
      <BProgressHandler />
      <Footer />
    </>
  );
}
