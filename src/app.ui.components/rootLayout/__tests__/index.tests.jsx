import { RootLayoutComponent } from '../';
import {render, screen} from "@testing-library/react";

describe('<RootLayoutComponent />', () => {
    it('should render', () => {
        render(<RootLayoutComponent><span>Mock Header</span></RootLayoutComponent>)
        const {getByTestId} = screen;
        expect(getByTestId('scaffolding-blueprint')).toBeInTheDocument();
        expect(getByTestId('scaffolding-content')).toBeInTheDocument();
    });
})