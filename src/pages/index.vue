<script setup lang="ts">
import type { Notification } from '@/types/notification';
import { faker } from '@faker-js/faker';

const notifications = ref<Notification[]>([]);
const generateNotification = () => {
	const randomNotificationTotal = Math.trunc(Math.random() * 20 + 7);
	for (let index = 0; index <= randomNotificationTotal; index++) {
		notifications.value.push({
			id: faker.random.alphaNumeric(10),
			name: faker.name.fullName(),
			avatar: faker.image.avatar(),
			isRead: faker.datatype.boolean(),
			created_at: faker.date.recent().getTime(),
		});
	}
};

onMounted(() => {
	generateNotification();
	notifications.value.sort((a, b) => b.created_at - a.created_at);
});
</script>

<template>
	<section class="px-4">
		<header class="flex items-center w-full py-8">
			<p class="flex items-center space-x-2 text-2xl font-bold">
				<span>Notifications</span>
				<span
					class="inline-block w-8 text-lg font-normal text-center text-white align-middle rounded bg-primary-blue"
					>3</span
				>
			</p>
			<button class="ml-auto text-neutral-dark-grayish-blue">
				Mark all as read
			</button>
		</header>
		<ul class="space-y-4">
			<li v-for="notification in notifications" :key="notification.id">
				<Notification
					:avatar="notification.avatar"
					:created_at="notification.created_at"
					:id="notification.id"
					:isRead="notification.isRead"
					:name="notification.name"
				/>
			</li>
		</ul>
	</section>
</template>

<style scoped></style>
