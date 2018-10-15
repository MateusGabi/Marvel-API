package net.mateusgabi.Service

import java.io.Serializable
import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
class CharacterDataWrapper: Serializable {
    var data: CharacterDataContainer? = null
}
