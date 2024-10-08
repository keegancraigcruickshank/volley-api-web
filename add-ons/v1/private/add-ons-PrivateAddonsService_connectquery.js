// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/add-ons.proto (package addons.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { DisableAddonRequest, DisableAddonResponse, EnableAddonRequest, EnableAddonResponse, ListAddonsRequest, ListAddonsResponse } from "./add-ons_pb.js";

/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.EnableAddon
 */
export const enableAddon = {
  localName: "enableAddon",
  name: "EnableAddon",
  kind: MethodKind.Unary,
  I: EnableAddonRequest,
  O: EnableAddonResponse,
  service: {
    typeName: "addons.v1.private.PrivateAddonsService"
  }
};

/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.DisableAddon
 */
export const disableAddon = {
  localName: "disableAddon",
  name: "DisableAddon",
  kind: MethodKind.Unary,
  I: DisableAddonRequest,
  O: DisableAddonResponse,
  service: {
    typeName: "addons.v1.private.PrivateAddonsService"
  }
};

/**
 * @generated from rpc addons.v1.private.PrivateAddonsService.ListAddons
 */
export const listAddons = {
  localName: "listAddons",
  name: "ListAddons",
  kind: MethodKind.Unary,
  I: ListAddonsRequest,
  O: ListAddonsResponse,
  service: {
    typeName: "addons.v1.private.PrivateAddonsService"
  }
};
