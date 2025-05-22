import { NextResponse } from "next/server";
import CustomerService from "./customer-service";
import { logger } from "../common/clients";

const service = new CustomerService();

const createCustomer = async (req: Request) => {
  logger.info("Handler::Create-Customer::Start");

  const { email, lang } = await req.json();

  const result = await service.createCustomer({ email, lang });

  return NextResponse.json(result);
};

export { createCustomer };
