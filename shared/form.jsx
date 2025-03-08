"use client";

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";

import { useState, useRef } from "react";

import styles from "./form.module.css";

export default function Form({ extended }) {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleSubmit() {
    let nameErrorMessage = "";
    let emailErrorMessage = "";
    let messageErrorMessage = "";

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    switch (true) {
      case name.length < 3:
        nameErrorMessage = "Не менее 3 символов";
        break;
      case name.length > 16:
        nameErrorMessage = "Не более 16 символов";
        break;
      case !/^[A-Za-zА-Яа-яЁё\d\s.,!?()-]+$/.test(name):
        nameErrorMessage = "Некорректное имя";
        break;
      default:
        break;
    }

    switch (true) {
      case !email:
        emailErrorMessage = "Эл. почта не указана";
        break;
      case email.length > 256:
        messageErrorMessage = "Не более 256 символов";
        break;
      default:
        break;
    }

    switch (true) {
      case message.length < 8:
        messageErrorMessage = "Не менее 8 символов";
        break;
      case message.length > 1024:
        messageErrorMessage = "Не более 1024 символов";
        break;
      default:
        break;
    }

    if (nameErrorMessage || emailErrorMessage || messageErrorMessage) {
      setNameError(nameErrorMessage);
      setEmailError(emailErrorMessage);
      setMessageError(messageErrorMessage);
      return;
    }

    setLoading(true);
    setAlert(false);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((r) => r.json())
      .then((res) => {
        setLoading(false);

        if (res.status === 200) {
          setAlert(true);
        } else {
          console.log("пиздец какой-то: ", res);
        }
      });
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
    >
      {alert && (
        <div className={styles.content}>
          <div className={styles.icon}>
            <Icon icon="solar:check-circle-bold" width={24} />
          </div>
          <p className={styles.p + " " + "body2"}>
            Спасибо! Ваша заявка успешно отправлена.
          </p>
          <IconButton
            className={styles.icon_button}
            onClick={() => setAlert(false)}
          >
            <Icon icon="mingcute:close-line" width={12} height={12} />
          </IconButton>
        </div>
      )}
      <TextField
        label="Ваше имя"
        name="firstName"
        type="text"
        inputRef={nameRef}
        onChange={() => setNameError("")}
        error={Boolean(nameError)}
        helperText={nameError}
        slotProps={{
          inputLabel: {
            className: styles.label,
          },
          input: {
            className: styles.input,
          },
        }}
      />
      <TextField
        label="Эл. почта"
        name="email"
        type="email"
        inputRef={emailRef}
        onChange={() => setEmailError("")}
        error={Boolean(emailError)}
        helperText={emailError}
        slotProps={{
          inputLabel: {
            className: styles.label,
          },
          input: {
            className: styles.input,
          },
        }}
      />
      <TextField
        label="Ваше сообщение"
        name="email"
        type="email"
        multiline
        rows={4}
        inputRef={messageRef}
        onChange={() => setMessageError("")}
        error={Boolean(messageError)}
        helperText={messageError}
        slotProps={{
          inputLabel: {
            className: styles.label,
          },
          input: {
            className: styles.input,
          },
        }}
      />
      <Button className={styles.btn} loading={loading} type="sybmit">
        <span
          className={extended.mask_span}
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
          <span className={extended.span} />
        </span>
        <span
          className={extended.mask_span}
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
          <span className={extended.span} />
        </span>
        <Icon
          width={20}
          icon="fluent:mail-16-filled"
          style={{ marginLeft: -4, marginRight: 8 }}
        />
        Отправить
      </Button>
    </form>
  );
}
