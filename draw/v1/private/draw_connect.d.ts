// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteDrawRequest, DeleteDrawResponse, GetDrawRequest, GetDrawResponse, ListDrawsRequest, ListDrawsResponse } from "./draw_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFlexibleRoundRobinDrawRequest, CreateFlexibleRoundRobinDrawResponse, GetFlexibleRoundRobinDrawRoundRequest, GetFlexibleRoundRobinDrawRoundResponse, UpdateFlexibleRoundRobinDrawRequest, UpdateFlexibleRoundRobinDrawResponse } from "./flexible-round-robin/flexible-round-robin_pb.js";

/**
 * @generated from service draw.v1.private.PrivateDrawService
 */
export declare const PrivateDrawService: {
  readonly typeName: "draw.v1.private.PrivateDrawService",
  readonly methods: {
    /**
     * Common endpoints
     *
     * @generated from rpc draw.v1.private.PrivateDrawService.GetDraw
     */
    readonly getDraw: {
      readonly name: "GetDraw",
      readonly I: typeof GetDrawRequest,
      readonly O: typeof GetDrawResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.DeleteDraw
     */
    readonly deleteDraw: {
      readonly name: "DeleteDraw",
      readonly I: typeof DeleteDrawRequest,
      readonly O: typeof DeleteDrawResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.ListDraws
     */
    readonly listDraws: {
      readonly name: "ListDraws",
      readonly I: typeof ListDrawsRequest,
      readonly O: typeof ListDrawsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Flexible round robin
     *
     * @generated from rpc draw.v1.private.PrivateDrawService.CreateFlexibleRoundRobinDraw
     */
    readonly createFlexibleRoundRobinDraw: {
      readonly name: "CreateFlexibleRoundRobinDraw",
      readonly I: typeof CreateFlexibleRoundRobinDrawRequest,
      readonly O: typeof CreateFlexibleRoundRobinDrawResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.UpdateFlexibleRoundRobinDraw
     */
    readonly updateFlexibleRoundRobinDraw: {
      readonly name: "UpdateFlexibleRoundRobinDraw",
      readonly I: typeof UpdateFlexibleRoundRobinDrawRequest,
      readonly O: typeof UpdateFlexibleRoundRobinDrawResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawRound
     */
    readonly getFlexibleRoundRobinDrawRound: {
      readonly name: "GetFlexibleRoundRobinDrawRound",
      readonly I: typeof GetFlexibleRoundRobinDrawRoundRequest,
      readonly O: typeof GetFlexibleRoundRobinDrawRoundResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

