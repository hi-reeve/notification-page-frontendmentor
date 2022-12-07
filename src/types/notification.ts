export interface Notification {
	id: string;
	name: string;
	avatar: string;
	isRead: boolean;
	created_at: number;
}
export type NotificationType =
	| 'follow'
	| 'join-group'
	| 'left-group'
	| 'private-message'
	| 'react';
