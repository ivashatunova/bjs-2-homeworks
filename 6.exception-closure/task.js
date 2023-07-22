function parseCount(number) {
    const parsedValue = Number.parseFloat(number);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}



function validateCount(number) {
    try {
        return parseCount(number)
    } catch (error) {
        return error;
    }
}



