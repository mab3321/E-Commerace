require('dotenv').config()
connection = require("../models/db");
con = connection.Create_Connection

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

stripeSend = async function (result,req,res){
    try{
        session = await stripe.checkout.sessions.create({
                    payment_method_types: ["card"],
                    mode: "payment",
                    success_url: `${process.env.CLIENT_URL}/success.html`,
                    cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
                    line_items: req.body.items.map(item => {
                                const element = result.find(elem => elem.id === item.id)
                                    resToSend = {
                                        price_data: {
                                            currency: "usd",
                                            product_data: {
                                            name: element.name,
                                            },
                                            unit_amount: element.price_per_unit,
                                        },
                                        quantity: item.quantity,
                                        }
                                return resToSend
                            }),
                })
    res.json({ url: session.url })
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
}

payBill = async (req, res) => {

    queryString = "SELECT * from items"
    con.query(queryString,function (err, result, fields) {
        if (err) throw err
        else stripeSend(result,req,res)
})
}

module.exports = {
    payBill
}