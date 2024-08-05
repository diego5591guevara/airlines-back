import { ClientesService } from './clientes.service';
import { CreateClienteDTO } from './dto/cliente.dto';
import { UpdateClienteDTO } from './dto/upd-cliente.dto';
export declare class ClientesController {
    private readonly clienteService;
    constructor(clienteService: ClientesService);
    create(createClienteDTO: CreateClienteDTO): Promise<import("./interfaces/cliente.interface").Cliente>;
    findAll(): Promise<import("./interfaces/cliente.interface").Cliente[]>;
    findOne(id: string): Promise<import("./interfaces/cliente.interface").Cliente>;
    update(id: string, updateClienteDTO: UpdateClienteDTO): Promise<import("./interfaces/cliente.interface").Cliente>;
}
