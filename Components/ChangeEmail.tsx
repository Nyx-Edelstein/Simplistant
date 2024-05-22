import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"

import "./ChangeEmail.css"

interface Props {
    setNewEmail: (newEmail: string) => void;
}

const ChangeEmail: React.FC<Props> = ({setNewEmail}): JSX.Element => {
    const [Email, setEmail] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [Messages, setMessages] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);
    const [MessageType, setMessageType] = useState<string>("error");

    const onEmailChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
    };

    const ChangeEmail = (): void => {
        const request = {
            newEmail: Email,
            password: Password
        } as DTO.ChangeEmailRequest;

        setLoading(true);
        API.ChangeEmail(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setMessages([response]);
            } else if (response.status === DTO.ResponseStatus.Success) {
                setNewEmail(Email);
                setMessages(response.messages);
                setMessageType("success");
                setEmail("");
                setPassword("");
            } else {
                setMessages(response.messages);
                setMessageType("error");
            }
        });
    };

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
    
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">Change Email Address</h2>
                <div className="form-container-med">
                    <input type="text" placeholder="New Email Address" className="input input-bordered input-accent flex w-full" value={Email} onChange={onEmailChanged} />
                    <input type="password" placeholder="Password" className="input input-bordered input-accent flex w-full" value={Password} onChange={onPasswordChanged} />
                    {messagesElement}
                    <button className="btn btn-accent flex w-full"
                        onClick={_ => ChangeEmail()}
                        onKeyPress={(e) => { if (e.key === "Enter") ChangeEmail(); }}>
                        Change Email</button>
                </div>
            </div>
        </div>
    );
}

export default ChangeEmail