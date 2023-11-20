import {SkipLink} from '../';
import {render, screen} from "@testing-library/react";

describe('<SkipLink />', () => {
    it('should render', () => {
        render(<SkipLink skipToId='mainContent'/>)
        const {getByRole, getByTestId} = screen;
        expect(getByTestId('link-skiplink')).toBeInTheDocument();
        expect(getByRole('link')).toHaveAttribute('href', '#mainContent')
    });
})