
import Previous from "../model/PreviousConnection.model.js";

export const addPrevious = async (req, res) => {
    try {
        const { Date, FR, SR } = req.body

        if (!FR && !SR) return res.status(404).send("Both can't be empty")

        console.log(req.body)
        const oldPrevious = await Previous.findOne({ Date })

        if (FR != undefined && (SR == '' || SR == undefined)) {

            if (oldPrevious && oldPrevious.FR !== undefined) return res.status(400).send("FR is already entered");

            const oldResult = await Previous.findOne({ Date })
            if (oldResult) {
                // SR is already in the DB ==> now just update the FR field on that specific date
                const newFRupdate = await Previous.updateOne({ Date }, { FR })
                if (!newFRupdate) return res.status(404).send("Error while updating the newFR")
            }
            else {
                // creating the first time
                const newFRcreate = new Previous({ Date, FR, SR: undefined })
                if (!newFRcreate) return res.status(404).send("Error while creating newFR")
                const saveNewFR = await newFRcreate.save()

                if (!saveNewFR) return res.status(404).send("Error while savingn the newFR")
            }
        }

        if ((FR == '' || FR == undefined) && SR != undefined) {

            if (oldPrevious && oldPrevious.SR !== undefined) return res.status(400).send("SR is already entered");

            const oldResult = await Previous.findOne({ Date })
            if (oldResult) {
                // SR is already in the DB ==> now just update the FR field on that specific date
                const newSRupdate = await Previous.updateOne({ Date }, { SR })
                if (!newSRupdate) return res.status(404).send("Error while updating the newSR")
            }
            else {
                // creating the first time
                const newSRcreate = new Previous({ Date, FR: undefined, SR })
                if (!newSRcreate) return res.status(404).send("Error while creating newFR")
                const saveNewFR = await newSRcreate.save()

                if (!saveNewFR) return res.status(404).send("Error while savingn the newFR")
            }
        }

        return res.status(200).send("update")

    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}

export const getPreviousDay = async (req, res) => {
    try {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        
        console.log(formattedDate)
        
        const data = await Previous.findOne({ Date: formattedDate })
        if(data)
            return res.status(200).send({ FR: data.FR, SR: data.SR })
        else    return res.status(404).send("Error")
    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}

export const getPrevious = async (req, res) => {
    try {
        const data = await Previous.find({})
        if (!data) return res.status(404).send("Somthing wrong")
        return res.status(200).send(data)
    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}


