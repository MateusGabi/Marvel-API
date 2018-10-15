package net.mateusgabi.Service

import retrofit2.http.GET
import io.reactivex.Single

interface AuthService {

  @GET("auth")
  fun auth(): Single<AuthResponse>
}
