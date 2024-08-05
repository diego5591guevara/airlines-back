import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDTO } from './dto/cliente.dto';
import { UpdateClienteDTO } from './dto/upd-cliente.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}

    @Post()
    create(@Body() createClienteDTO: CreateClienteDTO) {
      return this.clienteService.createCliente(createClienteDTO);
    }
  
    @Get()
    findAll() {
      return this.clienteService.findAllClientes();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {

      return this.clienteService.findClienteById(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateClienteDTO: UpdateClienteDTO) {
      return this.clienteService.updateCliente(id, updateClienteDTO);
    }

}
