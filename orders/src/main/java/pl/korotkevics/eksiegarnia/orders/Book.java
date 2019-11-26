package pl.korotkevics.eksiegarnia.orders;

class Book {
    private final Title title;
    private final Author author;
    private final Price price;
    private final Currency currency;

    Book(Title title, Author author, Price price, Currency currency) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.currency = currency;
    }
}
