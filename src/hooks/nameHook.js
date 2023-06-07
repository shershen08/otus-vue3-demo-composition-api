
import {ref, computed, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router'



export const useName = (startName, prefix = 'Hello', URL = '/api?data=') => () => {


    const name = ref(startName)
    const doIt = () => {
      console.log(`${prefix} ${name.value}`);
    }
    const isValid = computed(() => name.value && name.value.length >= 2)
    const send = () => {
        fetch(`${URL}${name.value}`)
        r.push({

        })
    }
    onMounted(() => {
      doIt()
    })

    return {
        name,
        isValid,
        send
    }
}
