<script setup lang="ts">
import { Notification } from '@/types/notification';
import { formatDistanceToNow } from 'date-fns';
const props = defineProps<{
	notification: Notification;
}>();
const emits = defineEmits<{ (e: 'read', id: string): void }>();
const notificationTime = computed(() =>
	formatDistanceToNow(props.notification.created_at),
);
</script>

<template>
	<article
		class="p-2 transition-all duration-300 ease-in-out rounded cursor-pointer hover:bg-neutral-light-grayish-blue-3"
		:class="{
			'bg-neutral-light-grayish-blue-3': !notification.isRead,
		}"
		@click="emits('read', notification.id)"
		@keydown="emits('read', notification.id)"
	>
		<figure class="flex items-start space-x-4">
			<img
				:src="notification.avatar"
				:alt="notification.name"
				class="w-12 h-12 rounded-full"
			/>
			<figcaption class="flex flex-col items-start w-full">
				<div class="flex w-full">
					<p class="space-x-1 text-sm">
						<span class="font-bold text-neutral-very-dark-blue">{{
							notification.name
						}}</span>
						<span class="text-neutral-grayish-blue">{{
							notification.content.text
						}}</span>

						<span
							v-if="'postName' in notification.content"
							class="font-semibold text-neutral-dark-grayish-blue"
						>
							{{ notification.content.postName }}
						</span>
						<span
							v-if="'groupName' in notification.content"
							class="font-semibold text-primary-blue hover:underline"
						>
							{{ notification.content.groupName }}
						</span>
						<span
							v-if="!notification.isRead"
							class="inline-block w-2 h-2 rounded-full bg-primary-red"
						></span>
					</p>
					<img
						v-if="'image' in notification.content"
						:src="notification.content.image"
						:alt="notification.type"
						class="w-12 h-12 rounded md:ml-auto"
					/>
				</div>
				<p class="text-sm text-neutral-grayish-blue">
					{{ notificationTime }} ago
				</p>
				<p
					v-if="'content' in notification.content"
					class="p-4 text-sm border rounded text-neutral-grayish-blue border-neutral-400 lg:mt-4"
				>
					{{ notification.content.content }}
				</p>
			</figcaption>
		</figure>
	</article>
</template>
