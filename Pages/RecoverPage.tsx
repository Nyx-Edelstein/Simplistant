import { useState } from "react"
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"
import Page from "Enum/Page"
import Logo from "Assets/logo.png"
import "./RecoverPage.css"

interface Props {
    visible: boolean;
    load: (page: Page) => void;
}

const RecoverPanel: React.FC<Props> = ({ visible, load }): JSX.Element => {
    const [UserData, setUserData] = useState<string>("");
    const [Messages, setMessages] = useState<string[]>([]);
    const [Sending, setSending] = useState<boolean>(false);

    const [RecoverySent, setRecoverySent] = useState<boolean>(false);
    const [Username, setUsername] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [RecoveryToken, setRecoveryToken] = useState<string>("");
    const [Errors, setErrors] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);

    const onUserDataChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setUserData(e.currentTarget.value);
    };

    const BeginRecover = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.persist();

        const request = {
            UserData: UserData,
        } as DTO.BeginRecoverAccountRequest;

        setSending(true);
        API.BeginRecoverAccount(request).then(response => {
            setSending(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setMessages([response]);
            } else if (response.Status === DTO.ResponseStatus.Success) {
                setRecoverySent(true);
                if (response.Messages.length > 0) {
                    setMessages(response.Messages);
                }
            }
        });
    };

    const onUsernameChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setUsername(e.currentTarget.value);
    };

    const onPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
    };

    const onRecoveryTokenChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setRecoveryToken(e.currentTarget.value);
    };

    const FinishRecover = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.persist();

        const request = {
            Username: Username,
            Password: Password,
            RecoveryToken: RecoveryToken,
        } as DTO.FinishRecoverAccountRequest;

        setLoading(true);
        API.FinishRecoverAccount(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setErrors([response]);
            } else if (response.Messages.length > 0) {
                setErrors(response.Messages);
            }
            else if (response.Status === DTO.ResponseStatus.Success) {
                load(Page.Main);
            }
        });
    };

    const Login = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        load(Page.Login);
        e.preventDefault();
    }

    const Register = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        load(Page.Register);
        e.preventDefault();
    }
    
    const messagesElement = Messages.length > 0 ? (
        <div className="bg-base-200 rounded-box border border-neutral flex w-full">
            <ul className="text-info text-center items-center" style={{ margin: "15px" }}>
                {Messages.map((e, i) => {
                    return <li key={i}>{e}</li>;
                })}
            </ul>
        </div>
    ) : Sending ? (
        <PulseLoader color="#1eccff" />
    ) : (<div></div>);

    const errorsElement = Errors.length > 0 ? (
        <div className="bg-base-200 rounded-box border border-error flex w-full" style={{ marginTop: "5px" }}>
            <ul className="text-error text-center items-center" style={{ margin: "15px" }}>
                {Errors.map((e, i) => {
                    return <li key={i}>{e}</li>;
                })}
            </ul>
        </div>
    ) : Loading ? (
        <PulseLoader color="#1eccff" />
    ) : (<div></div>);

    return visible ? (
        <div>
            <div className="card bg-base-300">
                <div className="card-body items-center text-center">
                    <h1 className="card-title">Account Recovery</h1>
                    <figure>
                        <img src={Logo} alt="" width="150px" className="rounded" />
                    </figure>
                    <div>
                        <input type="text" placeholder="Username or Email" className="input input-bordered input-secondary flex w-full" value={UserData} onChange={onUserDataChanged} />
                    </div>
                    {messagesElement}
                    <button className="btn btn-primary btn-wide" onClick={BeginRecover}>Send Recovery Email</button>
                    <p>
                        <a onClick={Login} className="link link-accent">Already have an account?</a>
                        <br />
                        <a onClick={Register} className="link link-accent">Register New Account</a>
                    </p>
                    <div className={RecoverySent ? "" : "hidden"}>
                        <div className="divider" />
                        <div style={{ textAlign: "center" }} >
                            <input type="text" placeholder="Username" className="input input-bordered input-secondary flex w-full" value={Username} onChange={onUsernameChanged} />
                            <input type="password" placeholder="New Password" className="input input-bordered input-secondary flex w-full" value={Password} onChange={onPasswordChanged} style={{ marginTop: "5px" }} />
                            <input type="text" placeholder="Recovery Token" className="input input-bordered input-secondary flex w-full" value={RecoveryToken} onChange={onRecoveryTokenChanged} style={{ marginTop: "5px" }} />
                        </div>
                        {errorsElement}
                        <button className="btn btn-primary btn-wide" onClick={FinishRecover} style={{ marginTop: "10px" }}>Recover Account</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (<div></div>);
}

export default RecoverPanel