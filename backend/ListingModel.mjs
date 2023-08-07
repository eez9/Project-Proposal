//johnslist : category, title, contact, description, createdBy
import mongoose from "mongoose";

const ListingSchema = mongoose.Schema({
    category: String,
    title: String,
    contact: String,
    description: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

const ListingModel = mongoose.model("listing", ListingSchema)

export {ListingModel}