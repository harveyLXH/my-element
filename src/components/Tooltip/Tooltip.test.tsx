import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

const onVisibleChange = vi.fn()
describe('Tooltip.vue', () => {
  describe('Tooltip.vue', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })
  })

  test('basic tooltip', async () => {
    const wrapper = mount(
      () => (
        <Tooltip content="hello tooltip" trigger="click" onVisibleChange={onVisibleChange}>
          <button id="trigger">Trigger</button>
        </Tooltip>
      ),
      {
        attachTo: document.body
      }
    )
    // 静态测试
    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists())
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
    // 测试点击行为
    triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.vk-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
    console.log('after', wrapper.html())
    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})
