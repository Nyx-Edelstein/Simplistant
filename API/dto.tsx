//Auto-generated type definitions

export enum ResponseStatus {
	Success,
	Warning,
	Error,
	RequiresAuth,
}

export interface AccountInfo {
	Username: string;
	IsOAuthAccount: boolean;
	Email: string;
	EmailConfirmed: boolean;
}

export interface BeginRecoverAccountRequest {
	UserData: string;
}

export interface ChangeEmailRequest {
	NewEmail: string;
	Password: string;
}

export interface ChangePasswordRequest {
	OldPassword: string;
	NewPassword: string;
}

export interface ConfirmEmailRequest {
	ConfirmationToken: string;
}

export interface FinishRecoverAccountRequest {
	Username: string;
	Password: string;
	RecoveryToken: string;
}

export interface LoginRequest {
	Username: string;
	Password: string;
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
	Username: string;
	Password: string;
	Email: string;
	WaiveEmailRecovery: boolean;
}
