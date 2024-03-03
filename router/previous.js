import { Router } from "express";
const previousRouter  = Router()

import * as controller from '../appController/previousCont.js'

previousRouter.route('/addPrevious').post(controller.addPrevious)
previousRouter.route('/getPrevious').get(controller.getPrevious)
previousRouter.route('/getPreviousDay').get(controller.getPreviousDay)


export { previousRouter } 