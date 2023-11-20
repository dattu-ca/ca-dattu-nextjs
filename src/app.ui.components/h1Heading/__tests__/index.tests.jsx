import { H1Heading } from '../';
import {render, screen} from "@testing-library/react";

describe('<H1Heading />', () => {
    it('should render', () => {
        render(<H1Heading><span>Mock Header</span></H1Heading>)
        const {getByRole} = screen;
        expect(getByRole('heading', {level: 1})).toHaveTextContent(/Mock Header/i);
    });
})