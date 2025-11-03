import {z} from 'zod';
export const registerSchema = z.object(
    {
        email: z.string().min(1 , 'Email is Required').email({message: 'Invalid email address'}),
        password: z.string().min(6, {message: 'Password must be at least 6 characters long'}),
        name: z.string().min(2, {message: 'Name must be at least 2 characters long'}).trim(),
    }
)