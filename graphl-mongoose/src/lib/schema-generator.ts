import { schemaComposer } from 'graphql-compose';
import { ObjectTypeComposerWithMongooseResolvers } from 'graphql-compose-mongoose';
import snakeCase from 'lodash/snakeCase';

export function generateGraphqlSchema(objectComposer: ObjectTypeComposerWithMongooseResolvers<any, any>) {
  const name = snakeCase(objectComposer.getTypeName());
  schemaComposer.Query.addFields({
    [`${name}ById`]: objectComposer.mongooseResolvers.findById(),
    [`${name}ByIds`]: objectComposer.mongooseResolvers.findByIds(),
    [`${name}One`]: objectComposer.mongooseResolvers.findOne(),
    [`${name}Many`]: objectComposer.mongooseResolvers.findMany(),
    [`${name}DataLoader`]: objectComposer.mongooseResolvers.dataLoader(),
    [`${name}DataLoaderMany`]: objectComposer.mongooseResolvers.dataLoaderMany(),
    // [`${name}ByIdLean`]: objectComposer.mongooseResolvers.findById({ lean: true }),
    // [`${name}ByIdsLean`]: objectComposer.mongooseResolvers.findByIds({ lean: true }),
    // [`${name}OneLean`]: objectComposer.mongooseResolvers.findOne({ lean: true }),
    // [`${name}ManyLean`]: objectComposer.mongooseResolvers.findMany({ lean: true }),
    // [`${name}DataLoaderLean`]: objectComposer.mongooseResolvers.dataLoader({ lean: true }),
    // [`${name}DataLoaderManyLean`]: objectComposer.mongooseResolvers.dataLoaderMany({ lean: true }),
    [`${name}Count`]: objectComposer.mongooseResolvers.count(),
    [`${name}Connection`]: objectComposer.mongooseResolvers.connection(),
    [`${name}Pagination`]: objectComposer.mongooseResolvers.pagination(),
  });

  schemaComposer.Mutation.addFields({
    [`${name}CreateOne`]: objectComposer.mongooseResolvers.createOne(),
    [`${name}CreateMany`]: objectComposer.mongooseResolvers.createMany(),
    [`${name}UpdateById`]: objectComposer.mongooseResolvers.updateById(),
    [`${name}UpdateOne`]: objectComposer.mongooseResolvers.updateOne(),
    [`${name}UpdateMany`]: objectComposer.mongooseResolvers.updateMany(),
    [`${name}RemoveById`]: objectComposer.mongooseResolvers.removeById(),
    [`${name}RemoveOne`]: objectComposer.mongooseResolvers.removeOne(),
    [`${name}RemoveMany`]: objectComposer.mongooseResolvers.removeMany(),
  });
}
