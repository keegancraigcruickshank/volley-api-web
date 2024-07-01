// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draw.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteDrawRequest, DeleteDrawResponse, GetDrawRequest, GetDrawResponse, ListDrawsRequest, ListDrawsResponse } from "./draw_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFlexibleRoundRobinDrawRequest, CreateFlexibleRoundRobinDrawResponse, GetFlexibleRoundRobinDrawRequest, GetFlexibleRoundRobinDrawResponse, GetFlexibleRoundRobinDrawRoundRequest, GetFlexibleRoundRobinDrawRoundResponse, UpdateFlexibleRoundRobinDrawRequest, UpdateFlexibleRoundRobinDrawResponse } from "./flexible-round-robin/flexible-round-robin_pb.js";

/**
 * @generated from service draw.v1.private.PrivateDrawService
 */
export const PrivateDrawService = {
  typeName: "draw.v1.private.PrivateDrawService",
  methods: {
    /**
     * Common endpoints
     *
     * @generated from rpc draw.v1.private.PrivateDrawService.GetDraw
     */
    getDraw: {
      name: "GetDraw",
      I: GetDrawRequest,
      O: GetDrawResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.DeleteDraw
     */
    deleteDraw: {
      name: "DeleteDraw",
      I: DeleteDrawRequest,
      O: DeleteDrawResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.ListDraws
     */
    listDraws: {
      name: "ListDraws",
      I: ListDrawsRequest,
      O: ListDrawsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Flexible round robin
     *
     * @generated from rpc draw.v1.private.PrivateDrawService.CreateFlexibleRoundRobinDraw
     */
    createFlexibleRoundRobinDraw: {
      name: "CreateFlexibleRoundRobinDraw",
      I: CreateFlexibleRoundRobinDrawRequest,
      O: CreateFlexibleRoundRobinDrawResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDraw
     */
    getFlexibleRoundRobinDraw: {
      name: "GetFlexibleRoundRobinDraw",
      I: GetFlexibleRoundRobinDrawRequest,
      O: GetFlexibleRoundRobinDrawResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.UpdateFlexibleRoundRobinDraw
     */
    updateFlexibleRoundRobinDraw: {
      name: "UpdateFlexibleRoundRobinDraw",
      I: UpdateFlexibleRoundRobinDrawRequest,
      O: UpdateFlexibleRoundRobinDrawResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc draw.v1.private.PrivateDrawService.GetFlexibleRoundRobinDrawRound
     */
    getFlexibleRoundRobinDrawRound: {
      name: "GetFlexibleRoundRobinDrawRound",
      I: GetFlexibleRoundRobinDrawRoundRequest,
      O: GetFlexibleRoundRobinDrawRoundResponse,
      kind: MethodKind.Unary,
    },
  }
};

