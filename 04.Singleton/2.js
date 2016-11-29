var DataParser = {
    //私有方法
    _stripWhitespace: function(str) {
        return str.replace(/\s+/, '');
    },
    _stringSplit: function(str, delimiter) {
        return str.split(delimiter);
    },
    //公开方法
    stringToArray: function(str, delimiter, stripWS) {
        if(stripWS) {
            str = this._stripWhitespace(str);
        }
        var outputArray = this._stringSplit(str, delimiter);
        return outputArray;
    }

};
