import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    

    test('Debe de cambiar el valor de la caja de texto', () => {
        const inputValue = 'Saitama';
        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );

        expect( input.value ).toBe( inputValue );
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // Mock de una función

        render( <AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // Mock de una función

        render( <AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        // 3 formas de hacerlo
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn(); // Mock de una función
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );
        // 2 formas de hacerlo
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });

});