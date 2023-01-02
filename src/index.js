module.exports = function reverse (n) {
    let startstring;
    if (n < 0)
    {
        startstring = n * -1;
    }
    if (n > 0)
    {
        startstring = n;
    }
    let tostring1 = startstring.toString();
    let arraystring = tostring1.split('')
    let reversedarray = arraystring.reverse();
    if (reversedarray < 1)
    {
        let finalstring = reversedarray * -1;
        return (finalstring.join(''))
    }
    else{
        return reversedarray.join('');
    }
}
