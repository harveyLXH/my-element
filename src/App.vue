<template>
  <!-- <Message message="hello message" :duration="0" show-close /> -->

  <header>
    <Dropdown
      placement="bottom"
      :trigger="trigger"
      :menu-options="options"
      @visible-change="(e) => inlineConsole('visible change', e)"
      @select="(e) => inlineConsole('select', e)"
      manual
      ref="tooltipRef"
    >
      <img src="./assets/logo.svg" class="logo" alt="Vue logo" width="125" height="125" />
      <template #content>
        <h1>Hello tooltip</h1>
      </template>
    </Dropdown>
  </header>
  <Icon icon="arrow-up" :size="size" type="danger" color="#0011ee" />
  <main>
    <Button ef="buttonRef" @click="open">测试按钮</Button>
    <Button plain @click="close">空心按钮</Button>
    <Button round>圆角按钮</Button>
    <Button circle>Ha</Button>
    <Button disabled>禁用按钮</Button><br /><br />

    <Button type="primary">primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">info</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button><br /><br />

    <Button type="primary" plain>primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>info</Button>
    <Button type="warning" plain>warning</Button>
    <Button type="danger" plain>danger</Button><br /><br />

    <Button size="small">button</Button>
    <Button size="large">button</Button><br /><br />

    <Button size="large" loading>button</Button>
    <Button size="large" icon="arrow-up">Icon</Button>

    <Collapse v-model="openedValue">
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
    {{ openedValue }}
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import type { Options } from '@popperjs/core'
// import Tooltip from './components/Tooltip/Tooltip.vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Message from './components/Message/Message.vue'
import { createMessage } from './components/Message/method'

import type { TooltipInstance } from './components/Tooltip/types'
import type { ButtonInstance } from './components/Button/types'
import type { MenuOption } from './components/Dropdown/types'

const buttonRef = ref<ButtonInstance | null>(null)
const tooltipRef = ref<TooltipInstance | null>(null)

const openedValue = ref(['a'])
const size = ref<any>('3x')
const trigger = ref<any>('click')
const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]

const open = () => {
  tooltipRef.value?.show()
}
const close = () => {
  tooltipRef.value?.hide()
}
const inlineConsole = (...args: any) => {
  console.log(...args)
}
onMounted(() => {
  createMessage({ message: 'hello world', duration: 0, showClose: true })
  createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true })
  createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: true })

  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref)
  }

  onMounted(() => {
    createMessage({ message: 'hello world', duration: 0, showClose: true })
    createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true })
    createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: true })
    if (buttonRef.value) {
      console.log('buttonRef', buttonRef.value.ref)
    }
    setTimeout(() => {
      openedValue.value = ['a', 'b']
      size.value = '2xl'
      // instance.destory()
      // trigger.value = 'hover'
    }, 2000)
  })
})

const testClick = () => {
  // console.log('testCLick')
  alert('testClick')
}
</script>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  border: 1px solid green;
}
.vk-tooltip__popper {
  border: 1px solid red;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
