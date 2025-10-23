import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { firstValueFrom } from 'rxjs';
import { ReturnDocument } from 'typeorm';

@Controller('products')
export class ProductController {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const result = await firstValueFrom(this.client.send({cmd: ''}, createProductDto));
      return result;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      const result = await firstValueFrom(this.client.send({cmd: 'find_all_product'}, {}));
      return result;
    } catch (error) {
      return error;
    }
  }

  async findOne(@Body() id: number) {
    try {
      const result = await firstValueFrom(this.client.send({cmd: 'find_one_product_by_id'}, id));
      return result;
    } catch (error) {
      return error;
    }
  }

  // update(@Payload() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(updateProductDto.id, updateProductDto);
  // }

  // remove(@Payload() id: number) {
  //   return this.productService.remove(id);
  // }
}
