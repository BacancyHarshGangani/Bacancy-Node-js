import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ProductAttributes {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes>
{
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public stock!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "products",
    }
);

export default Product;