package pl.korotkevics.eksiegarnia.orders;

import com.google.gson.Gson;

import java.lang.reflect.Type;
import java.util.List;

final class GSONUtility implements ParsingUtility {

  private final static Gson GSON = new Gson();

  @Override
  public <T> List<T> parseAsList(String payload, Type type) {
    return GSON.fromJson(payload, type);
  }
}
