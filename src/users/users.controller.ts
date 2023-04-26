import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { query } from 'express';
import { UsersDto } from './dto/users.dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get("v1")
    find(@Param() param, @Query() query, @Body() body ){
        return this.usersService.find();
    }

    @Post()
    create(@Param() param, @Query() query, @Body() body: UsersDto ){
        return this.usersService.create(body);
    }
}
