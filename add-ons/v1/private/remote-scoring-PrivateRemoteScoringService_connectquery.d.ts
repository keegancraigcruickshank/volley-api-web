// @generated by protoc-gen-connect-query v1.4.2 with parameter "target=js+dts"
// @generated from file add-ons/v1/private/remote-scoring.proto (package remote_scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListScoresRequest, ListScoresResponse, UploadScoreRequest, UploadScoreResponse } from "./remote-scoring_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.UploadScore
 */
export const uploadScore: {
      readonly name: "UploadScore",
      readonly I: typeof UploadScoreRequest,
      readonly O: typeof UploadScoreResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "remote_scoring.v1.private.PrivateRemoteScoringService"
  }
};
/**
 * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.ListScores
 */
export const listScores: {
      readonly name: "ListScores",
      readonly I: typeof ListScoresRequest,
      readonly O: typeof ListScoresResponse,
      readonly kind: MethodKind.Unary,
  readonly service: {
    readonly typeName: "remote_scoring.v1.private.PrivateRemoteScoringService"
  }
};
