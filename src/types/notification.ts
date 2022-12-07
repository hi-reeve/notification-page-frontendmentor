export interface Notification {
	id: string;
	name: string;
	avatar: string;
	isRead: boolean;
	created_at: number;
	content: NotificationContent;
	type: typeof notificationType[number];
}
export const notificationType = [
	'follow',
	'join-group',
	'left-group',
	'comment-post',
	'comment-photo',
	'react',
	'private-messsage',
] as const;
export type NotificationContent =
	| NotificationFollow
	| NotificationGroup
	| NotificationPrivateMessage
	| NotificationComment
	| NotificationReaction;
export interface NotificationFollow {
	text: 'followed you';
}

export type NotificationGroup = {
	groupName: string;
} & ({ text: 'has joined your group' } | { text: 'left the group' });

export interface NotificationPrivateMessage {
	text: 'sent you a private message';
	content: string;
}

export type NotificationComment =
	| {
			text: 'commented on your post';
			postName: string;
	  }
	| {
			text: 'commented on your picture';
			image: string;
	  };

export type NotificationReaction = {
	text: 'reacted to your recent post';
	postName: string;
};
