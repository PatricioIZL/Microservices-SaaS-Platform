import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";


export class InMemoryUserRepository implements UserRepository {
    private users = new Map<string, User>();
    async saveUser(user: User): Promise <void> {
        this.users.set(user.Id, user);
    }
    async findById(id: string): Promise<User | null> {
        const user = this.users.get(id);
        if(user)
        {
            return user;
        }
        return null;
    }

    async listUsers(): Promise<User[]> {
        return Array.from(this.users.values());
    }
}