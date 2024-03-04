import { Seeder } from "./Seeder";
import { Role } from "../../models/Role";
import { UserRole } from "../../constants/UserRoles";

export class RoleSeeder extends Seeder{
    protected async generate(): Promise<void> {
        const roles: Partial<Role>[] = [
            UserRole.ADMIN,
            UserRole.ARTIST,
            UserRole.CLIENT
        ];
        await Role.save(roles);
    }
}