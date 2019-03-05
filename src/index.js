module.exports = function check(str, bracketsConfig) {

// function check(str, bracketsConfig) {


    var state = [];

    var brace_pairings = {},
        brace_pairings_return = {};

    bracketsConfig.map(item => {
        brace_pairings[item[0]] = item[1];
        brace_pairings_return[item[1]] = item[0];
    });

    // console.log(brace_pairings)

    for(var i = 0; i < str.length; i++){

        let x = brace_pairings[str[i]];

        if (str[i] == x) {

            // TODO
            // return false;

        } else {
            if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
                state.push(str[i]);
            } else if (str[i] in brace_pairings_return) {
                if (state.pop() != brace_pairings_return[str[i]]) { return false; }
            }
        }
    }
    return !state.length;
};


// check('88888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]);
