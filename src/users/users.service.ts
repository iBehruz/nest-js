import { Injectable } from '@nestjs/common';
import { User } from './enteties/users.entety';
import { UsersDto } from './dto/users.dto/users.dto';

@Injectable()
export class UsersService {
    
    private users: User[] = [
        {
            id: "id2",
            name: "Name"
        }
    ]

    find(){
        return this.users;
    }

    findById(id: String){
        return this.users.find((er)=>{er.id == id});
    }

    create(user: UsersDto) : UsersDto{
        return user;
    }

    update(){
        return "updated successefully";
    }

    delete(){
        return "deleted successefully";
    }
    
}
