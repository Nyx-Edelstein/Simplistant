import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";
import BeatLoader from "react-spinners/BeatLoader";

import * as API from "API/api"
import * as DTO from "API/dto"

import "./EmailConfirmation.css"

interface Props {
    setEmailConfirmed: (emailConfirmed: boolean) => void;
}

const EmailConfirmation: React.FC<Props> = ({setEmailConfirmed}): JSX.Element => {
    const [ConfirmationToken, setConfirmationToken] = useState<string>("");
    const [Messages, setMessages] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);
    var [EmailSent, setEmailSent] = useState<boolean>(false);
    const [Sending, setSending] = useState<boolean>(false);
    const [MessageType, setMessageType] = useState<string>("error");

    const onConfirmationTokenChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setConfirmationToken(e.currentTarget.value);
    };

    const ConfirmEmail = (): void => {
        const request = {
            confirmationToken: ConfirmationToken,
        } as DTO.ConfirmEmailRequest;

        setLoading(true);
        API.ConfirmEmail(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setMessages([response]);
            } else if (response.status === DTO.ResponseStatus.Success) {
                setEmailConfirmed(true);
                setMessages(response.messages);
            } else {
                setMessages(response.messages);
            }
        });
    };

    const ConfirmEmailOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        ConfirmEmail();
    }

    const Resend = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        setSending(true);
        API.ResendConfirmationEmail().then(response => {
            setSending(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setMessages([response]);
            } else if (response.status === DTO.ResponseStatus.Success) {
                EmailSent = true;
                setEmailSent(true);
                setMessages(response.messages);
                setMessageType("success");
            } else {
                setMessages(response.messages);
                setMessageType("error");
            }
        });
    }

    const messagesElement = Messages.length > 0 ? (
        <div className={`bg-base-200 rounded-box border border-${MessageType} flex w-full`}>
            <ul className={`text-${MessageType} text-center items-center`} style={{ margin: "15px" }}>
                {Messages.map((e, i) => {
                    return <li key={i}>{e}</li>;
                })}
            </ul>
        </div>
    ) : Loading ? (
        <PulseLoader color="#1eccff" />
    ) : (<div></div>);

    const resendElement = EmailSent ? (
        <p className="text-success">Confirmation email sent.</p>
    ) : Sending ? (
        <BeatLoader color="#1eccff" />
    ) : (
        <a onClick={Resend} className="link link-accent">Resend Confirmation Email?</a>
    );

    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">Email Confirmation</h2>
                <div className="form-container-med">
                    <input type="text" placeholder="Confirmation Token" className="input input-bordered input-accent flex w-full" value={ConfirmationToken} onChange={onConfirmationTokenChanged} onKeyDown={ConfirmEmailOnEnter} />
                    {messagesElement}
                    <button className="btn btn-accent flex w-full" onClick={_ => ConfirmEmail()}>
                            Confirm Email</button>
                    <div className="divider" />
                    <div className="text-center">
                        {resendElement}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailConfirmation