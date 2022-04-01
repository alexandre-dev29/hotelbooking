import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const { userId, phoneNumber, userRole } =
      GqlExecutionContext.create(context).getContext().req.user;
    return { userId, phoneNumber, userRole };
  }
);
