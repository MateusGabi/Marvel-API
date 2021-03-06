package net.mateusgabi.Service

import io.javalin.Context
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.converter.jackson.JacksonConverterFactory;
import net.mateusgabi.Service.MarvelCharacterService
import com.jakewharton.retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory

class RetrofitInitializer(val context: Context) {

  var authRetrofit: Retrofit? = null
  var marvelRetrofit: Retrofit? = null

  init {
    authRetrofit = Retrofit
                .Builder()
                .baseUrl("http://authentication:5000/api/v1/")
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .build()

    marvelRetrofit = Retrofit
                    .Builder()
                    .baseUrl("http://gateway.marvel.com/v1/public/")
                    .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                    .addConverterFactory(JacksonConverterFactory.create())
                    .build()
  }

  fun marvelCharacterService(): MarvelCharacterService =
    marvelRetrofit!!.create(MarvelCharacterService::class.java)

  fun authService(): AuthService = authRetrofit!!.create(AuthService::class.java)

}
