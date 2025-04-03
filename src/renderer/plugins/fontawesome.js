import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importando alguns ícones como exemplo
import { faHome, faUser, faCog, faPlay, faEllipsisVertical, faCircleNotch, faPause } from '@fortawesome/free-solid-svg-icons'

import { faSquareJs, faPython, faDartLang } from '@fortawesome/free-brands-svg-icons';


// Adicione os ícones que deseja usar
library.add(faHome, faUser, faCog, faPlay, faEllipsisVertical, faSquareJs, faPython, faDartLang, faCircleNotch, faPause)

export default (app) => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
