// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file subscriptions/v1/public/subscriptions.proto (package subscriptions.v1.public, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { GetSubscriptionPlansRequest, GetSubscriptionPlansResponse } from "./subscriptions_pb.js";

/**
 * @generated from rpc subscriptions.v1.public.PublicSubscriptionsService.GetSubscriptionPlans
 */
export const getSubscriptionPlans = {
  localName: "getSubscriptionPlans",
  name: "GetSubscriptionPlans",
  kind: MethodKind.Unary,
  I: GetSubscriptionPlansRequest,
  O: GetSubscriptionPlansResponse,
  service: {
    typeName: "subscriptions.v1.public.PublicSubscriptionsService"
  }
};
