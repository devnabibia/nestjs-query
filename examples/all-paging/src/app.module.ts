import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { formatGraphqlError, typeormOrmConfig } from '../../helpers'
import { SubTaskModule } from './sub-task/sub-task.module'
import { TagModule } from './tag/tag.module'
import { TodoItemModule } from './todo-item/todo-item.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('all_paging')),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'examples/all-paging/schema.gql',
      formatError: formatGraphqlError
    }),
    SubTaskModule,
    TodoItemModule,
    TagModule
  ]
})
export class AppModule {}
