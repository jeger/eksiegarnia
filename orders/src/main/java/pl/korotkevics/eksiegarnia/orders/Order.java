package pl.korotkevics.eksiegarnia.orders;

import java.util.List;

class Order {

  private final List<Book> books;

  private final PaymentMethod paymentMethod;

  Order(List<Book> books, PaymentMethod paymentMethod) {
    this.books = books;
    this.paymentMethod = paymentMethod;
  }

  @Override
  public String toString() {
    return "Order{" +
        "books=" + books +
        ", paymentMethod=" + paymentMethod +
        '}';
  }
}
