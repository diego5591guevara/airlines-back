import { Model } from 'mongoose';
import { Cliente } from './interfaces/cliente.interface';
import { CreateClienteDTO } from './dto/cliente.dto';
import { UpdateClienteDTO } from './dto/upd-cliente.dto';
export declare class ClientesService {
    private readonly clienteModel;
    constructor(clienteModel: Model<Cliente>);
    createCliente(createClienteDTO: CreateClienteDTO): Promise<Cliente>;
    updateCliente(id: string, updateCustomerDTO: UpdateClienteDTO): Promise<Cliente>;
    findAllClientes(): Promise<Cliente[]>;
    findClienteById(id: string): Promise<Cliente>;
}
