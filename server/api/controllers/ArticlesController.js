/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let sendResponse = (res, data) => {
        res.status(500);
        res.setHeader('Content-Type', 'application/json');
        res.json(JSON.stringify(data));
    }

module.exports = {

    list: (req, res) => {

        Articles.find({}).exec((error, articles) => {
            if(error) {
                res.status(500);
                res.json(JSON.stringify({error: error}));
                return;
            }

            res.ok(JSON.stringify({List: articles}));
        });
    
    },

    create: (req, res) => {

    },

    update: (req, res) => {

    },

    delete: (req, res) => {

    },

};

