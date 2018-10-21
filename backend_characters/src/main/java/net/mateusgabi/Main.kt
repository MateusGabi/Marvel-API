package net.mateusgabi

import io.javalin.Javalin

import net.mateusgabi.Controller.CharactersController
import net.mateusgabi.Service.RetrofitInitializer
import net.mateusgabi.Service.AuthResponse

fun main(args: Array<String>) {
    val app = Javalin.create()

    app.before { ctx ->
      // get authentication data
      RetrofitInitializer(ctx).authService().auth().subscribe({
        result -> ctx.sessionAttribute("auth", result)
      })
      {
        err -> throw Exception("Erro de conexão com servidor de autenticação.")
      }
    }

    app.exception(Exception::class.java) { e, ctx ->
      // handle general exceptions here
      // will not trigger if more specific exception-mapper found
      val s = HashMap<String, MutableList<String>>()
      s["errors"] = mutableListOf<String>(e.message!!)
      ctx.json(s).status(500)
    }

    app.get("/api/v1/characters") { ctx ->

      var auth: AuthResponse? = ctx.sessionAttribute("auth")

      if (auth == null)
        throw Exception("Dados de autenticação insuficiente.")


        var charactersController = CharactersController(ctx)

        charactersController.getAll().subscribe {
          result -> ctx.json(result)
        }

    }

    app.get("/api/v1/characters/:id") { ctx ->

      var auth: AuthResponse? = ctx.sessionAttribute("auth")

      if (auth == null)
        throw Exception("Dados de autenticação insuficiente.")

      var charactersController = CharactersController(ctx)

      var id = ctx.pathParam("id")
      var character = charactersController.getOne(id)

      ctx.json(character)
    }

    app.start(7000)
}
