// @generated by protoc-gen-es v2.1.0 with parameter "target=js+dts"
// @generated from file users/v1/public/users.proto (package users.v1.public, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file users/v1/public/users.proto.
 */
export declare const file_users_v1_public_users: GenFile;

/**
 * @generated from message users.v1.public.GetTokenRequest
 */
export declare type GetTokenRequest = Message<"users.v1.public.GetTokenRequest"> & {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;
};

/**
 * Describes the message users.v1.public.GetTokenRequest.
 * Use `create(GetTokenRequestSchema)` to create a new message.
 */
export declare const GetTokenRequestSchema: GenMessage<GetTokenRequest>;

/**
 * @generated from message users.v1.public.GetTokenResponse
 */
export declare type GetTokenResponse = Message<"users.v1.public.GetTokenResponse"> & {
  /**
   * @generated from field: string token = 1;
   */
  token: string;
};

/**
 * Describes the message users.v1.public.GetTokenResponse.
 * Use `create(GetTokenResponseSchema)` to create a new message.
 */
export declare const GetTokenResponseSchema: GenMessage<GetTokenResponse>;

/**
 * @generated from service users.v1.public.PublicUsersService
 */
export declare const PublicUsersService: GenService<{
  /**
   * @generated from rpc users.v1.public.PublicUsersService.GetToken
   */
  getToken: {
    methodKind: "unary";
    input: typeof GetTokenRequestSchema;
    output: typeof GetTokenResponseSchema;
  },
}>;

