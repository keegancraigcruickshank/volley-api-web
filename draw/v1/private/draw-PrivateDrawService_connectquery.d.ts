// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteDrawRequest, DeleteDrawResponse, GetDrawRequest, GetDrawResponse, ListDrawsRequest, ListDrawsResponse } from "./draw_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFlexibleRoundRobinDrawRequest, CreateFlexibleRoundRobinDrawResponse, FlexibleRoundRobinDrawChangeRoundDateRequest, FlexibleRoundRobinDrawChangeRoundDateResponse, GetFlexibleRoundRobinDrawLeaderboardRequest, GetFlexibleRoundRobinDrawLeaderboardResponse, GetFlexibleRoundRobinDrawRequest, GetFlexibleRoundRobinDrawResponse, GetFlexibleRoundRobinDrawRoundRequest, GetFlexibleRoundRobinDrawRoundResponse, SetFlexibleRoundRobinDrawFixtureScoreRequest, SetFlexibleRoundRobinDrawFixtureScoreResponse, UpdateFlexibleRoundRobinDrawRequest, UpdateFlexibleRoundRobinDrawResponse } from "./flexible-round-robin/flexible-round-robin_pb.js";

/**
 * Common endpoints
 *
 * @generated from rpc draw.v1.private.PrivateDrawService.GetDraw
 */
export const getDraw: {
      readonly name: "GetDraw",
      readonly I: typeof GetDrawRequest,
      readonly O: typeof GetDrawResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.DeleteDraw
 */
export const deleteDraw: {
      readonly name: "DeleteDraw",
      readonly I: typeof DeleteDrawRequest,
      readonly O: typeof DeleteDrawResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.ListDraws
 */
export const listDraws: {
      readonly name: "ListDraws",
      readonly I: typeof ListDrawsRequest,
      readonly O: typeof ListDrawsResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * Flexible round robin
 *
 * @generated from rpc draw.v1.private.PrivateDrawService.CreateFlexibleRoundRobinDraw
 */
export const createFlexibleRoundRobinDraw: {
      readonly name: "CreateFlexibleRoundRobinDraw",
      readonly I: typeof CreateFlexibleRoundRobinDrawRequest,
      readonly O: typeof CreateFlexibleRoundRobinDrawResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDraw
 */
export const getFlexibleRoundRobinDraw: {
      readonly name: "GetFlexibleRoundRobinDraw",
      readonly I: typeof GetFlexibleRoundRobinDrawRequest,
      readonly O: typeof GetFlexibleRoundRobinDrawResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.UpdateFlexibleRoundRobinDraw
 */
export const updateFlexibleRoundRobinDraw: {
      readonly name: "UpdateFlexibleRoundRobinDraw",
      readonly I: typeof UpdateFlexibleRoundRobinDrawRequest,
      readonly O: typeof UpdateFlexibleRoundRobinDrawResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawRound
 */
export const getFlexibleRoundRobinDrawRound: {
      readonly name: "GetFlexibleRoundRobinDrawRound",
      readonly I: typeof GetFlexibleRoundRobinDrawRoundRequest,
      readonly O: typeof GetFlexibleRoundRobinDrawRoundResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawLeaderboard
 */
export const getFlexibleRoundRobinDrawLeaderboard: {
      readonly name: "GetFlexibleRoundRobinDrawLeaderboard",
      readonly I: typeof GetFlexibleRoundRobinDrawLeaderboardRequest,
      readonly O: typeof GetFlexibleRoundRobinDrawLeaderboardResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.FlexibleRoundRobinDrawChangeRoundDate
 */
export const flexibleRoundRobinDrawChangeRoundDate: {
      readonly name: "FlexibleRoundRobinDrawChangeRoundDate",
      readonly I: typeof FlexibleRoundRobinDrawChangeRoundDateRequest,
      readonly O: typeof FlexibleRoundRobinDrawChangeRoundDateResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
/**
 * @generated from rpc draw.v1.private.PrivateDrawService.SetFlexibleRoundRobinDrawFixtureScore
 */
export const setFlexibleRoundRobinDrawFixtureScore: {
      readonly name: "SetFlexibleRoundRobinDrawFixtureScore",
      readonly I: typeof SetFlexibleRoundRobinDrawFixtureScoreRequest,
      readonly O: typeof SetFlexibleRoundRobinDrawFixtureScoreResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "draw.v1.private.PrivateDrawService"
  }
};
