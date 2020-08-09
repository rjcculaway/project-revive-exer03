<template>
    <b-row>
        <b-col>
            <ChatBubble v-for="i in [1, 2, 3]" :key="i" msg="test" />
            <ChatArea />
        </b-col>
    </b-row>
</template>

<script>
import ChatArea from '@/components/ChatArea.vue'
import ChatBubble from '@/components/ChatBubble.vue'

export default {
    name: 'ChatContainer',
    components: {
        ChatArea,
        ChatBubble
    }
}
</script>

<style scoped lang='scss'>
</style>