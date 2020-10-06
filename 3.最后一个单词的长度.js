var lengthOfLastWord = function(s) {
    const string = s.trim().split(' ')
    return string[string.length-1].length
};
lengthOfLastWord(" Hello World ni hao yadsd ")
