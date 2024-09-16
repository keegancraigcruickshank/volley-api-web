// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file playing-spaces/v1/private/playing-spaces.proto (package playing_spaces.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreatePlayingSpaceRequest, CreatePlayingSpaceResponse, ListPlayingSpacesRequest, ListPlayingSpacesResponse, ModifyPlayingSpaceRequest, ModifyPlayingSpaceResponse, RemovePlayingSpacesRequest, RemovePlayingSpacesResponse } from "./playing-spaces_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from rpc playing_spaces.v1.private.PrivatePlayingSpacesService.ListPlayingSpaces
 */
export const listPlayingSpaces: {
      readonly name: "ListPlayingSpaces",
      readonly I: typeof ListPlayingSpacesRequest,
      readonly O: typeof ListPlayingSpacesResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "playing_spaces.v1.private.PrivatePlayingSpacesService"
  }
};
/**
 * @generated from rpc playing_spaces.v1.private.PrivatePlayingSpacesService.CreatePlayingSpace
 */
export const createPlayingSpace: {
      readonly name: "CreatePlayingSpace",
      readonly I: typeof CreatePlayingSpaceRequest,
      readonly O: typeof CreatePlayingSpaceResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "playing_spaces.v1.private.PrivatePlayingSpacesService"
  }
};
/**
 * @generated from rpc playing_spaces.v1.private.PrivatePlayingSpacesService.RemovePlayingSpaces
 */
export const removePlayingSpaces: {
      readonly name: "RemovePlayingSpaces",
      readonly I: typeof RemovePlayingSpacesRequest,
      readonly O: typeof RemovePlayingSpacesResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "playing_spaces.v1.private.PrivatePlayingSpacesService"
  }
};
/**
 * @generated from rpc playing_spaces.v1.private.PrivatePlayingSpacesService.ModifyPlayingSpace
 */
export const modifyPlayingSpace: {
      readonly name: "ModifyPlayingSpace",
      readonly I: typeof ModifyPlayingSpaceRequest,
      readonly O: typeof ModifyPlayingSpaceResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "playing_spaces.v1.private.PrivatePlayingSpacesService"
  }
};
