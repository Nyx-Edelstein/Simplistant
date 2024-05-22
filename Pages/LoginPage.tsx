import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import * as API from "API/api"
import * as DTO from "API/dto"
import Page from "Enum/Page"
import Logo from "Assets/logo.png"
import "./LoginPage.css"

interface Props {
    load: (page: Page) => void;
}

const LoginPanel: React.FC<Props> = ({ load }): JSX.Element => {
    const [Username, setUsername] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [Errors, setErrors] = useState<string[]>([]);
    const [Loading, setLoading] = useState<boolean>(false);

    const onUsernameChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setUsername(e.currentTarget.value);
    };

    const onPasswordChanged = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
    };

    const Login = (): void => {
        const request = {
            username: Username,
            password: Password
        } as DTO.LoginRequest;

        setLoading(true);
        API.Login(request).then(response => {
            setLoading(false);
            if (typeof response === "number") {
                //Shouldn't ever happen
            }
            else if (typeof response === "string") {
                setErrors([response]);
            } else if (response.messages.length > 0) {
                setErrors(response.messages);
            } else if (response.status === DTO.ResponseStatus.Success ) {
                setErrors([]);
                load(Page.Content);
            }
        });
    };

    const LoginOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        Login();
    }

    const Register = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        load(Page.Register);
        e.preventDefault();
    }

    const Recover = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.persist();
        load(Page.Recover);
        e.preventDefault();
    }

    const GoogleSignIn = () => {
        window.location.href = "https://simplistant-api.azurewebsites.net/Account/LoginOAuth";
    };

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
            <div className="card bg-base-300" style={{ width: 325 }}>
                <div className="card-body items-center text-center">
                    <h1 className="card-title">Welcome to Simplistant</h1>
                    <figure>
                        <img src={Logo} alt="" width="150px" className="rounded" />
                    </figure>
                    <div>
                        <input type="text" placeholder="Username" className="input input-bordered input-secondary flex" value={Username} onChange={onUsernameChanged} onKeyDown={LoginOnEnter} />
                        <input type="password" placeholder="Password" className="input input-bordered input-secondary flex" value={Password} onChange={onPasswordChanged} style={{ marginTop: "5px" }} onKeyDown={LoginOnEnter} />
                    </div>
                    {errorsElement}
                    <div className="card-actions">
                        <button className="btn btn-primary btn-wide" onClick={_ => Login()}>Login</button>
                    </div>
                    <p>
                        <a onClick={Recover} className="link link-accent">Forgot Password?</a>
                        <br />
                        <a onClick={Register} className="link link-accent">Register Account</a>
                    </p>
                    <div className="divider">Or</div>
                    <button className="btn btn-outline btn-accent" onClick={GoogleSignIn}>
                        <img width="20px" alt="Google Login"
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" />
                        <p>Login with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPanel