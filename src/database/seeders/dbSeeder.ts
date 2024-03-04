import { RoleSeeder } from "./RoleSeeder";
import { UserSeeder } from "./UserSeeder";
import { ArtistSeeder } from "./ArtistSeeder";
import { ClientSeeder } from "./ClientSeeder";
import { JobdateSeeder } from "./JobdateSeeder";

(async () =>{
    console.log('starting seeding')
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new ArtistSeeder().start();
    await new ClientSeeder().start();
    await new JobdateSeeder().start();
})()