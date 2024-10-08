// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/add-ons.proto (package addons.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum addons.v1.private.AddonType
 */
export const AddonType = /*@__PURE__*/ proto3.makeEnum(
  "addons.v1.private.AddonType",
  [
    {no: 0, name: "ADDON_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ADDON_TYPE_REMOTE_SCORING", localName: "REMOTE_SCORING"},
  ],
);

/**
 * @generated from message addons.v1.private.EnableAddonRequest
 */
export const EnableAddonRequest = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.EnableAddonRequest",
  () => [
    { no: 1, name: "addon_type", kind: "enum", T: proto3.getEnumType(AddonType) },
  ],
);

/**
 * @generated from message addons.v1.private.EnableAddonResponse
 */
export const EnableAddonResponse = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.EnableAddonResponse",
  [],
);

/**
 * @generated from message addons.v1.private.Addon
 */
export const Addon = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.Addon",
  () => [
    { no: 1, name: "addon_type", kind: "enum", T: proto3.getEnumType(AddonType) },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message addons.v1.private.ListAddonsRequest
 */
export const ListAddonsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.ListAddonsRequest",
  [],
);

/**
 * @generated from message addons.v1.private.ListAddonsResponse
 */
export const ListAddonsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.ListAddonsResponse",
  () => [
    { no: 1, name: "addons", kind: "message", T: Addon, repeated: true },
  ],
);

/**
 * @generated from message addons.v1.private.DisableAddonRequest
 */
export const DisableAddonRequest = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.DisableAddonRequest",
  () => [
    { no: 1, name: "addon_type", kind: "enum", T: proto3.getEnumType(AddonType) },
  ],
);

/**
 * @generated from message addons.v1.private.DisableAddonResponse
 */
export const DisableAddonResponse = /*@__PURE__*/ proto3.makeMessageType(
  "addons.v1.private.DisableAddonResponse",
  [],
);

