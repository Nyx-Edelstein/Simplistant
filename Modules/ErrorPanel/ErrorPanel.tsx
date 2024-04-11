import "./ErrorPanel.css"
interface Props {
    message: string
}

const ErrorPanel: React.FC<Props> = ({message}): JSX.Element => {
    return (
        <div>
            Error: {message}
        </div>
    );
}

export default ErrorPanel