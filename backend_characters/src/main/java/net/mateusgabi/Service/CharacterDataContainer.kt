package net.mateusgabi.Service

import net.mateusgabi.Model.Character
import java.io.Serializable

class CharacterDataContainer: Serializable {
    var offset: Int? = null
    var limit: Int? = null
    var total: Int? = null
    var count: Int? = null
    var results: List<Character>? = null
}
