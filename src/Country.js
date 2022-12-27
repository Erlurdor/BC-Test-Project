export default class Country {
    id;
    image;
    title;
    capital;
    area;
    population;

    constructor(id, image, title, capital, area, population) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.capital = capital;
        this.area = area;
        this.population = population;
    }

    getCompactText(text, len) {
        const add = '...'

        if (text.length > len)
            return text.substring(0, len - add.length) + add

        return text
    }

    getCompactTitle() {
        return this.getCompactText(this.title, 13)
    }

    getCompactCapital() {
        return this.getCompactText(this.capital.toString(), 10)
    }
}