import { shallowMount, } from '@vue/test-utils';
import Home from '@/views/Home'

describe('Vista Home', () => {
  it('Render home', () => {
    const msg = 'Lista de Juegos Disponibles'
    const homeWrapper = shallowMount(Home);
    expect(homeWrapper.text()).toMatch(msg)
  });
});
