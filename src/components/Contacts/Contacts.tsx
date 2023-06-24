import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMantineTheme } from '@mantine/core';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaStackOverflow,
    FaCodepen,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { socialsData, contactsData } from 'data';
import { useTranslation } from 'react-i18next';
import {
    Body,
    ContactsMain,
    Container,
    Form,
    InputContainer,
    SubmitButton,
    SubmitIcon,
    ContactsDetails,
    SocialMediaIcons,
    Image,
    FormInput,
    FormMessage,
    NotificationST,
} from './Contacts.styled';

export function Contacts() {
    const { t } = useTranslation();
    const theme = useMantineTheme();

    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    // eslint-disable-next-line no-useless-escape
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [success === true]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (email.match(EMAIL_REGEX)) {
                const responseData = {
                    name,
                    email,
                    message,
                };

                axios.post(contactsData.sheetAPI, responseData).then(() => {
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email!');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <ContactsMain id="contact">
            <Container>
                <h1>{t('contacts.title')}</h1>
                <Body>
                    <Form>
                        <form onSubmit={handleContactForm}>
                            <InputContainer>
                                <label htmlFor="Name">
                                    {t('contacts.name')}
                                </label>
                                <FormInput
                                    placeholder={t('contacts.namePlaceholder')}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="Name"
                                />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="Email">
                                    {t('contacts.emailLabel')}
                                </label>
                                <FormInput
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="Email"
                                />
                            </InputContainer>
                            <InputContainer>
                                <label htmlFor="Message">
                                    {t('contacts.messageLabel')}
                                </label>
                                <FormMessage
                                    placeholder={t('contacts.messagePlaceholder')}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name="Message"
                                />
                            </InputContainer>

                            <SubmitButton>
                                <button type="submit">
                                    <p>{t('contacts.send')}</p>
                                    {success && (
                                        <NotificationST
                                            title="Message sent succesfully!"
                                            radius="md"
                                            withCloseButton
                                            closeButtonProps={{ title: 'Hide notification' }}
                                            onClose={handleClose}
                                        >
                                            Have a nice day
                                        </NotificationST>
                                    )}
                                    <SubmitIcon>
                                        <div>
                                            <AiOutlineSend />
                                        </div>
                                    </SubmitIcon>
                                </button>
                            </SubmitButton>
                        </form>
                        {open && (
                            <NotificationST
                                title="Error occured"
                                radius="md"
                                withCloseButton
                                closeButtonProps={{ title: 'Hide notification' }}
                                onClose={handleClose}
                            >
                                {errMsg}
                            </NotificationST>
                        )}
                    </Form>

                    <ContactsDetails>
                        <SocialMediaIcons>
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithub aria-label="GitHub" />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedinIn aria-label="LinkedIn" />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a
                                    href={socialsData.gitlab}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGitlab aria-label="GitLab" />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaStackOverflow aria-label="Stack Overflow" />
                                </a>
                            )}
                            {socialsData.codepen && (
                                <a
                                    href={socialsData.codepen}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaCodepen aria-label="CodePen" />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaTwitter aria-label="Twitter" />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaMediumM aria-label="Medium" />
                                </a>
                            )}
                        </SocialMediaIcons>
                    </ContactsDetails>
                </Body>
            </Container>
            <Image loading="lazy" src={theme.other.contactsimg} />
        </ContactsMain>
    );
}
