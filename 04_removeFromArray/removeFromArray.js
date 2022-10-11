const removeFromArray = function(array, ...args) {
    let removedArray = []
    for (const element of array) {
        args.includes(element)? null: removedArray.push(element);
    };

    return removedArray
};

// Do not edit below this line
module.exports = removeFromArray;
