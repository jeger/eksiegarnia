package pl.korotkevics.eksiegarnia.orders;

enum PaymentMethod {
  TRANSFER, CASH, CARD, MOBILE;

  @Override
  public String toString() {
    return name().toUpperCase();
  }
}
