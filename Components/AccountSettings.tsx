import { useEffect, useState } from "react"

import * as API from "API/api"
import EmailConfirmation from "Components/EmailConfirmation"
import ChangeEmail from "Components/ChangeEmail"
import ChangePassword from "Components/ChangePassword"

import "./AccountSettings.css"

interface Props {

}

const AccountSettings: React.FC<Props> = (): JSX.Element => {
    const [IsOAuthAccount, setIsOAuthAccount] = useState<boolean>(false);
    const [IsEmailConfirmed, setIsEmailConfirmed] = useState<boolean>(false);

    useEffect(() => {
        API.GetAccountInfo().then(result => {
            if (typeof result == "string") {
                //todo: more general error handling?
            } else if (typeof result == "number") {
                //shouldn't ever happen
            } else {
                setIsOAuthAccount(result.IsOAuthAccount);
                setIsEmailConfirmed(result.EmailConfirmed);
            }
        });
    }, []);

    const setEmailConfirmed = (emailConfirmed: boolean) => {
        setIsEmailConfirmed(emailConfirmed);
    }

    const setNewEmail = (_: string) => {
        setIsEmailConfirmed(false);
    }

    return (
        <div>
            {IsOAuthAccount ? (
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body">
                        <h2 className="card-title">OAuth Account</h2>
                        <p>This is an OAuth account and has no settings to configure.</p>
                    </div>
                </div>
            ) : (
                <div>
                    {IsEmailConfirmed ? (<div/>) : (
                        <EmailConfirmation setEmailConfirmed={setEmailConfirmed}/>
                    )}
                    <div className="divider"></div>
                    <ChangeEmail setNewEmail={setNewEmail}/>
                    <div className="divider"></div>
                    <ChangePassword/>
                </div>
            )}
        </div>
    );
}

export default AccountSettings