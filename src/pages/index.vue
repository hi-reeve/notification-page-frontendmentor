<script setup lang="ts">
import type { Notification, NotificationContent } from '@/types/notification';
import { notificationType } from '@/types/notification';
import { faker } from '@faker-js/faker';

const notifications = ref<Notification[]>([]);

const generateNotification = () => {
	const randomNotificationTotal = Math.trunc(Math.random() * 100 + 7);
	for (let index = 0; index <= randomNotificationTotal; index++) {
		const type = faker.helpers.arrayElement(notificationType);
		let content: NotificationContent = {
			text: 'followed you',
		};

		if (type === 'comment-photo')
			content = {
				text: 'commented on your picture',
				image: faker.image.abstract(),
			};
		else if (type === 'comment-post')
			content = {
				text: 'commented on your post',
				postName: faker.commerce.productDescription(),
			};
		else if (type === 'join-group')
			content = {
				text: 'has joined your group',
				groupName: faker.company.bs(),
			};
		else if (type === 'left-group')
			content = {
				text: 'left the group',
				groupName: faker.company.bs(),
			};
		else if (type === 'react')
			content = {
				text: 'reacted to your recent post',
				postName: faker.commerce.productDescription(),
			};
		else if (type === 'private-messsage')
			content = {
				text: 'sent you a private message',
				content: faker.lorem.paragraph(),
			};

		notifications.value.push({
			id: faker.random.alphaNumeric(10),
			name: faker.name.fullName(),
			avatar: faker.image.avatar(),
			isRead: faker.datatype.boolean(),
			created_at: faker.date.recent(90).getTime(),
			type,
			content,
		});
	}
};

const markAllAsRead = () => {
	notifications.value = notifications.value.map(notification => ({
		...notification,
		isRead: true,
	}));
};

const markRead = (id: string) => {
	notifications.value = notifications.value.map(notification => {
		if (notification.id === id)
			return {
				...notification,
				isRead: true,
			};
		return notification;
	});
};

onMounted(() => {
	generateNotification();
	notifications.value.sort((a, b) => b.created_at - a.created_at);
});
</script>

<template>
	<main class="grid min-h-screen bg-blue-300 place-content-center">
		<section
			class="max-w-5xl px-4 shadow-lg max-h-[80vh] overflow-auto rounded bg-white"
		>
			<header class="flex items-center w-full py-8">
				<p class="flex items-center space-x-2 text-2xl font-bold">
					<span>Notifications</span>
					<span
						class="inline-block w-8 text-lg font-normal text-center text-white align-middle rounded bg-primary-blue"
						>{{ notifications.length }}</span
					>
				</p>
				<button
					type="button"
					class="ml-auto text-neutral-dark-grayish-blue"
					@click="markAllAsRead"
				>
					Mark all as read
				</button>
			</header>
			<ul class="space-y-4">
				<li
					v-for="notification in notifications"
					:key="notification.id"
				>
					<Notification
						:notification="notification"
						@read="markRead"
					/>
				</li>
			</ul>
		</section>
	</main>
</template>
