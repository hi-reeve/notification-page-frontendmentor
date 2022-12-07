<script setup lang="ts">
import { Notification } from '@/types/notification';

const props = defineProps<Notification>();
</script>

<template>
	<article class="notification">
		<figure class="flex items-start space-x-4">
			<img
				:src="props.avatar"
				:alt="props.name"
				class="w-12 h-12 rounded-full"
			/>
			<figcaption class="notification__caption">
				<p class="text-sm">
					<span class="font-bold text-neutral-very-dark-blue">{{
						props.name
					}}</span>
				</p>
			</figcaption>
		</figure>
	</article>
</template>
