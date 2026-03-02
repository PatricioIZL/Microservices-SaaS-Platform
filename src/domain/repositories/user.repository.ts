import { User } from '../entities/user.entity';

export interface UserRepository {
   changeEmail(user: User): void;
   cleanEmail(user: User): void;
}