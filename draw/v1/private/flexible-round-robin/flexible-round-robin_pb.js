// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/flexible-round-robin/flexible-round-robin.proto (package draw.v1.private.draw.flexibleRoundRobin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum draw.v1.private.draw.flexibleRoundRobin.Frequency
 */
export const Frequency = /*@__PURE__*/ proto3.makeEnum(
  "draw.v1.private.draw.flexibleRoundRobin.Frequency",
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
 * @generated from enum draw.v1.private.draw.flexibleRoundRobin.RoundStatus
 */
export const RoundStatus = /*@__PURE__*/ proto3.makeEnum(
  "draw.v1.private.draw.flexibleRoundRobin.RoundStatus",
  [
    {no: 0, name: "ROUND_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ROUND_STATUS_PREVIEW", localName: "PREVIEW"},
    {no: 2, name: "ROUND_STATUS_DRAFT", localName: "DRAFT"},
    {no: 3, name: "ROUND_STATUS_PUBLISHED", localName: "PUBLISHED"},
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.Points
 */
export const Points = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.Points",
  () => [
    { no: 1, name: "win", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "tie", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "loss", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "forfeit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw
 */
export const FlexibleRoundRobinDraw = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinDraw",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "modified", kind: "message", T: Timestamp },
    { no: 4, name: "division_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinMatch
 */
export const FlexibleRoundRobinMatch = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.FlexibleRoundRobinMatch",
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
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawRequest
 */
export const CreateFlexibleRoundRobinDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "division_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_date", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "frequency", kind: "enum", T: proto3.getEnumType(Frequency) },
    { no: 5, name: "points", kind: "message", T: Points },
    { no: 6, name: "rounds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawResponse
 */
export const CreateFlexibleRoundRobinDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.CreateFlexibleRoundRobinDrawResponse",
  () => [
    { no: 1, name: "draw", kind: "message", T: FlexibleRoundRobinDraw },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawRequest
 */
export const UpdateFlexibleRoundRobinDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawResponse
 */
export const UpdateFlexibleRoundRobinDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.UpdateFlexibleRoundRobinDrawResponse",
  () => [
    { no: 1, name: "draw", kind: "message", T: FlexibleRoundRobinDraw },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRequest
 */
export const GetFlexibleRoundRobinDrawRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRequest",
  () => [
    { no: 1, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawResponse
 */
export const GetFlexibleRoundRobinDrawResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawResponse",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "division_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "start_date", kind: "message", T: Timestamp, opt: true },
    { no: 5, name: "frequency", kind: "enum", T: proto3.getEnumType(Frequency) },
    { no: 6, name: "points", kind: "message", T: Points },
    { no: 7, name: "rounds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundRequest
 */
export const GetFlexibleRoundRobinDrawRoundRequest = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundRequest",
  () => [
    { no: 1, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundResponse
 */
export const GetFlexibleRoundRobinDrawRoundResponse = /*@__PURE__*/ proto3.makeMessageType(
  "draw.v1.private.draw.flexibleRoundRobin.GetFlexibleRoundRobinDrawRoundResponse",
  () => [
    { no: 1, name: "draw_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(RoundStatus) },
    { no: 4, name: "matches", kind: "message", T: FlexibleRoundRobinMatch, repeated: true },
  ],
);

