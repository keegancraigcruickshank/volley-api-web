// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file scoring/v1/private/scoring.proto (package scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { UploadScoreRequest, UploadScoreResponse } from "./scoring_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Common endpoints
 *
 * @generated from rpc scoring.v1.private.PrivateScoringService.UploadScore
 */
export const uploadScore: {
      readonly name: "UploadScore",
      readonly I: typeof UploadScoreRequest,
      readonly O: typeof UploadScoreResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "scoring.v1.private.PrivateScoringService"
  }
};
