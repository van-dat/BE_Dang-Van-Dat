import { Request, Response } from 'express';
import User from '../models/model_user';
import { userSchema } from '../types/user_schema';

export const createUser = async (req: Request, res: Response) => {
    try {
        const data = userSchema.parse(req.body);
        const user = await User.create(data);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const listUsers = async (req: Request, res: Response) => {
    try {

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = (req.query.search as string)?.trim() || '';

        const skip = (page - 1) * limit;

        const matchStage = search
            ? {
                $match: {
                    $or: [
                        { name: { $regex: search, $options: 'i' } }, // Tìm kiếm không phân biệt hoa thường
                        { email: { $regex: search, $options: 'i' } }
                    ]
                }
            }
            : null;

        const pipeline: any[] = [
            matchStage,
            { $sort: { createdAt: -1 } },
            { $skip: skip },
            { $limit: limit },
            { $project: { name: 1, email: 1, age: 1, createdAt: 1 } }
        ].filter(Boolean);

        const users = await User.aggregate(pipeline);

        const totalUsers = await User.countDocuments(
            search
                ? {
                    $or: [
                        { name: { $regex: search, $options: 'i' } },
                        { email: { $regex: search, $options: 'i' } }
                    ]
                }
                : {}
        );

        const totalPages = Math.ceil(totalUsers / limit);

        res.json({
            page,
            limit,
            totalUsers,
            totalPages,
            users
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = userSchema.partial().parse(req.body);
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    res.json(updatedUser);
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'Deleted successfully' });
};
