/**
 * Articulos.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        id: {
            type: 'number',
            autoIncrement: true
        },

        title: {
            type: 'string',
            required: true
        },

        vendor: {
            type: 'string',
            required: false
        },

        description: {
            type: 'string',
            required: false
        },

        vendor_url: {
            type: 'string',
            required: false
        },

        visible: {
            type: 'boolean'
        }

    },

};

