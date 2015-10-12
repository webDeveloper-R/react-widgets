var Globalize = require('globalize')
var localizers = require('../src/localizers/globalize')

Globalize.load(
	require('cldr-data/main/en-GB/ca-gregorian.json'),
	require('cldr-data/main/en-GB/currencies.json'),
	require('cldr-data/main/en-GB/dateFields.json'),
	require('cldr-data/main/en-GB/numbers.json'),
  require('cldr-data/supplemental/numberingSystems.json'),
	require('cldr-data/supplemental/currencyData.json'),
	require('cldr-data/supplemental/likelySubtags.json'),
	require('cldr-data/supplemental/timeData.json'),
	require('cldr-data/supplemental/weekData.json')
);
Globalize.locale('en-GB')

localizers(Globalize)
