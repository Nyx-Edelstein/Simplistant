//Auto-generated type definitions

export enum ResponseStatus {
	success,
	warning,
	error,
	requiresAuth,
}

export interface BeginRecoverAccountRequest {
	userData: string;
}

export interface ChangeEmailRequest {
	email: string;
}

export interface ChangePasswordRequest {
	oldPassword: string;
	newPassword: string;
}

export interface ConfirmEmailRequest {
	confirmationToken: string;
}

export interface FinishRecoverAccountRequest {
	username: string;
	password: string;
	recoveryToken: string;
}

export interface LoginRequest {
	username: string;
	password: string;
}

export interface MessageResponse {
	status: ResponseStatus;
	messages: string[];
}

export interface OAuthTokenData {
	access_token: string;
	expires_in: number;
	scope: string;
	token_type: string;
	id_token: string;
}

export interface RegisterRequest {
	username: string;
	password: string;
	email: string;
	waiveEmailRecovery: boolean;
}
