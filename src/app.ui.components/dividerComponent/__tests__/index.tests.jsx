import {DividerComponent} from '../';
import {render, screen} from "@testing-library/react";

describe('<DividerComponent />', () => {
    it('should render', () => {
        render(<DividerComponent/>)
        const {getAllByTestId} = screen;
        expect(getAllByTestId('daisyui-divider').length).toBe(1);
    });
    it('should render two dividers if children is passed', () => {
        render(<DividerComponent><p>Mock data</p></DividerComponent>)
        const {getAllByTestId} = screen;
        expect(getAllByTestId('daisyui-divider').length).toBe(2);
    });
})