package pl.korotkevics.eksiegarnia.orders;

class ServiceImpl implements Service {

  private final ParsingUtility parsingUtility;

  ServiceImpl(ParsingUtility parsingUtility) {
    this.parsingUtility = parsingUtility;
  }

  @Override
  public Order create(String body) {
    return new Order(parsingUtility.parseAsList(body, Order.class));
  }
}
