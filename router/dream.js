import { Router } from "express";
const dreamRouter  = Router()

import * as controller from '../appController/dreamCont.js'

dreamRouter.route('/addDream').post(controller.addDream)


export { dreamRouter } 