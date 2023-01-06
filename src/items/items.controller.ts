import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
 


@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all item';
    } 
    
    
    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;

    }
    

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description} LastName: ${createItemDto.lastname}`

    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto): string{
        return `Name: ${updateItemDto.name} Desc: ${updateItemDto.description}`
    }


    @Delete(':id')
    deleteOne(@Param('id') id): string{
       return `you just Deleted..!${id}`
    }

    
}
