import { User } from '../entities/user.entity';

export interface UserRepository {
   saveUser(user: User): Promise <void>;
   findById(id: string):  Promise<User | null>;
   listUsers(): Promise <User[]>;
}