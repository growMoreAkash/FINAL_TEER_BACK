import Dream from "../model/DreamNoConnection.model.js"

export const addDream = async (req, res) => {
    try {
        const { Direct,Number, House, Ending } = req.body

        if (!Direct || !House || !Ending || !Number) return res.status(404).send("No imput found")

        const newDream = new Dream(req.body)
        await newDream.save().then(data => {
            if (!data) return res.status(404).send("Not saved")
            return res.status(200).send("Dream added success")
        }).catch(e => {
            return res.status("Error " + e)
        })

    } catch (error) {
        return res.status(404).send("Error " + error)
    }
}