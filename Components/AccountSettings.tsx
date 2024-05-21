import { useMemo, useState } from "react"

import * as API from "API/api"
import EmailConfirmation from "Components/EmailConfirmation"
import ChangeEmail from "Components/ChangeEmail"
import ChangePassword from "Components/ChangePassword"

import "./AccountSettings.css"

interface Props {
}

const AccountSettings: React.FC<Props> = (): JSX.Element => {
    var [IsOAuthAccount, setIsOAuthAccount] = useState<boolean>(false);
    var [IsEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false);

    const load = () => {
        API.GetAccountInfo().then(result => {
            console.log(result);
            if (typeof result == "string") {
                //todo: more general error handling?
            } else if (typeof result == "number") {
                //shouldn't ever happen
            } else {
                setIsOAuthAccount(result.isOAuthAccount);
                setIsEmailConfirmed(result.emailConfirmed);
                console.log("call completed");
                console.log(IsOAuthAccount);
                console.log(IsEmailConfirmed);
            }
        });
        console.log("after call");
        console.log(IsOAuthAccount);
        console.log(IsEmailConfirmed);
    }

    useMemo(() => {
        load();
    }, []);

    const setEmailConfirmed = (emailConfirmed: boolean) => {
        IsEmailConfirmed = emailConfirmed;
        setIsEmailConfirmed(emailConfirmed);
    }

    const setNewEmail = (_: string) => {
        IsEmailConfirmed = false;
        setIsEmailConfirmed(false);
    }

    const OAuthElement = (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">OAuth Account</h2>
                <p>This is an OAuth account and has no settings to configure.</p>
            </div>
        </div>
    );

    const settingsElement = (
        <div>
            {IsEmailConfirmed ? (<div />) : (
                <EmailConfirmation setEmailConfirmed={setEmailConfirmed} />
            )}
            <div className="divider"></div>
            <ChangeEmail setNewEmail={setNewEmail} />
            <div className="divider"></div>
            <ChangePassword />
        </div>
    );

    console.log("render");

    return (IsOAuthAccount ? OAuthElement : settingsElement);
}

export default AccountSettings