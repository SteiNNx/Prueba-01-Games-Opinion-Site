import { shallowMount, } from '@vue/test-utils';
import Opiniones from '@/views/Opiniones'

describe('Vista Opiniones', () => {
    it('Render Opiniones', () => {
        const msg = 'Lista de Opiniones'
        const opinionesWrapper = shallowMount(Opiniones);
        expect(opinionesWrapper.text()).toMatch(msg)
    });
});
