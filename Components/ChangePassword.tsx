import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"

import "./ChangePassword.css"

interface Props {
}

const ChangePassword: React.FC<Props> = (): JSX.Element => {
    const [OldPassword, setOldPassword] = useState<string>("");
    const [NewPassword, setNewPassword] = useState<string>("");
    const [Messages, setMessages] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);
    const [MessageType, setMessageType] = useState<string>("error");

    const onOldPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setOldPassword(e.currentTarget.value);
    };

    const onNewPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setNewPassword(e.currentTarget.value);
    };

    const ChangePassword = (): void => {
        const request = {
            oldPassword: OldPassword,
            newPassword: NewPassword
        } as DTO.ChangePasswordRequest;

        setLoading(true);
        API.ChangePassword(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setMessages([response]);
            } else if (response.status === DTO.ResponseStatus.Success) {
                setMessages(response.messages);
                setMessageType("success");
                setOldPassword("");
                setNewPassword("");
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
                <h2 className="card-title">Change Password</h2>
                <div className="form-container-med">
                    <input type="password" placeholder="Old Password" className="input input-bordered input-accent flex w-full" value={OldPassword} onChange={onOldPasswordChanged} />
                    <input type="password" placeholder="New Password" className="input input-bordered input-accent flex w-full" value={NewPassword} onChange={onNewPasswordChanged} />
                    {messagesElement}
                    <button className="btn btn-accent flex w-full"
                        onClick={_ => ChangePassword()}
                        onKeyPress={(e) => { if (e.key === "Enter") ChangePassword(); }}>
                        Change Password</button>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword