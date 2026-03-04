export class User {
    private readonly id: string;
    private email: string;
    private nameDisplay: string;
    private readonly createdAt: Date;

    public get Id() {
        return this.id;
    }

    public get Email(): string {
        return this.email;
    }

    public get NameDisplay() {
        return this.nameDisplay;
    }

    public get CreatedAt() {
        return this.createdAt;
    }

    constructor(id: string, email: string, nameDisplay: string, createdAt: Date) {

        
        const normalizedEmail = this.cleanEmail(email);
        if (id == null || id.includes(" ") || id.trim().length == 0)
        {
            throw new Error("id is invalid");
        }
        if (nameDisplay == null || nameDisplay.trim().length == 0)
        {
            throw new Error("Name is invalid");
        }

        nameDisplay = nameDisplay.trim();
        id = id.trim();
        this.id = id;
        this.email = normalizedEmail;
        this.nameDisplay = nameDisplay;
        this.createdAt = createdAt;
    }

    changeEmail(newEmail: string) {
        if (newEmail == null)
        {
            throw new Error("Email is invalid");
        }
        if (!newEmail.includes("@"))
        {
            throw new Error("Email is invalid");
        }

        this.email = newEmail;
    }

    cleanEmail(raw: string)
    {
        if (raw == null)
        {
            throw new Error("Email is invalid");
        }
        if (!raw.includes("@"))
        {
            throw new Error("Email is invalid");
        }

        raw = raw.trim();
        raw = raw.toLowerCase();
        return raw;
    }
    
    

}