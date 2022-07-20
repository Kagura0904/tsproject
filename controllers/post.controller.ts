import { Request, Response } from 'express';

import { connect } from '../database'
import { Post } from '../interface/Post'

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM timecard_tb')
    return res.json(posts[0]);
}
export async function createPost(req: Request, res: Response){
    const newPost: Post = req.body;
    return res.json({
        message: 'Post  created successfully'
    });
}