import AppHeader from '@/components/AppHeader.vue'
import { shallowMount } from '@vue/test-utils'

describe('AppHeader.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(AppHeader)

    expect(wrapper.text()).toContain('Music')
  })

  test('renders ids correctly', () => {
    const wrapper = shallowMount(AppHeader)

    const headerElement = wrapper.find('#header')
    expect(headerElement.attributes('id')).toBe('header')

    const titleElement = wrapper.find('#title')
    expect(titleElement.attributes('id')).toBe('title')

    expect(titleElement.text()).toBe('Music')

    const loginElement = wrapper.find('#login')
    expect(loginElement.attributes('id')).toBe('login')

    expect(loginElement.text()).toBe('Login / Register')
  })
})
