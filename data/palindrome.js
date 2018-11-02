let exportedMethods = {
    checkPalindrome(phrase) {

        if(!phrase) throw "Must provide data";
        
        var re = /[\W_]/g;
        var lowRegStr = phrase.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        if (reverseStr === lowRegStr)
            return true;
        else
            return false;
    }
}
module.exports = exportedMethods;
