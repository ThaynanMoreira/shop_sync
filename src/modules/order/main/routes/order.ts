import { NextFunction, Request, Response, Router } from "express";

import { HttpResponse } from "../../../../app/helpers/http";

import { createOrderController } from "../factories/create-order";
import { updateOrderController } from "../factories/update-order";
import { deleteOrderController } from "../factories/delete-order";
import { findOrderController } from "../factories/find-order";
import { listOrderController } from "../factories/list-order";

const router = Router();

router.post("/auth/", async (req, res) => {
  const httpResponse: HttpResponse = await createOrderController.handle(
    req.body
  );
  return res.status(httpResponse.status).json(httpResponse.data);
});

router.get("/auth/:id", async (req, res) => {
  const httpResponse: HttpResponse = await findOrderController.handle(
    Number(req.params.id)
  );
  return res.status(httpResponse.status).json(httpResponse.data);
});

router.get("/auth/", async (req, res) => {
  const httpResponse: HttpResponses = await listOrderController.handle();
  return res.status(httpResponse.status).json(httpResponse.data);
});

router.put("/auth/:id", async (req, res) => {
  const httpResponse: HttpResponse = await updateOrderController.handle(
    Number(req.params.id),
    req.body
  );
  return res.status(httpResponse.status).json(httpResponse.data);
});

router.delete("/auth/:id", async (req, res) => {
  const httpResponse: HttpResponse = await deleteOrderController.handle(
    Number(req.params.id)
  );
  return res.status(httpResponse.status).json(httpResponse.data);
});

export default router;
