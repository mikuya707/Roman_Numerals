"use strict";

var JavaScriptAudition = {
    itRuns: function() {
        return true;
    }
};

/**Convert Numberals to Romans*/
function numeralToRoman(num){
    var deg = num.toString().length;
    var degree = Number('1' + Array(deg).join('0'));
    if(num.toString().length === 1){
        if(num === 0) return '';
        else return ones(num, 1);
    }
    else{
        return ones(Math.floor(num/degree), degree) + numeralToRoman(num % degree);
    }
}

function ones(num, deg){
    var numbers = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M'
    }

    if(num > 5){
        if(num % 5 === 4){
            return numbers[deg.toString()] + numbers[deg*10];
        }
        else{
            return numbers[(5*deg).toString()] + Array(num-5+1).join(numbers[deg.toString()]);
        }
    }
    else if(num === 5){
        return numbers[num*deg.toString()];
    }
    else{
        if(num % 5 === 4){
            return numbers[deg.toString()] + numbers[(deg*5).toString()];
        }
        else{
            return  Array(num+1).join(numbers[deg.toString()]);
        }

    }
}

/**Convert Romans to Numerals*/
function romanToNumeral(roman){
    var romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    return [].reduce.call(roman, function(sum, _, i){
        var current = romans[roman[i]],
            prev = romans[roman[i-1]],
            next = romans[roman[i+1]] || 0;

        if (prev && prev < current) return sum;

        return sum + (current < next ? next - current : current);
    }, 0);
}
