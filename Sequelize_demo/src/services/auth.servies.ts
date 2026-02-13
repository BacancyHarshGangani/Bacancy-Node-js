import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const register = async (data: any) => {

    const existingUser = await User.findOne({ where: { email: data.email } });

    if (existingUser) {
        throw new Error("User already exists");
    }

    if (data.password.length <= 8) {
        throw new Error("Password must be at least 8 characters")
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
    });

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
    );

    return {
        user,
        token,
    };
}

export const login = async (email: string, password: string) => {

    const user = await User.scope("withpassword").findOne({
        where: { email },
        attributes: { include: ["password"] }
    });

    if (!user) {
        throw new Error("User not found")
    }

    // console.log(user)
    // console.log(password)
    // console.log(user.password)

    const ismatch = await bcrypt.compare(password, user.password);

    if (!ismatch) {
        throw new Error("Invalid Credentials")
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
    )

    const { password: _, ...safeUser } = user.toJSON();

    return {
        user: safeUser,
        token
    };

};