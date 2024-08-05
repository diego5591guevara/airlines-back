import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente } from './interfaces/cliente.interface';
import { CreateClienteDTO } from './dto/cliente.dto';
import { UpdateClienteDTO } from './dto/upd-cliente.dto';

@Injectable()
export class ClientesService {
    constructor(@InjectModel('Cliente') private readonly clienteModel: Model<Cliente>){}

    async createCliente(createClienteDTO: CreateClienteDTO): Promise<Cliente> {
        const cliente = new this.clienteModel(createClienteDTO);
        return cliente.save();
      }
    
      async updateCliente(id: string, updateCustomerDTO: UpdateClienteDTO): Promise<Cliente> {
        const cliente = await this.clienteModel.findByIdAndUpdate(id, updateCustomerDTO, { new: true });
        if (!cliente) {
          throw new NotFoundException(`Cliente #${id} no encontrado`);
        }
        return cliente;
      }
    
      async findAllClientes(): Promise<Cliente[]> {
        return this.clienteModel.find().exec();
      }
      
      async findClienteById(id: string): Promise<Cliente> {
        
        const cliente = await this.clienteModel.findOne({ clienteId: id });

        if (!cliente) {
          throw new NotFoundException(`Cliente #${id} no encontrado`);
        }
        return cliente;
      }
}
