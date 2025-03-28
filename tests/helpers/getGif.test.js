import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGif";
import 'whatwg-fetch';

describe('Pruebas en getGif.js', () => {

    test('Debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect( gifs.length).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });




});