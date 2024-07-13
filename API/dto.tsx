//Auto-generated type definitions

export enum ResponseStatus {
	Success,
	Warning,
	Error,
	RequiresAuth,
}

export interface AccountInfo {
	username: string;
	isOAuthAccount: boolean;
	email: string;
	emailConfirmed: boolean;
}

export interface BeginRecoverAccountRequest {
	userData: string;
}

export interface ChangeEmailRequest {
	newEmail: string;
	password: string;
}

export interface ChangePasswordRequest {
	oldPassword: string;
	newPassword: string;
}

export interface ConfirmEmailRequest {
	confirmationToken: string;
}

export interface EditHistory {
	noteId: string;
	timestamp: string;
	changes: string;
}

export interface EditHistoryResponse {
	history: EditHistory[];
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

export interface Note {
	noteId: string;
	historyId: string;
	title: string;
	tags: string[];
	markdown: string;
	archived: boolean;
}

export interface NoteResponse {
	status: ResponseStatus;
	note: Note;
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

export interface SearchSummary {
	noteId: string;
	title: string;
	tags: string[];
	score: number;
	archived: boolean;
}

export interface SearchSummaryResponse {
	summaries: SearchSummary[];
}
