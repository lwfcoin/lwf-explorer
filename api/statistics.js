'use strict';

var statistics = require('../lib/api/statistics');

module.exports = function (app) {
    var api = new statistics(app);

    app.get('/api/statistics/getLastBlock', function (req, res) {
        api.getLastBlock(
            function (data) { res.json(data); },
            function (data) { res.json(data); }
        );
    });

    app.get('/api/statistics/getBlocks', function (req, res) {
        api.getBlocks(
            function (data) { res.json(data); },
            function (data) { res.json(data); }
        );
    });

    app.get('/api/statistics/getPeers', function (req, res) {
        api.getPeers(
            function (data) { res.json(data); },
            function (data) { res.json(data); }
        );
    });

    app.get('/api/statistics/getBlockTimes', function (req, res) {
        api.getBlockTimes(
            function (data) { res.json(data); },
            function (data) { res.json(data); }
        );
    });

    app.get('/api/statistics/getTransactionsPerBlock', function (req, res) {
        api.getTransactionsPerBlock(
            function (data) { res.json(data); },
            function (data) { res.json(data); }
        );
    });    
};

