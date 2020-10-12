<template>
    <div>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>

        <h2>E a palavra que @{{ username }} mais usou foi....</h2>

        <h1>{{ word }}</h1>
        <h3>Total de utilização: {{total}} {{ total > 1 || total === 0 ? 'vezes' : 'vez' }}</h3>
    </div>
</template>

<script>
export default {
    name: 'FoundWord',
    props: {
        username: {
            type: String,
            required: true
        },
        word: {
            type: String,
            required: true
        },
        total: {
            type: Number,
            required: true,
            default: 0
        }
    }
}
</script>