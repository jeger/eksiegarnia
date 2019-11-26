package pl.korotkevics.eksiegarnia.orders;

import java.util.List;

class Order {

  private final List<Book> books;

  Order(List<Book> books) {
    this.books = books;
  }
}
