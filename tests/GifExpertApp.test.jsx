import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import 'whatwg-fetch';



// TODO: https://www.udemy.com/course/react-cero-experto/learn/lecture/32021650
// Tarea: 113
describe('Pruebas en <GifExpertApp />', () => {

    test('test1 de tarea', () => {

        render( <GifExpertApp /> );
        screen.debug();
    })


});