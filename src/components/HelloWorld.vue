<script setup>
import {ref, reactive, defineComponent, watch} from 'vue'
import {useName} from '../hooks/nameHook'
import {useList} from '../hooks/listHook'


  const r = useRouter()
  const {name, isValid, send} = useName('Misha', r)

  const { list, listLength, listMake2 } = useList()

  const foo = ref(42)
  const user = reactive({
      name: 'aaa',
      age: 11
  })

  watch([() => name.value, () => list.value.length], (newValue, oldValue) => {
    console.log('watch name & list', newValue)
  }, {immediate: true})

</script>

<template>
  <form>
    <h1>{{ name }} + {{ foo }}</h1>

    <label>минимум 2 символа</label>
    <input v-model="name"/>

    <button @click="send" :disabled="!isValid">send</button>
  </form>

  listLength: {{ listLength }}
  <button @click="doIt">doIt</button>
  <button @click="listMake2">makle list 2</button>

</template>

