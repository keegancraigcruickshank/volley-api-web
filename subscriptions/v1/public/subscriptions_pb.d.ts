// @generated by protoc-gen-es v2.1.0 with parameter "target=js+dts"
// @generated from file subscriptions/v1/public/subscriptions.proto (package subscriptions.v1.public, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file subscriptions/v1/public/subscriptions.proto.
 */
export declare const file_subscriptions_v1_public_subscriptions: GenFile;

/**
 * @generated from message subscriptions.v1.public.SubscriptionPlan
 */
export declare type SubscriptionPlan = Message<"subscriptions.v1.public.SubscriptionPlan"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string subscription_key = 2;
   */
  subscriptionKey: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: float price = 5;
   */
  price: number;
};

/**
 * Describes the message subscriptions.v1.public.SubscriptionPlan.
 * Use `create(SubscriptionPlanSchema)` to create a new message.
 */
export declare const SubscriptionPlanSchema: GenMessage<SubscriptionPlan>;

/**
 * @generated from message subscriptions.v1.public.GetSubscriptionPlansRequest
 */
export declare type GetSubscriptionPlansRequest = Message<"subscriptions.v1.public.GetSubscriptionPlansRequest"> & {
};

/**
 * Describes the message subscriptions.v1.public.GetSubscriptionPlansRequest.
 * Use `create(GetSubscriptionPlansRequestSchema)` to create a new message.
 */
export declare const GetSubscriptionPlansRequestSchema: GenMessage<GetSubscriptionPlansRequest>;

/**
 * @generated from message subscriptions.v1.public.GetSubscriptionPlansResponse
 */
export declare type GetSubscriptionPlansResponse = Message<"subscriptions.v1.public.GetSubscriptionPlansResponse"> & {
  /**
   * @generated from field: repeated subscriptions.v1.public.SubscriptionPlan plans = 1;
   */
  plans: SubscriptionPlan[];
};

/**
 * Describes the message subscriptions.v1.public.GetSubscriptionPlansResponse.
 * Use `create(GetSubscriptionPlansResponseSchema)` to create a new message.
 */
export declare const GetSubscriptionPlansResponseSchema: GenMessage<GetSubscriptionPlansResponse>;

/**
 * @generated from service subscriptions.v1.public.PublicSubscriptionsService
 */
export declare const PublicSubscriptionsService: GenService<{
  /**
   * @generated from rpc subscriptions.v1.public.PublicSubscriptionsService.GetSubscriptionPlans
   */
  getSubscriptionPlans: {
    methodKind: "unary";
    input: typeof GetSubscriptionPlansRequestSchema;
    output: typeof GetSubscriptionPlansResponseSchema;
  },
}>;

