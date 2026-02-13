import * as jwt from "jsonwebtoken";
import 'dotenv/config';

type StringValue =
        | `${number}`
        | `${number}h`
        | `${number} h`;

console.log(`${process.env.JWT_TIME}h`);
if(process.env.JWT_TIME) {
const token = jwt.sign({ id: 1 }, "secret", { expiresIn: `${process.env.JWT_TIME}h` as StringValue });
}