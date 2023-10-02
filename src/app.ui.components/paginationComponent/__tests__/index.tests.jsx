import {render, screen} from '@testing-library/react'


import {PaginationComponent} from '../';

const originalMockData = Object.freeze({
    total: 12,
    skip: 0,
    limit: 10,
    current: 1,
    linkPrefix: '/posts'
});

describe('<PaginationComponent />', () => {
    let mockData = {...originalMockData};
    beforeEach(() => {
        mockData = {...originalMockData};
    })
    describe('total = 9', () => {
        it('should NOT render the Previous and Next buttons', () => {
            mockData.total = 9;
            render(<PaginationComponent {...mockData} />)
            const {queryByText, queryByRole} = screen;

            expect(queryByText(/Previous/i)).not.toBeInTheDocument();
            expect(queryByRole('link', {name: /Next/i})).not.toBeInTheDocument();
        });
    })
    describe('total = 12', function () {
        it('should render the Previous and Next buttons', () => {
            render(<PaginationComponent {...mockData} />)
            const {getByText, getByRole} = screen;

            expect(getByText(/Previous/i)).toBeInTheDocument();
            expect(getByRole('link', {name: /Next/i})).toBeInTheDocument();
        })
    });
})