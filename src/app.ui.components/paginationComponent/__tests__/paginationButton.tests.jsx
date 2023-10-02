import {render, screen} from '@testing-library/react';
import {PaginationButton} from '../paginationButton';
import {PaginationContextProvider} from '../context';



const originalMockData = Object.freeze({
    totalItems: 100,
    skip: 0,
    limit: 10,
    current: 1,
    linkPrefix: '/posts'
})

describe('<PaginationButton />', () => {
    let mockData = {...originalMockData};
    beforeEach(() => {
        mockData = {...originalMockData};
    })

    describe(`Default props: ${Object.keys(mockData).map(k => '[' + k + '=' + mockData[k] + ']')}`, () => {
        it('should not be a link', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButton pageNumber={1} aria='Go to Page 1' showDots={false}>
                    1
                </PaginationButton>
            </PaginationContextProvider>)
            const {queryByRole} = screen;
            expect(queryByRole('link')).not.toBeInTheDocument()
        });
        it('should have proper HREF attribute', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButton pageNumber={5} aria='Go to Page 5' showDots={false}>
                    5
                </PaginationButton>
            </PaginationContextProvider>)
            const {getByRole} = screen;
            
            expect(getByRole('link')).toHaveAttribute('href', '/posts/5');
            expect(getByRole('link')).toHaveAttribute('aria-label', 'Go to Page 5');
        });
    })
});