import { render } from "@testing-library/react"

import { Navbar } from "."

import { composeTestingWrapper } from "../../../utils/testingUtils"

describe('Navbar', () => {
    it('renders without error', async () => {
        const view = render(<Navbar/>, { wrapper: composeTestingWrapper()});

        expect(view.asFragment()).toMatchSnapshot();
    });
})