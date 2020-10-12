<template>
    <div>
        <div v-if="emptyUsername">Favor digite um username!</div>
        <input type="text" v-model="username" />
        <button @click="findWord">Procurar</button>
    </div>
</template>

<script>
import { getWordByUsername } from '../service';
export default {
    name: 'FindWord',
    data: () => ({
        username: null,
        emptyUsername: false,
    }),
    methods: {
        async findWord() {
            if (!this.username || this.username.length < 1) {
                this.emptyUsername = true
            } else {
                const response = await getWordByUsername(this.username);
                this.$emit('found', {
                    word: response.data.word,
                    total: response.data.total,
                    username: this.username
                });
            }
        }
    }
}
</script>
