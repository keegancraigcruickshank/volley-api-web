// @generated by protoc-gen-connect-web v0.3.0 with parameter "target=js+dts"
// @generated from file draw/v1/private/draw.proto (package draws.v1.private, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CreateDrawRequest, CreateDrawResponse} from "./draw_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service draws.v1.private.PrivateDrawsService
 */
export declare const PrivateDrawsService: {
  readonly typeName: "draws.v1.private.PrivateDrawsService",
  readonly methods: {
    /**
     * @generated from rpc draws.v1.private.PrivateDrawsService.CreateDraw
     */
    readonly createDraw: {
      readonly name: "CreateDraw",
      readonly I: typeof CreateDrawRequest,
      readonly O: typeof CreateDrawResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

