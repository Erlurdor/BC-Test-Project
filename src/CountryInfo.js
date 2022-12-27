export default class CountryInfo {
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
}