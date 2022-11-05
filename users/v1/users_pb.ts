// @generated by protoc-gen-es v0.2.0 with parameter "target=ts"
// @generated from file users/v1/users.proto (package users.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message users.v1.GetMeRequest
 */
export class GetMeRequest extends Message<GetMeRequest> {
  constructor(data?: PartialMessage<GetMeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "users.v1.GetMeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeRequest {
    return new GetMeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeRequest {
    return new GetMeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeRequest | PlainMessage<GetMeRequest> | undefined, b: GetMeRequest | PlainMessage<GetMeRequest> | undefined): boolean {
    return proto3.util.equals(GetMeRequest, a, b);
  }
}

/**
 * @generated from message users.v1.GetMeResponse
 */
export class GetMeResponse extends Message<GetMeResponse> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId = "";

  /**
   * @generated from field: string org_id = 2;
   */
  orgId = "";

  /**
   * @generated from field: string first_name = 3;
   */
  firstName = "";

  /**
   * @generated from field: string last_name = 4;
   */
  lastName = "";

  /**
   * @generated from field: string email = 5;
   */
  email = "";

  /**
   * @generated from field: string nickname = 6;
   */
  nickname = "";

  constructor(data?: PartialMessage<GetMeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "users.v1.GetMeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMeResponse {
    return new GetMeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMeResponse {
    return new GetMeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetMeResponse | PlainMessage<GetMeResponse> | undefined, b: GetMeResponse | PlainMessage<GetMeResponse> | undefined): boolean {
    return proto3.util.equals(GetMeResponse, a, b);
  }
}

