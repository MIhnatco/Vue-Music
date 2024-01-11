import AppPlayer from '@/components/AppPlayer.vue'

import { shallowMount } from '@vue/test-utils'

describe('AppPlayer.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(AppPlayer)

    expect(wrapper.text()).toContain('Song Title')
  })

  test('renders ids correctly', () => {
    const wrapper = shallowMount(AppPlayer)

    const songElement = wrapper.find('#song')
    expect(songElement.attributes('id')).toBe('song')
    expect(songElement.text()).toBe('Song Title')

    const artistElement = wrapper.find('#artist')

    expect(artistElement.attributes('id')).toBe('artist')
    expect(artistElement.text()).toBe('Artist')
  })
})
