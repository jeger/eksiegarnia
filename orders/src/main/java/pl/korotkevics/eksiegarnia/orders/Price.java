package pl.korotkevics.eksiegarnia.orders;

class Price {

  private final double value;

  Price(double value) {
    this.value = value;
  }

  @Override
  public String toString() {
    return "Price{" +
        "value=" + value +
        '}';
  }
}
