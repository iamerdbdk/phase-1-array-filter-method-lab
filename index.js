function findMatching(source, erdal) {
    return source.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === erdal.toLowerCase()
    );
}

function fuzzyMatch(source, testString) {
    return source.filter(
    (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
}

function matchName(source, erdalName) {
    return source.filter((record) => record.name === erdalName);
}