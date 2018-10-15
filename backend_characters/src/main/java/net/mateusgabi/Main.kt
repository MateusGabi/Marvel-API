package net.mateusgabi

import io.javalin.Javalin

import net.mateusgabi.Controller.CharactersController

fun main(args: Array<String>) {
    val app = Javalin.create()

    app.get("/api/v1/characters") { ctx ->

      var charactersController = CharactersController()
      var list = charactersController.getAll()

      ctx.json(list)

    }

    app.get("/api/v1/characters/:id") { ctx ->

      var charactersController = CharactersController()

      var id = ctx.pathParam("id")
      var character = charactersController.getOne(id)

      ctx.json(character)
    }

    app.start(7000)
}
