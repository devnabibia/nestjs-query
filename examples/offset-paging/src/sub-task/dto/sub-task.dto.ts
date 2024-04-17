import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, PagingStrategies, QueryOptions, Relation } from '@ptc-org/nestjs-query-graphql'

import { TodoItemDTO } from '../../todo-item/dto/todo-item.dto'

@ObjectType('SubTask')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, enableTotalCount: true })
@Relation('todoItem', () => TodoItemDTO, {
  update: { enabled: true }
})
export class SubTaskDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  title!: string

  @FilterableField({ nullable: true })
  description?: string

  @FilterableField()
  completed!: boolean

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date

  @FilterableField()
  todoItemId!: string
}
