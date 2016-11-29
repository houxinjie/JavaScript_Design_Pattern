var DataParser = (function(){
    //私有变量
    var whitespaceRegex = /\s+/;

    //私有方法
    function stripWhitespace(str) {
        return str.replace(whitespaceRegex, '');
    }

    function stringSplit(str, delimiter) {
        return str.split(delimiter);
    }

    return {
        //公开方法
        stringToArray: function(str, delimiter, stripWS) {
            if(stripWS) {
                str = stripWhitespace(str);
            }
            var outputArray = stringSplit(str, delimiter);
            return outputArray;
        }
    };
}());
