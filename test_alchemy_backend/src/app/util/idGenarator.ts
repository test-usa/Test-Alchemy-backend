import { Model, Query } from "mongoose";
import { TIdFor } from "../constents";


const collectionIdGenerator = async <T extends Document>(
    model: Model<T>, // Accepts a Mongoose model
    idFor: TIdFor // The type of ID to generate
): Promise<string> => {
    const prefix = idFor.substring(0, 3).toUpperCase(); // Prefix from idFor

    try {
        // Fetch the last record based on the `type` field
        const lastRecord = await model
            .findOne()
            .sort({ id: -1 })
            .exec();

        let newId: string;

        if (lastRecord) {
            // Extract the numeric part of the ID and increment it
            const lastNumber = parseInt(lastRecord.id.substring(3), 10);
            const incrementedNumber = lastNumber + 1;

            // Create the new ID
            newId = `${prefix}${incrementedNumber.toString().padStart(2, "0")}`;
        } else {
            // If no record exists, start with "00"
            newId = `${prefix}00`;
        }

        return newId;
    } catch (error: any) {
        throw new Error(`Error generating ID: ${error.message}`);
    }
};

export default collectionIdGenerator