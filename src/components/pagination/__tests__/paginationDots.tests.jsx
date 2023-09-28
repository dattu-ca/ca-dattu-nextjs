import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {useRouter} from "next/navigation";
import {PaginationDots} from '../paginationDots';
import {PaginationContextProvider} from '../context';

const mockPush = jest.fn();
beforeEach(() => {
    useRouter.mockReturnValue({
        push: mockPush
    })
})


const originalMockData = Object.freeze({
    totalItems: 100,
    skip: 0,
    limit: 10,
    current: 1,
    linkPrefix: '/posts'
})

describe('<PaginationDots />', () => {
    let mockData = {...originalMockData};
    beforeEach(() => {
        mockData = {...originalMockData};
    })

    describe(`Default props: ${Object.keys(mockData).map(k => '[' + k + '=' + mockData[k] + ']')}`, () => {
        it('should render', () => {
            render(<PaginationContextProvider {...mockData}>
                <PaginationDots/>
            </PaginationContextProvider>)
            const {getByTestId} = screen;

            const ddl = getByTestId('pagination-dots');
            expect(ddl).toBeInTheDocument();

            waitFor(() => fireEvent.change(ddl, {target: {value: 4}}))
            expect(mockPush).toHaveBeenNthCalledWith(1, '/posts/4')
        });
    })
});