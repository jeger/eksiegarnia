package pl.korotkevics.eksiegarnia.orders;

class Book {

  private final Title title;
  private final Author author;
  private final Price price;
  private final Currency currency;
  private final Distributor distributor;

  Book(Title title, Author author, Price price, Currency currency,
      Distributor distributor) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.currency = currency;
    this.distributor = distributor;
  }

  @Override
  public String toString() {
    return "Book{" +
        "title=" + title +
        ", author=" + author +
        ", price=" + price +
        ", currency=" + currency +
        ", distributor=" + distributor +
        '}';
  }
}
