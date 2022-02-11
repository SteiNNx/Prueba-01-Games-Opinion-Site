import { shallowMount, } from '@vue/test-utils';
import NotFound from '@/views/NotFound'

describe('Vista NotFound', () => {
    it('Render NotFound', () => {
        const msg = '404';
        const notFoundWrapper = shallowMount(NotFound);
        expect(notFoundWrapper.text()).toMatch(msg)
    });
});
