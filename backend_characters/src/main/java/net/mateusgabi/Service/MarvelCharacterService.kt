package net.mateusgabi.Service

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.QueryMap
import io.reactivex.Single
import net.mateusgabi.Model.Character

interface MarvelCharacterService {

  @GET("characters")
  fun list(@QueryMap queries: HashMap<String, String>): Single<Character>
}
