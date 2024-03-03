import { Router } from "express";
const commonRouter  = Router()

import * as controller from '../appController/commonCont.js'

commonRouter.route('/addCommon').post(controller.addCommon)


export { commonRouter } 