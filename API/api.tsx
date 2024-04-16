//Auto-generated client-side API functions
import axios, { AxiosError } from "axios"
import * as DTO from "./dto";

const api_uri = "https://simplistant-api.azurewebsites.net";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const config: Object = {
    withCredentials: true,
    withXSRFToken: true
};
const axiosInstance = axios.create(config);
axiosInstance.interceptors.response.use(
    response => (response),
    error => (Promise.reject(error.response.data.err))
);

export const BeginRecoverAccount = async (request: DTO.BeginRecoverAccountRequest) => {
    const endpoint = `${api_uri}/Account/BeginRecoverAccount`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ChangeEmail = async (request: DTO.ChangeEmailRequest) => {
    const endpoint = `${api_uri}/Account/ChangeEmail`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ChangePassword = async (request: DTO.ChangePasswordRequest) => {
    const endpoint = `${api_uri}/Account/ChangePassword`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ClearData = async () => {
    const endpoint = `${api_uri}/Account/ClearData`;
    return await axiosInstance.get(endpoint)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ConfirmEmail = async (request: DTO.ConfirmEmailRequest) => {
    const endpoint = `${api_uri}/Account/ConfirmEmail`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const FinishRecoverAccount = async (request: DTO.FinishRecoverAccountRequest) => {
    const endpoint = `${api_uri}/Account/FinishRecoverAccount`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const LoggedIn = async () => {
    const endpoint = `${api_uri}/Account/LoggedIn`;
    return await axiosInstance.get(endpoint)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Login = async (request: DTO.LoginRequest) => {
    const endpoint = `${api_uri}/Account/Login`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Logout = async () => {
    const endpoint = `${api_uri}/Account/Logout`;
    return await axiosInstance.get(endpoint)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const LogoutAllDevices = async () => {
    const endpoint = `${api_uri}/Account/LogoutAllDevices`;
    return await axiosInstance.get(endpoint)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const Register = async (request: DTO.RegisterRequest) => {
    const endpoint = `${api_uri}/Account/Register`;
    return await axiosInstance.post(endpoint, request)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}

export const ResendConfirmationEmail = async () => {
    const endpoint = `${api_uri}/Account/ResendConfirmationEmail`;
    return await axiosInstance.get(endpoint)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch((axiosError: AxiosError) => {
            if (axiosError.response!.status === 401) {
                return 0;
            } else {
                return axiosError.message;
            }
        }).catch(_ => { return "An unexpected error has occurred." });
}