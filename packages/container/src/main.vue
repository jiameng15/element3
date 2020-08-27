<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
import { computed, toRefs } from 'vue'

export default {
  name: 'ElContainer',

  componentName: 'ElContainer',

  props: {
    direction: String
  },
  setup(props, { slots }) {
    const { direction } = toRefs(props)
    const isVertical = computed(() => {
      if (direction === 'vertical') {
        return true
      } else if (direction === 'horizontal') {
        return false
      }
      return slots && slots.default
        ? slots.default().some((vnode) => {
            const tag = vnode.type && vnode.type.componentName
            return tag === 'ElHeader' || tag === 'ElFooter'
          })
        : false
    })
    return {
      isVertical
    }
  }
}
</script>
