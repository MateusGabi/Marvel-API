package net.mateusgabi.Model

import java.io.Serializable
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
class Character: Serializable {
  var id: Int? = null
  var name: String? = null
  var description: String? = null
  var thumbnail: CharacterImage? = null
}
