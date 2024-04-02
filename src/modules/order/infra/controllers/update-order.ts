import Joi from "joi";
import { HttpResponse, HttpStatusCode } from "../../../../app/helpers/http";
import { ApiError } from "../../../../app/helpers/api-error";
import { UpdateOrderUsecase } from "../../data/usecases/update-order";

export type UpdateOrderRequest = {
  id: number;
  status?: string;
  customer_email?: string;
};

export class UpdateOrderController {
  constructor(private updateOrderUsecase: UpdateOrderUsecase) {}

  async handle({
    id,
    status,
    customer_email
  }: UpdateOrderRequest): Promise<HttpResponse> {
    try {
      const schema = Joi.object<UpdateOrderRequest>({
        id: Joi.number().required(),
        status: Joi.string().trim().max(255).optional(),
        customer_email: Joi.string().trim().max(255).optional()
      });

      const { value, error } = schema.validate({ id, status, customer_email });

      if (error) {
        return {
          status: HttpStatusCode.BAD_REQUEST,
          data: error.message
        };
      }

      const newAccessTokenOrError = await this.updateOrderUsecase.execute(
        value.refreshToken
      );

      if (newAccessTokenOrError.isLeft()) {
        const error: ApiError = newAccessTokenOrError.value;
        return {
          status: error.status,
          data: error.message
        };
      }

      const newAccessToken: string = newAccessTokenOrError.value;
      return {
        status: HttpStatusCode.OK,
        data: newAccessToken
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: 403,
          data: error.message
        };
      }

      return {
        status: 500,
        data: "Server error"
      };
    }
  }
}
