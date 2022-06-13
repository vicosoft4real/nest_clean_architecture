import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  ICATEGORY_REPOSITORY,
  ICategoryRepsoitory,
} from 'src/domain/interface/repository/ICategoryRepository';
import { CategoryResponse } from './categoryResponse';
import { GetAllCategoryQuery } from './getAllCategoryQuery';

@QueryHandler(GetAllCategoryQuery)
export class GetAllCategoryQueryHandler
  implements IQueryHandler<GetAllCategoryQuery, CategoryResponse[]>
{
  constructor(
    @Inject(ICATEGORY_REPOSITORY)
    private readonly categoryRepoitory: ICategoryRepsoitory,
  ) {}
  async execute(_: GetAllCategoryQuery): Promise<CategoryResponse[]> {
    const categories = await this.categoryRepoitory.getAll();
    return categories?.map((x) => new CategoryResponse(x.getName(), x.getId()));
  }
}
