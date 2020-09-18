const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const { timeStamp } = require("console");

const productSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               trim: true,
               required: true,
               maxlength: 32
          },
          description: {
               type: String,
               required: true,
               maxlength: 2000
          },
          price: {
               type: Number,
               trim: true,
               required: true,
               maxlength: 32
          },
          category: {
               type: ObjectId,
               ref: "Category",
               required: true
          },
          quantity: {
               type: Number
          },
          sold: {
               type: Number,
               default: 0
          },
          photo: {
               data: Buffer,
               contentType: String
          },
          //For ebook download product from online also
          shipping: {
               required: false,
               type: Boolean
          }

     },
     {timestamps: true}
);



//we need to export model here

module.exports = mongoose.model("Product", productSchema);