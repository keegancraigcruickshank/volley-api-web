// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/add_ons.proto (package addons.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { EnableAddonRequest, EnableAddonResponse } from "./add_ons_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.EnableAddon
 */
export const enableAddon: {
      readonly name: "EnableAddon",
      readonly I: typeof EnableAddonRequest,
      readonly O: typeof EnableAddonResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "addons.v1.private.PrivateAddonsService"
  }
};
