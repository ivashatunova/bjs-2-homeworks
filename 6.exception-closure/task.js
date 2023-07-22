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

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        const perimeter = this.a + this.b + this.c;
        return parseFloat(perimeter);

    }

    get area() {
        const halfPerimeter = this.perimeter / 2;
        const area = Math.sqrt((halfPerimeter) * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
        return parseFloat(area.toFixed(3));
    }
}



function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        console.log("Ошибка! Треугольник не существует");
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}





