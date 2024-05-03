import Page from "Enum/Page"
import "./ErrorPage.css"

interface Props {
    load: (page: Page) => void;
    message: string;
}

const ErrorPage: React.FC<Props> = ({ load, message, }): JSX.Element => {
    load;
    return (
        <div>
            <input type="checkbox" id="message_modal" className="modal-toggle" checked readonly="true"/>
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="bg-error">
                        <h1 className="font-bold">Error</h1>
                    </div>
                    <div className="bg-base-200">
                        <p>{message}</p>
                        <br/>
                        <p>Please try again later. If the problem persists, contact the site administrator.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage