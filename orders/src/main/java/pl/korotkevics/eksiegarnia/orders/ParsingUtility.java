package pl.korotkevics.eksiegarnia.orders;

import java.lang.reflect.Type;

interface ParsingUtility {

  <T> T parse(String payload, Type type);
}
