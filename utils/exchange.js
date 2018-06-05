'use strict';

var async = require('async'),
    _ = require('underscore');

module.exports = function (config) {
    this.tickers = {};

    // TODO: FIX CUSTOM CURRENCIES
    var customCurrencies = ['ARK', 'RDD', 'XZC'];

    this.loadRates = function () {
        if (!config.exchangeRates.enabled) {
            return false;
        }
        api.getPriceTicker(function (err, result) {
            if (result) {
                _.each(result.BTC, function (ticker, key) {
                    if (!result.LWF[key]) {
                        console.log(`LWF/BTC -> ${key}/BTC`, result.LWF.BTC, ticker);

                        result.LWF[key] = customCurrencies.indexOf(key) > -1 ?
                            (result.LWF.BTC / ticker) : (result.LWF.BTC * ticker);
                    }
                });
                exchange.tickers = result;
            }
        });
    };

    // Interval
    if (config.exchangeRates.enabled) {
        setInterval(this.loadRates, config.exchangeRates.updateInterval);
    }

    // Private
    var api = require('./exchange-api')(config),
        exchange = this;
};