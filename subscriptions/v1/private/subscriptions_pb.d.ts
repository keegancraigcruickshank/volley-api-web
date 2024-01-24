// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file subscriptions/v1/private/subscriptions.proto (package subscriptions.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message subscriptions.v1.private.SubscriptionPlan
 */
export declare class SubscriptionPlan extends Message<SubscriptionPlan> {
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

  constructor(data?: PartialMessage<SubscriptionPlan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "subscriptions.v1.private.SubscriptionPlan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubscriptionPlan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubscriptionPlan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubscriptionPlan;

  static equals(a: SubscriptionPlan | PlainMessage<SubscriptionPlan> | undefined, b: SubscriptionPlan | PlainMessage<SubscriptionPlan> | undefined): boolean;
}

/**
 * @generated from message subscriptions.v1.private.GetOrganisationPlanRequest
 */
export declare class GetOrganisationPlanRequest extends Message<GetOrganisationPlanRequest> {
  constructor(data?: PartialMessage<GetOrganisationPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "subscriptions.v1.private.GetOrganisationPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganisationPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganisationPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganisationPlanRequest;

  static equals(a: GetOrganisationPlanRequest | PlainMessage<GetOrganisationPlanRequest> | undefined, b: GetOrganisationPlanRequest | PlainMessage<GetOrganisationPlanRequest> | undefined): boolean;
}

/**
 * @generated from message subscriptions.v1.private.GetOrganisationPlanResponse
 */
export declare class GetOrganisationPlanResponse extends Message<GetOrganisationPlanResponse> {
  /**
   * @generated from field: subscriptions.v1.private.SubscriptionPlan plan = 1;
   */
  plan?: SubscriptionPlan;

  constructor(data?: PartialMessage<GetOrganisationPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "subscriptions.v1.private.GetOrganisationPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganisationPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganisationPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganisationPlanResponse;

  static equals(a: GetOrganisationPlanResponse | PlainMessage<GetOrganisationPlanResponse> | undefined, b: GetOrganisationPlanResponse | PlainMessage<GetOrganisationPlanResponse> | undefined): boolean;
}

