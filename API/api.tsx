//Auto-generated client-side API functions
import axios, { AxiosError } from "axios"
import * as DTO from "./dto";

const api_uri = "https://localhost:7033";
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

export const BeginRecoverAccount = async (request: DTO.BeginRecoverAccountRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - BeginRecoverAccount, post");
    const endpoint = `${api_uri}/Account/BeginRecoverAccount`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const ChangeEmail = async (request: DTO.ChangeEmailRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - ChangeEmail, post");
    const endpoint = `${api_uri}/Account/ChangeEmail`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const ChangePassword = async (request: DTO.ChangePasswordRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - ChangePassword, post");
    const endpoint = `${api_uri}/Account/ChangePassword`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const ClearData = async (): Promise<0 | string | boolean> => {
    console.log("API - ClearData, get");
    const endpoint = `${api_uri}/Account/ClearData`;
    return await axiosInstance.get<boolean>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const ConfirmEmail = async (request: DTO.ConfirmEmailRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - ConfirmEmail, post");
    const endpoint = `${api_uri}/Account/ConfirmEmail`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const FinishRecoverAccount = async (request: DTO.FinishRecoverAccountRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - FinishRecoverAccount, post");
    const endpoint = `${api_uri}/Account/FinishRecoverAccount`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const GetAccountInfo = async (): Promise<0 | string | DTO.AccountInfo> => {
    console.log("API - GetAccountInfo, get");
    const endpoint = `${api_uri}/Account/GetAccountInfo`;
    return await axiosInstance.get<DTO.AccountInfo>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const GetCurrentUser = async (): Promise<0 | string | string> => {
    console.log("API - GetCurrentUser, get");
    const endpoint = `${api_uri}/Account/GetCurrentUser`;
    return await axiosInstance.get<string>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const LoggedIn = async (): Promise<0 | string | boolean> => {
    console.log("API - LoggedIn, get");
    const endpoint = `${api_uri}/Account/LoggedIn`;
    return await axiosInstance.get<boolean>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const Login = async (request: DTO.LoginRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - Login, post");
    const endpoint = `${api_uri}/Account/Login`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const Logout = async (): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - Logout, get");
    const endpoint = `${api_uri}/Account/Logout`;
    return await axiosInstance.get<DTO.MessageResponse>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const Register = async (request: DTO.RegisterRequest): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - Register, post");
    const endpoint = `${api_uri}/Account/Register`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, request)
        .then(response => {
            console.log(response.data);
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

export const ResendConfirmationEmail = async (): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - ResendConfirmationEmail, get");
    const endpoint = `${api_uri}/Account/ResendConfirmationEmail`;
    return await axiosInstance.get<DTO.MessageResponse>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const DeleteNote = async (historyId: string): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - DeleteNote, post");
    const endpoint = `${api_uri}/Notes/DeleteNote`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, historyId)
        .then(response => {
            console.log(response.data);
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

export const GetNote = async (noteId: string): Promise<0 | string | DTO.NoteResponse> => {
    console.log("API - GetNote, get");
    const endpoint = `${api_uri}/Notes/GetNote?noteId=${noteId}`;
    return await axiosInstance.get<DTO.NoteResponse>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const GetNotesCatalog = async (): Promise<0 | string | DTO.SearchSummaryResponse> => {
    console.log("API - GetNotesCatalog, get");
    const endpoint = `${api_uri}/Notes/GetNotesCatalog`;
    return await axiosInstance.get<DTO.SearchSummaryResponse>(endpoint)
        .then(response => {
            console.log(response.data);
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

export const SaveNote = async (note: DTO.Note): Promise<0 | string | DTO.MessageResponse> => {
    console.log("API - SaveNote, post");
    const endpoint = `${api_uri}/Notes/SaveNote`;
    return await axiosInstance.post<DTO.MessageResponse>(endpoint, note)
        .then(response => {
            console.log(response.data);
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

export const SearchNotes = async (searchString: string, includeArchived: boolean): Promise<0 | string | DTO.SearchSummaryResponse> => {
    console.log("API - SearchNotes, get");
    const endpoint = `${api_uri}/Notes/SearchNotes?searchString=${searchString}&includeArchived=${includeArchived}`;
    return await axiosInstance.get<DTO.SearchSummaryResponse>(endpoint)
        .then(response => {
            console.log(response.data);
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