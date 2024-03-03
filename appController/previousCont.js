
import Previous from "../model/PreviousConnection.model.js";

export const addPrevious = async (req, res) => {
    try {
        const { Date, Timing, FR, SR } = req.body

        if (!Date || !Timing || !FR || !SR) return res.status(404).send("No imput found")

        const newPrevious = new Previous(req.body)

        const oldPrevious = await Previous.findOne({ Date, Timing })

        if (oldPrevious) return res.status(404).send("Already uploaded")

        await newPrevious.save().then(data => {
            if (!data) return res.status(404).send("Not saved")
            return res.status(200).send("Previous added success")
        }).catch(e => {
            return res.status("Error " + e)
        })

    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}

export const getPreviousDay = async (req, res) => {
    try {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
        const Daydata = await Previous.findOne({ Date: formattedDate, Timing: "Day" })
        const Nightdata = await Previous.findOne({ Date: formattedDate, Timing: "Night" })
        return res.status(200).send({ Daydata, Nightdata })
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