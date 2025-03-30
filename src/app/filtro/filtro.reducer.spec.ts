import { filtrosValidos, setFilter } from "./filtro.action"
import { filtroReducer } from "./filtro.reducer";

describe('filto tests', () => {
    it('should set filter to all', () => {
        const initialState: filtrosValidos = 'all';
        const action = setFilter({ filter: 'all' });
        const state = filtroReducer(initialState, action);

        expect(state).toBe('all');
    })

    it('should set filter to ', () => {
        const initialState: filtrosValidos = 'pending';
        const action = setFilter({ filter: 'pending' });
        const state = filtroReducer(initialState, action);

        expect(state).toBe('pending');
    })
})