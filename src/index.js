module.exports = function check(str, bracketsConfig) {
    let state = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][1]){
                if (state.length && state[state.length-1] === bracketsConfig[j][0]) {
                    state.pop()
                } else {
                    state.push(str[i]);
                }
            } else if (str[i] === bracketsConfig[j][0]) {
                state.push(str[i]);
            }
        }
    }

    return !state.length;
};
