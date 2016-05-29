// Simplified version of google-images module.
// google-images version does not return item's page url and alternate text,
// so I modified the module to return those values and, taking advantage
// of this change, removed the unused returned values and added
// an option to select the number of returned results.

'use strict';

var got = require('got');

function Client (id, apiKey) {
	if (!(this instanceof Client)) {
		return new Client(id, apiKey);
	}

	this.endpoint = 'https://www.googleapis.com';
	this.apiKey = apiKey;
	this.id = id;
}

Client.prototype.search = function (query, options) {
	if (!query) {
		throw new TypeError('Expected a query');
	}

	return got(this.endpoint + '/customsearch/v1', {
		query: this._buildOptions(query, options),
		json: true
	}).then(this._buildResponse);
};

Client.prototype._buildOptions = function (query, options) {
	if (!options) {
		options = {};
	}

	var result = {
		q: query.replace(/\s/g, '+'),
		searchType: 'image',
		cx: this.id,
		key: this.apiKey
	};

    if (options.num) {
        result.num = options.num;
    }

	if (options.page) {
		result.start = options.page;
	}

	if (options.size) {
		result.imgSize = options.size;
	}

	return result;
};

Client.prototype._buildResponse = function (res) {
	return res.body.items.map(function (item) {
		return {
			url: item.link,
            alt: item.snippet,
            page_url: item.image.contextLink
		};
	});
};

module.exports = Client;
