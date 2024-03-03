import Common from "../model/commonNoConnection.model.js";

export const addCommon = async (req, res) => {
    try {
        const { Direct, House, Ending } = req.body

        if (!Direct || !House || !Ending) return res.status(404).send("No imput found")

        const newCommon = new Common(req.body)
        await newCommon.save().then(data => {
            if (!data) return res.status(404).send("Not saved")
            return res.status(200).send("Common added success")
        }).catch(e => {
            return res.status("Error " + e)
        })

    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}