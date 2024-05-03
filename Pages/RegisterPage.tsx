import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"
import Page from "Enum/Page"
import Logo from "Assets/logo.png"
import "./RegisterPage.css"

interface Props {
    load: (page: Page) => void;
}

const RegisterPage: React.FC<Props> = ({ load }): JSX.Element => {
    const [Username, setUsername] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [WaiveRecovery, setWaiveRecovery] = useState<boolean>(false);
    const [Errors, setErrors] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);

    const onUsernameChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setUsername(e.currentTarget.value);
    };

    const onPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
    };

    const onEmailChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
    };

    const onWaiveRecoveryChanged = (_: React.ChangeEvent<HTMLInputElement>): void => {
        setWaiveRecovery(!WaiveRecovery);
    };

    const Register = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.persist();

        const request = {
            Username: Username,
            Password: Password,
            Email: WaiveRecovery ? "" : Email,
            WaiveEmailRecovery: WaiveRecovery
        } as DTO.RegisterRequest;

        setLoading(true);
        API.Register(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            } else if (typeof response === "string") {
                setErrors([response]);
            } else if (response.status === DTO.ResponseStatus.Success) {
                setErrors([]);
                load(Page.Content);
            } else {
                setErrors(response.messages);
            }
    });
        e.preventDefault();
    };

    const Login = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        load(Page.Login);
        e.preventDefault();
    }

    const errorsElement = Errors.length > 0 ? (
        <div className="bg-base-200 rounded-box border border-error flex w-full">
            <ul className="text-error text-center items-center" style={{ margin: "15px" }}>
                {Errors.map((e, i) => {
                    return <li key={i}>{e}</li>;
                })}
            </ul>
        </div>
    ) : Loading ? (
        <PulseLoader color="#1eccff" />
    ) : (<div></div>);

    return (
        <div>
            <div className="card bg-base-300" style={{width: 325}}>
                <div className="card-body items-center text-center">
                    <h1 className="card-title">Account Registration</h1>
                    <figure>
                        <img src={Logo} alt="" width="150px" className="rounded" />
                    </figure>
                    <div>
                        <input type="text" placeholder="Username" className="input input-bordered input-secondary flex" value={Username} onChange={onUsernameChanged} />
                        <input type="password" placeholder="Password" className="input input-bordered input-secondary flex" value={Password} onChange={onPasswordChanged} style={{ marginTop: "5px" }} />
                        {WaiveRecovery ? (<div></div>) : (
                                <input type="text" placeholder="Recovery Email" className="input input-bordered input-secondary flex" value={Email} onChange={onEmailChanged} style={{ marginTop: "5px" }} />
                        )}
                        <label className="cursor-pointer label">
                            <span className="label-text">Waive Recovery Email?</span>
                            <input type="checkbox" className="toggle toggle-error" onChange={onWaiveRecoveryChanged}/>
                        </label>
                    </div>
                    {errorsElement}
                    <div className="card-actions">
                        <button className="btn btn-primary btn-wide" onClick={Register}>Register</button>
                    </div>
                    <p>
                        <a onClick={Login} className="link link-accent">Already have an account?</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage