import {render, screen} from '@testing-library/react';
import {PaginationButtonsList} from '../PaginationButtonsList';
import {PaginationContextProvider} from '../context';


const originalMockData = Object.freeze({
    totalItems: 100,
    skip: 0,
    limit: 10,
    current: 1,
    linkPrefix: '/posts'
})

describe('<PaginationButtonsList />', () => {
    let mockData = {...originalMockData};
    beforeEach(() => {
        mockData = {...originalMockData};
    })
    describe(`Default props: ${Object.keys(mockData).map(k => '[' + k + '=' + mockData[k] + ']')}`, () => {
        it('should render [previous, next, 1, 2, 3, 5, 6, 7, 10, and 2 dots] ', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButtonsList/>
            </PaginationContextProvider>)
            const {getByText, getByRole, getAllByTestId} = screen;

            expect(getByText(/Previous/i)).toBeInTheDocument();
            expect(getByRole('link', {name: /Next/i})).toBeInTheDocument();

            expect(getByText(/^1$/i)).toBeInTheDocument();
            [2, 3, 4, 5, 6, 7, 10].forEach(i => expect(getByRole('link', {name: new RegExp(i.toString(), 'i')})).toBeInTheDocument())

            // TODO: Fix it in 185969023
            // 1 for desktop view and 1 for mobile view
            expect(getAllByTestId('pagination-dots').length).toEqual(2);
        });

        it('should have the proper href attributes', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButtonsList/>
            </PaginationContextProvider>)
            const {getByText, getByRole} = screen;

            expect(getByText(/Previous/i)).not.toHaveAttribute('href');
            expect(getByRole('link', { name: /Next/i})).toHaveAttribute('href', '/posts/2');

            expect(getByText(/^1$/i)).not.toHaveAttribute('href');
            [2, 3, 4, 5, 6, 7, 10].forEach(i => expect(getByRole('link', {name: new RegExp(i.toString(), 'i')})).toHaveAttribute('href', `/posts/${i}`))
        });
    })

    describe(`Default props with current = 2`, () => {
        beforeEach(() => {
            mockData.current = 2
        })
        it('should render [previous, next, 1, 2, 3, 5, 6, 7, 10, and 2 dots] ', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButtonsList/>
            </PaginationContextProvider>)
            const {getByText, getByRole, getAllByTestId} = screen;

            expect(getByRole('link', {name: /Previous/i})).toBeInTheDocument();
            expect(getByRole('link', {name: /Next/i})).toBeInTheDocument();

            expect(getByText(/^2$/i)).toBeInTheDocument();
            [3, 4, 5, 6, 7, 10].forEach(i => expect(getByRole('link', {name: new RegExp(i.toString(), 'i')})).toBeInTheDocument())

            // TODO: Fix it in 185969023
            // 1 for desktop view and 1 for mobile view
            expect(getAllByTestId('pagination-dots').length).toEqual(2);
        });

        it('should have the proper href attributes', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationButtonsList/>
            </PaginationContextProvider>)
            const {getByRole, getByText} = screen;

            expect(getByRole('link', { name: /Previous/i})).toHaveAttribute('href', '/posts/1');
            expect(getByRole('link', { name: /Next/i})).toHaveAttribute('href', '/posts/3');

            expect(getByText(/^2$/i)).not.toHaveAttribute('href');
            [3, 4, 5, 6, 7, 10].forEach(i => expect(getByRole('link', {name: new RegExp(i.toString(), 'i')})).toHaveAttribute('href', `/posts/${i}`))
        });
    })
})