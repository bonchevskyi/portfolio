import React, { useContext, useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import { MdClose } from "react-icons/md";
import axios from "axios";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaCodepen,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";
import {
  Body,
  ContactsMain,
  Container,
  Form,
  InputContainer,
  SubmitButton,
  SubmitIcon,
  ContactsDetails,
  PersonalDetails,
  SocialMediaIcons,
  Image,
  FormInput,
  FormMessage,
  SendIcon,
  SuccessIcon,
} from "./Contacts.styled";

import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          setSuccess(true);
          setErrMsg("");

          setName("");
          setEmail("");
          setMessage("");
          setOpen(false);
        });
      } else {
        setErrMsg("Invalid email!");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
  };

  return (
    <ContactsMain id="contact" style={{ backgroundColor: theme.secondary }}>
      <Container>
        <h1 style={{ color: theme.primary }}>{t("contacts.title")}</h1>
        <Body>
          <Form>
            <form onSubmit={handleContactForm}>
              <InputContainer>
                <label htmlFor="Name" className={classes.label}>
                  {t("contacts.name")}
                </label>
                <FormInput
                  placeholder={t("contacts.namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                  className={classes.input}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="Email" className={classes.label}>
                  {t("contacts.emailLabel")}
                </label>
                <FormInput
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                  className={classes.input}
                />
              </InputContainer>
              <InputContainer>
                <label htmlFor="Message" className={classes.label}>
                  {t("contacts.messageLabel")}
                </label>
                <FormMessage
                  placeholder={t("contacts.messagePlaceholder")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                  className={classes.message}
                />
              </InputContainer>

              <SubmitButton>
                <button type="submit" className={classes.submitBtn}>
                  <p>
                    {!success
                      ? `${t("contacts.send")}`
                      : `${t("contacts.sent")}`}
                  </p>
                  <SubmitIcon>
                    <SendIcon>
                      <AiOutlineSend
                        style={{
                          animation: !success
                            ? "initial"
                            : "fly 0.8s linear both",
                          position: success ? "absolute" : "initial",
                        }}
                      />
                    </SendIcon>
                    <SuccessIcon>
                      <AiOutlineCheckCircle
                        style={{
                          display: !success ? "none" : "inline-flex",
                          opacity: !success ? "0" : "1",
                        }}
                      />
                    </SuccessIcon>
                  </SubmitIcon>
                </button>
              </SubmitButton>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarContent
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={handleClose}
                    >
                      <MdClose fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
                style={{
                  backgroundColor: theme.primary,
                  color: theme.secondary,
                  fontFamily: "var(--primaryFont)",
                }}
                message={errMsg}
              />
            </Snackbar>
          </Form>

          <ContactsDetails>
            <a href={`mailto:${contactsData.email}`} rel="noreferrer">
              <PersonalDetails>
                <div className={classes.detailsIcon}>
                  <FiAtSign />
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
              </PersonalDetails>
            </a>

            <a href={`tel:${contactsData.phone}`} rel="noreferrer">
              <PersonalDetails>
                <div className={classes.detailsIcon}>
                  <FiPhone />
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
              </PersonalDetails>
            </a>

            <a
              href={`https://goo.gl/maps/MiPNWDUWs9NSW9iW6`}
              target="_blank"
              rel="noreferrer"
            >
              <PersonalDetails>
                <div className={classes.detailsIcon}>
                  <HiOutlineLocationMarker />
                </div>
                <p style={{ color: theme.tertiary }}>{t("contacts.address")}</p>
              </PersonalDetails>
            </a>

            {/* <PersonalDetails>
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <a
                href={`https://goo.gl/maps/MiPNWDUWs9NSW9iW6`}
                className="personal-details"
                target="_blank"
                rel="noreferrer"
              >
                <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
              </a>
            </PersonalDetails> */}

            <SocialMediaIcons>
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaGithub aria-label="GitHub" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </a>
              )}
              {socialsData.gitlab && (
                <a
                  href={socialsData.gitlab}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaGitlab aria-label="GitLab" />
                </a>
              )}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaStackOverflow aria-label="Stack Overflow" />
                </a>
              )}
              {socialsData.codepen && (
                <a
                  href={socialsData.codepen}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaCodepen aria-label="CodePen" />
                </a>
              )}
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaTwitter aria-label="Twitter" />
                </a>
              )}
              {socialsData.medium && (
                <a
                  href={socialsData.medium}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIcon}
                >
                  <FaMediumM aria-label="Medium" />
                </a>
              )}
            </SocialMediaIcons>
          </ContactsDetails>
        </Body>
      </Container>
      <Image src={theme.contactsimg} alt="contacts" />
    </ContactsMain>
  );
}

export default Contacts;
