import 'reflect-metadata'
import * as cors from 'cors'
import * as helmet from 'helmet'
import * as express from 'express'
import { createConnection } from 'typeorm'

const PORT = 3000

createConnection().then(async () => {
  const app = express()

  app.use(cors())
  app.use(helmet())

  app.use(express.json())
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}).catch(error => console.log(error))