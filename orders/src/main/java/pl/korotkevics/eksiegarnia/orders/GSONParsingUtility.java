package pl.korotkevics.eksiegarnia.orders;

import com.google.gson.Gson;
import java.lang.reflect.Type;

final class GSONParsingUtility implements ParsingUtility {

  private final static Gson GSON = new Gson();

  @Override
  public <T> T parse(String payload, Type type) {
    return GSON.fromJson(payload, type);
  }
}
