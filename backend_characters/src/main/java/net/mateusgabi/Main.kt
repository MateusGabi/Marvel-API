package net.mateusgabi

import io.javalin.Javalin

import net.mateusgabi.Controller.CharactersController
import net.mateusgabi.Service.RetrofitInitializer
import net.mateusgabi.Service.AuthResponse

fun main(args: Array<String>) {
    val app = Javalin.create()

    app.before { ctx ->
      // get authentication data
      RetrofitInitializer().authService().auth().subscribe {
        result -> ctx.sessionAttribute("auth", result)
      }
    }

    app.get("/api/v1/characters") { ctx ->

      var auth: AuthResponse? = ctx.sessionAttribute("auth")

      if (auth == null) {
        ctx.status(401)
      } else {
        var charactersController = CharactersController(ctx)

        charactersController.getAll().subscribe {
          result ->
                  ctx.json(result)
        }
      }
    }

    app.get("/api/v1/characters/:id") { ctx ->

      var auth: AuthResponse? = ctx.sessionAttribute("auth")

      if (auth == null) {
        ctx.status(401)
      } else {

        var charactersController = CharactersController(ctx)

        var id = ctx.pathParam("id")
        var character = charactersController.getOne(id)

        ctx.json(character)
      }
    }

    app.exception(com.jakewharton.retrofit2.adapter.rxjava2.HttpException::class.java) { e, ctx ->
    // handle general exceptions here
    // will not trigger if more specific exception-mapper found

  ctx.result("sdskdks")
    }

    app.start(7000)
}
