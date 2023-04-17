import {render, screen} from '@testing-library/react';
import App from "./App";

describe('App test', () => {
    it('should render App', () => {
        render(<App />)

        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    })
})