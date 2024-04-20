// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum draw.v1.private.DrawType
 */
export const DrawType = /*@__PURE__*/ proto3.makeEnum(
  "draw.v1.private.DrawType",
  [
    {no: 0, name: "UNKNOWN"},
    {no: 1, name: "FLEXIBLE_ROUND_ROBIN"},
  ],
);

/**
 * @generated from enum draw.v1.private.Frequency
 */
export const Frequency = /*@__PURE__*/ proto3.makeEnum(
  "draw.v1.private.Frequency",
  [
    {no: 0, name: "FREQUENCY_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FREQUENCY_ASAP", localName: "ASAP"},
    {no: 2, name: "FREQUENCY_DAILY", localName: "DAILY"},
    {no: 3, name: "FREQUENCY_WEEKLY", localName: "WEEKLY"},
    {no: 4, name: "FREQUENCY_MONTHLY", localName: "MONTHLY"},
    {no: 5, name: "FREQUENCY_YEARLY", localName: "YEARLY"},
  ],
);

/**
 * @generated from message draw.v1.private.Points
 */
export const Points = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.Points",
  () => [
    { no: 1, name: "win", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "draw", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "loss", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.FlexibleRoundRobinDraw
 */
export const FlexibleRoundRobinDraw = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.FlexibleRoundRobinDraw",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "modified", kind: "message", T: Timestamp },
    { no: 5, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message draw.v1.private.FlexibleRoundRobinMatch
 */
export const FlexibleRoundRobinMatch = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.FlexibleRoundRobinMatch",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "team_one", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "team_two", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "team_one_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "team_two_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "modified", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message draw.v1.private.GetDrawRequest
 */
export const GetDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.GetDrawRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message draw.v1.private.GetDrawResponse
 */
export const GetDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.GetDrawResponse",
  () => [
    { no: 1, name: "flexible_round_robin_draw", kind: "message", T: FlexibleRoundRobinDraw, oneof: "draw" },
  ],
);

/**
 * @generated from message draw.v1.private.DeleteDrawRequest
 */
export const DeleteDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.DeleteDrawRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message draw.v1.private.DeleteDrawResponse
 */
export const DeleteDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.DeleteDrawResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message draw.v1.private.CreateFlexibleRoundRobinDrawRequest
 */
export const CreateFlexibleRoundRobinDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.CreateFlexibleRoundRobinDrawRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "draw_type", kind: "enum", T: proto3.getEnumType(DrawType) },
    { no: 3, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "start_date", kind: "message", T: Timestamp, opt: true },
    { no: 5, name: "frequency", kind: "enum", T: proto3.getEnumType(Frequency) },
    { no: 6, name: "points", kind: "message", T: Points },
    { no: 7, name: "rounds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.CreateFlexibleRoundRobinDrawResponse
 */
export const CreateFlexibleRoundRobinDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.CreateFlexibleRoundRobinDrawResponse",
  () => [
    { no: 1, name: "draw", kind: "message", T: FlexibleRoundRobinDraw },
  ],
);

/**
 * @generated from message draw.v1.private.UpdateFlexibleRoundRobinDrawRequest
 */
export const UpdateFlexibleRoundRobinDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.UpdateFlexibleRoundRobinDrawRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message draw.v1.private.UpdateFlexibleRoundRobinDrawResponse
 */
export const UpdateFlexibleRoundRobinDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.UpdateFlexibleRoundRobinDrawResponse",
  () => [
    { no: 1, name: "draw", kind: "message", T: FlexibleRoundRobinDraw },
  ],
);

/**
 * @generated from message draw.v1.private.GetFlexibleRoundRobinDrawRoundRequest
 */
export const GetFlexibleRoundRobinDrawRoundRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.GetFlexibleRoundRobinDrawRoundRequest",
  () => [
    { no: 1, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.GetFlexibleRoundRobinDrawRoundResponse
 */
export const GetFlexibleRoundRobinDrawRoundResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.GetFlexibleRoundRobinDrawRoundResponse",
  () => [
    { no: 1, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "matches", kind: "message", T: FlexibleRoundRobinMatch, repeated: true },
  ],
);
