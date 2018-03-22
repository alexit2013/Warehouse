import constants from 'constants';
import {
    importerGetAllServer
} from 'services';

export const loadImporters = params => dispatch =>
    importerGetAllServer( )
        .then((response) => {
            dispatch( { type : constants.LOAD_IMPORTERS, importers : response.data} );
        })
        .catch((error) => {
            const importers = [ { name:'lol'},{name:'lol2'} ];
            dispatch( { type : constants.LOAD_IMPORTERS, importers} );
        });


