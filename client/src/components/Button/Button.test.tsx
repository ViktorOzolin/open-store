import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';



describe('Button component', () => {

    it('Button renders', () => {
        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
 

});