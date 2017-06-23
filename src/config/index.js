import prd from './production.js'
import stg from './staging.js'
import dev from './dev.js'

const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'dev'

let config = null

switch (env) {
  case 'production':
    config = prd
    break

  case 'staging':
    config = stg
    break

  default:
    config = dev
}

const c = config

export default c
