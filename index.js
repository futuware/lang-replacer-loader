'use strict';

module.exports = function (source) {
    this.cacheable();

    let lang = this.query.match(/lang=(.*)/);
    lang = lang ? lang[1] : '';

    return source.replace(/\$LANG/gm, lang);
};
