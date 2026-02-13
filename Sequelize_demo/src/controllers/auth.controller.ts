import * as authService from "../services/auth.servies";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });

  } catch (error : any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  try {
    const user = await authService.login(email, password);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
}