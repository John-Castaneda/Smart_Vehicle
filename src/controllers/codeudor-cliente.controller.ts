import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Codeudor,
  Cliente,
} from '../models';
import {CodeudorRepository} from '../repositories';

export class CodeudorClienteController {
  constructor(
    @repository(CodeudorRepository)
    public codeudorRepository: CodeudorRepository,
  ) { }

  @get('/codeudors/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Codeudor',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Codeudor.prototype.id,
  ): Promise<Cliente> {
    return this.codeudorRepository.cliente(id);
  }
}
