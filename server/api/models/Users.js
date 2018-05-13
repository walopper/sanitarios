/**
 * Users.js
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

        name: {
            type: 'string',
            required: false
        },

        username: {
            type: 'string',
            required: true
        },

        password: {
            type: 'string',
            required: true
        },

        email: {
            type: 'string',
            required: false
        },

        active: {
            type: 'boolean'
        }

    },

};

