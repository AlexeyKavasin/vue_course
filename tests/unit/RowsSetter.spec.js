import { mount } from '@vue/test-utils'
import RowsSetter from '@/components/RowsSetter.vue'

describe('RowsSetter.vue', () => {
  it('is Vue component', () => {
    const wrapper = mount(RowsSetter, {
      propsData: {
        rows: 3
      }
    })

    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('has rowsList param', () => {
    const wrapper = mount(RowsSetter, {
      propsData: {
        rows: 3
      }
    })

    expect(wrapper.vm.rowsList).toBeDefined()
  })

  it('includes 3, 5 and 10 rows', () => {
    const wrapper = mount(RowsSetter, {
      propsData: {
        rows: 3
      }
    })

    expect(wrapper.vm.rowsList).toEqual([3, 5, 10])
  })

  it('generates input event', () => {
    const wrapper = mount(RowsSetter, {
      propsData: {
        rows: 3
      }
    })

    wrapper.vm.setRowsAmount(3)
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0]).toEqual([3])
  })
})
