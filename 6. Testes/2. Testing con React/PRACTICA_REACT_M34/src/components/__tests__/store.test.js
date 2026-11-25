import store from '../../redux/store';

describe('Redux store', () => {
    it('should start with an empty library and an empty search', () => {
        const state = store.getState();
        expect(state.library).toEqual([]);
        expect(state.search).toEqual({
            loading: false,
            error: '',
            term: '',
            results: []
        });
    });
});
