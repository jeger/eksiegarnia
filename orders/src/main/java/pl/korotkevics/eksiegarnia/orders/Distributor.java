package pl.korotkevics.eksiegarnia.orders;

class Distributor {

  private final String name;

  Distributor(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Distributor{" +
        "name='" + name + '\'' +
        '}';
  }
}
