// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/add-ons.proto (package addons.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DisableAddonRequest, DisableAddonResponse, EnableAddonRequest, EnableAddonResponse, ListAddonsRequest, ListAddonsResponse } from "./add-ons_pb.js";
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
/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.DisableAddon
 */
export const disableAddon: {
      readonly name: "DisableAddon",
      readonly I: typeof DisableAddonRequest,
      readonly O: typeof DisableAddonResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "addons.v1.private.PrivateAddonsService"
  }
};
/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.ListAddons
 */
export const listAddons: {
      readonly name: "ListAddons",
      readonly I: typeof ListAddonsRequest,
      readonly O: typeof ListAddonsResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "addons.v1.private.PrivateAddonsService"
  }
};
