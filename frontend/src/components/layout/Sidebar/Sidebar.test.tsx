import { render } from "@testing-library/react"

import { Sidebar } from "."

import { composeTestingWrapper } from "../../../utils/testingUtils"

describe('Sidebar', () => {
    it('renders without error', async () => {
        const view = render(<Sidebar/>, { wrapper: composeTestingWrapper()});

        expect(view.asFragment()).toMatchSnapshot();
    });
})