import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const { id, email } =
      GqlExecutionContext.create(context).getContext().req.user;
    return { id, email };
  }
);
