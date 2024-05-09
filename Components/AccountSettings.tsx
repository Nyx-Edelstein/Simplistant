import { useMemo, useState } from "react"

import * as API from "API/api"
import * as DTO from "API/dto"
import EmailConfirmation from "Components/EmailConfirmation"
import ChangeEmail from "Components/ChangeEmail"
import ChangePassword from "Components/ChangePassword"

import "./AccountSettings.css"

interface Props {

}

const AccountSettings: React.FC<Props> = (): JSX.Element => {
    const [AccountInfo, setAccountInfo] = useState<DTO.AccountInfo>({} as DTO.AccountInfo);

    useMemo(() => {
        API.GetAccountInfo().then(result => {
            if (typeof result == "string") {
                //todo: more general error handling?
            } else if (typeof result == "number") {
                //shouldn't ever happen
            } else {
                setAccountInfo(result);
            }
        });
    }, []);

    const setEmailConfirmed = (emailConfirmed: boolean) => {
        AccountInfo.EmailConfirmed = emailConfirmed;
        setAccountInfo(AccountInfo);
    }

    const setNewEmail = (newEmail: string) => {
        AccountInfo.Email = newEmail;
        AccountInfo.EmailConfirmed = false;
        setAccountInfo(AccountInfo);
    }

    return (
        <div>
            {AccountInfo.IsOAuthAccount ? (
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body">
                        <h2 className="card-title">OAuth Account</h2>
                        <p>This is an OAuth account and has no settings to configure.</p>
                    </div>
                </div>
            ) : (
                <div>
                    {AccountInfo.EmailConfirmed ? (<div/>) : (
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