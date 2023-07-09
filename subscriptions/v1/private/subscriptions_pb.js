// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file subscriptions/v1/private/subscriptions.proto (package subscriptions.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message subscriptions.v1.private.SubscriptionPlan
 */
export const SubscriptionPlan = proto3.makeMessageType(
  "subscriptions.v1.private.SubscriptionPlan",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscription_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "price", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message subscriptions.v1.private.GetOrganisationPlanRequest
 */
export const GetOrganisationPlanRequest = proto3.makeMessageType(
  "subscriptions.v1.private.GetOrganisationPlanRequest",
  [],
);

/**
 * @generated from message subscriptions.v1.private.GetOrganisationPlanResponse
 */
export const GetOrganisationPlanResponse = proto3.makeMessageType(
  "subscriptions.v1.private.GetOrganisationPlanResponse",
  () => [
    { no: 1, name: "plan", kind: "message", T: SubscriptionPlan },
  ],
);

