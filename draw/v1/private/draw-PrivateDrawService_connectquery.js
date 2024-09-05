// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { DeleteDrawRequest, DeleteDrawResponse, GetDrawRequest, GetDrawResponse, ListDrawsRequest, ListDrawsResponse } from "./draw_pb.js";
import { CreateFlexibleRoundRobinDrawRequest, CreateFlexibleRoundRobinDrawResponse, FlexibleRoundRobinDrawChangeRoundDateRequest, FlexibleRoundRobinDrawChangeRoundDateResponse, GetFlexibleRoundRobinDrawLeaderboardRequest, GetFlexibleRoundRobinDrawLeaderboardResponse, GetFlexibleRoundRobinDrawRequest, GetFlexibleRoundRobinDrawResponse, GetFlexibleRoundRobinDrawRoundRequest, GetFlexibleRoundRobinDrawRoundResponse, SetFlexibleRoundRobinDrawFixtureScoreRequest, SetFlexibleRoundRobinDrawFixtureScoreResponse, UpdateFlexibleRoundRobinDrawRequest, UpdateFlexibleRoundRobinDrawResponse } from "./flexible-round-robin/flexible-round-robin_pb.js";

/**
 * Common endpoints
 *
 * @generated from rpc draw.v1.private.PrivateDrawService.GetDraw
 */
export const getDraw = {
  localName: "getDraw",
  name: "GetDraw",
  kind: MethodKind.Unary,
  I: GetDrawRequest,
  O: GetDrawResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.DeleteDraw
 */
export const deleteDraw = {
  localName: "deleteDraw",
  name: "DeleteDraw",
  kind: MethodKind.Unary,
  I: DeleteDrawRequest,
  O: DeleteDrawResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.ListDraws
 */
export const listDraws = {
  localName: "listDraws",
  name: "ListDraws",
  kind: MethodKind.Unary,
  I: ListDrawsRequest,
  O: ListDrawsResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * Flexible round robin
 *
 * @generated from rpc draw.v1.private.PrivateDrawService.CreateFlexibleRoundRobinDraw
 */
export const createFlexibleRoundRobinDraw = {
  localName: "createFlexibleRoundRobinDraw",
  name: "CreateFlexibleRoundRobinDraw",
  kind: MethodKind.Unary,
  I: CreateFlexibleRoundRobinDrawRequest,
  O: CreateFlexibleRoundRobinDrawResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDraw
 */
export const getFlexibleRoundRobinDraw = {
  localName: "getFlexibleRoundRobinDraw",
  name: "GetFlexibleRoundRobinDraw",
  kind: MethodKind.Unary,
  I: GetFlexibleRoundRobinDrawRequest,
  O: GetFlexibleRoundRobinDrawResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.UpdateFlexibleRoundRobinDraw
 */
export const updateFlexibleRoundRobinDraw = {
  localName: "updateFlexibleRoundRobinDraw",
  name: "UpdateFlexibleRoundRobinDraw",
  kind: MethodKind.Unary,
  I: UpdateFlexibleRoundRobinDrawRequest,
  O: UpdateFlexibleRoundRobinDrawResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawRound
 */
export const getFlexibleRoundRobinDrawRound = {
  localName: "getFlexibleRoundRobinDrawRound",
  name: "GetFlexibleRoundRobinDrawRound",
  kind: MethodKind.Unary,
  I: GetFlexibleRoundRobinDrawRoundRequest,
  O: GetFlexibleRoundRobinDrawRoundResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawLeaderboard
 */
export const getFlexibleRoundRobinDrawLeaderboard = {
  localName: "getFlexibleRoundRobinDrawLeaderboard",
  name: "GetFlexibleRoundRobinDrawLeaderboard",
  kind: MethodKind.Unary,
  I: GetFlexibleRoundRobinDrawLeaderboardRequest,
  O: GetFlexibleRoundRobinDrawLeaderboardResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.FlexibleRoundRobinDrawChangeRoundDate
 */
export const flexibleRoundRobinDrawChangeRoundDate = {
  localName: "flexibleRoundRobinDrawChangeRoundDate",
  name: "FlexibleRoundRobinDrawChangeRoundDate",
  kind: MethodKind.Unary,
  I: FlexibleRoundRobinDrawChangeRoundDateRequest,
  O: FlexibleRoundRobinDrawChangeRoundDateResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};

/**
 * @generated from rpc draw.v1.private.PrivateDrawService.SetFlexibleRoundRobinDrawFixtureScore
 */
export const setFlexibleRoundRobinDrawFixtureScore = {
  localName: "setFlexibleRoundRobinDrawFixtureScore",
  name: "SetFlexibleRoundRobinDrawFixtureScore",
  kind: MethodKind.Unary,
  I: SetFlexibleRoundRobinDrawFixtureScoreRequest,
  O: SetFlexibleRoundRobinDrawFixtureScoreResponse,
  service: {
    typeName: "draw.v1.private.PrivateDrawService"
  }
};
