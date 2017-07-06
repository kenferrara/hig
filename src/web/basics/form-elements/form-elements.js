var Interface = require('interface.json');
var Core = require('_core.js');

var TextField = require('./text-field/text-field.js');

/**
 * Holder for FormElements
 *
 * @class
 */

class FormElements extends Core {

    constructor(options){
        super(options);
    }

}

FormElements._interface = Interface['basics']['FormElements'];
FormElements._defaults = {};
FormElements._partials = {
    TextField: TextField
};

module.exports = FormElements;