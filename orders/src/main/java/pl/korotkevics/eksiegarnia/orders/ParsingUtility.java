package pl.korotkevics.eksiegarnia.orders;

import java.lang.reflect.Type;
import java.util.List;

interface ParsingUtility {

  <T> List<T> parseAsList(String payload, Type type);
}
