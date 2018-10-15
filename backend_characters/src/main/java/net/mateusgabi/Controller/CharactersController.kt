package net.mateusgabi.Controller

import io.javalin.Context
import net.mateusgabi.Model.Character
import net.mateusgabi.Service.RetrofitInitializer
import net.mateusgabi.Service.AuthResponse
import io.reactivex.subjects.Subject;
import io.reactivex.Single

class CharactersController(val context: Context) {

  val retrofitInitializer = RetrofitInitializer()
  val marvelCharacterService = retrofitInitializer.marvelCharacterService()

  fun getAll(): Single<Character> {

    val auth: AuthResponse? = this.context.sessionAttribute("auth")

    val queries = HashMap<String, String>()
    queries["ts"] = auth!!.timestamp
    queries["apikey"] = auth!!.api_key
    queries["hash"] = auth!!.hash

    return marvelCharacterService.list(queries)

  }

  fun getOne(id: String): Character {
    return Character("Herói muito louco", "80")
  }

}
