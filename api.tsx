//Auto-generated client-side API functions
import axios, { AxiosError } from "axios"
import * as DTO from "./dto";

const api_uri = "https://simplistant-api.azurewebsites.net";

export const BeginRecoverAccount = async (request: DTO.BeginRecoverAccountRequest) => {
    const endpoint = `${api_uri}/AccountController/BeginRecoverAccount`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ChangeEmail = async (request: DTO.ChangeEmailRequest) => {
    const endpoint = `${api_uri}/AccountController/ChangeEmail`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ChangePassword = async (request: DTO.ChangePasswordRequest) => {
    const endpoint = `${api_uri}/AccountController/ChangePassword`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ClearData = async () => {
    const endpoint = `${api_uri}/AccountController/ClearData`;
    return await axios.get<boolean>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ConfirmEmail = async (request: DTO.ConfirmEmailRequest) => {
    const endpoint = `${api_uri}/AccountController/ConfirmEmail`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const FinishRecoverAccount = async (request: DTO.FinishRecoverAccountRequest) => {
    const endpoint = `${api_uri}/AccountController/FinishRecoverAccount`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const LoggedIn = async () => {
    const endpoint = `${api_uri}/AccountController/LoggedIn`;
    return await axios.get<boolean>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Login = async (request: DTO.LoginRequest) => {
    const endpoint = `${api_uri}/AccountController/Login`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const LoginOAuth = async () => {
    const endpoint = `${api_uri}/AccountController/LoginOAuth`;
    return await axios.get<string>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Logout = async () => {
    const endpoint = `${api_uri}/AccountController/Logout`;
    return await axios.get<DTO.MessageResponse>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const LogoutAllDevices = async () => {
    const endpoint = `${api_uri}/AccountController/LogoutAllDevices`;
    return await axios.get<DTO.MessageResponse>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const OAuth = async (code: string) => {
    const endpoint = `${api_uri}/AccountController/OAuth?code=${code}`;
    return await axios.get<DTO.MessageResponse>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Register = async (request: DTO.RegisterRequest) => {
    const endpoint = `${api_uri}/AccountController/Register`;
    return await axios.post<DTO.MessageResponse>(endpoint, request)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ResendConfirmationEmail = async () => {
    const endpoint = `${api_uri}/AccountController/ResendConfirmationEmail`;
    return await axios.get<DTO.MessageResponse>(endpoint)
        .then(response => { return response.data })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}