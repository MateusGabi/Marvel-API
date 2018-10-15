package net.mateusgabi.MarvelService

import retrofit2.Call
import retrofit2.http.GET
import io.reactivex.Single
import net.mateusgabi.Model.Character

interface MarvelCharacterService {

  @GET("characters")
  fun list(): Single<List<Character>>
}
