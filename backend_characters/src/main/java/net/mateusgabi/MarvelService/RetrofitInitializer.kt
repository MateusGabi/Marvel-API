package net.mateusgabi.MarvelService

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory;
import net.mateusgabi.MarvelService.MarvelCharacterService
import com.jakewharton.retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory

class RetrofitInitializer {

  var retrofit: Retrofit? = null

  init {
    retrofit = Retrofit
                .Builder()
                .baseUrl("http://gateway.marvel.com/v1/public/")
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .build()
  }

  fun marvelCharacterService(): MarvelCharacterService =
    retrofit!!.create(MarvelCharacterService::class.java)

}
