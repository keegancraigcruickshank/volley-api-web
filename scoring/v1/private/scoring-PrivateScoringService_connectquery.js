// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file scoring/v1/private/scoring.proto (package scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { UploadScoreRequest, UploadScoreResponse } from "./scoring_pb.js";

/**
 * Common endpoints
 *
 * @generated from rpc scoring.v1.private.PrivateScoringService.UploadScore
 */
export const uploadScore = {
  localName: "uploadScore",
  name: "UploadScore",
  kind: MethodKind.Unary,
  I: UploadScoreRequest,
  O: UploadScoreResponse,
  service: {
    typeName: "scoring.v1.private.PrivateScoringService"
  }
};