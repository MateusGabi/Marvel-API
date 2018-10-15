package net.mateusgabi.Controller

import io.javalin.Context
import net.mateusgabi.Model.Character
import net.mateusgabi.MarvelService.RetrofitInitializer

class CharactersController {

  val retrofitInitializer = RetrofitInitializer()
  val marvelCharacterService = retrofitInitializer.marvelCharacterService()

  fun getAll(): MutableList<Character> {

    var a = Character("Nome a", 1)
    var b = Character("Nome a", 1)
    var c = Character("Nome a", 1)

    marvelCharacterService.list().subscribe {
      result -> println(result)
    }

    return mutableListOf<Character>(a, b, c)
  }

  fun getOne(id: String): Character {
    return Character("Herói muito louco", 80)
  }

}
