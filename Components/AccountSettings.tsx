//import { useEffect, useState } from "react"

import EmailConfirmation from "Components/EmailConfirmation"

import "./AccountSettings.css"

interface Props {

}

const AccountSettings: React.FC<Props> = (): JSX.Element => {
    return (
        <div>
            <EmailConfirmation/>
            <div className="divider"></div>
            <h1>change email</h1>
            <div className="divider"></div>
            <h1>change password</h1>
            <div className="divider"></div>
            <h1>logout</h1>
        </div>
    );
}

export default AccountSettings