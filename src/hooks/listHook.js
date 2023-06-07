import {ref, computed } from 'vue'

export const useList = () => {
    const list = ref([1,2,3,4])
    const listMake2 = () => {
      list.value = [1,2 ]
    }
    const listLength = computed(() => list.value.length)

    return {
        list,
        listLength,
        listMake2
    }
}
