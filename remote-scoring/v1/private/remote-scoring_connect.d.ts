// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=js+dts"
// @generated from file remote-scoring/v1/private/remote-scoring.proto (package remote_scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteScoreRequest, DeleteScoreResponse, ListScoresRequest, ListScoresResponse, UpdateScoreRequest, UpdateScoreResponse, UploadScoreRequest, UploadScoreResponse } from "./remote-scoring_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service remote_scoring.v1.private.PrivateRemoteScoringService
 */
export declare const PrivateRemoteScoringService: {
  readonly typeName: "remote_scoring.v1.private.PrivateRemoteScoringService",
  readonly methods: {
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.UploadScore
     */
    readonly uploadScore: {
      readonly name: "UploadScore",
      readonly I: typeof UploadScoreRequest,
      readonly O: typeof UploadScoreResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.ListScores
     */
    readonly listScores: {
      readonly name: "ListScores",
      readonly I: typeof ListScoresRequest,
      readonly O: typeof ListScoresResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.DeleteScore
     */
    readonly deleteScore: {
      readonly name: "DeleteScore",
      readonly I: typeof DeleteScoreRequest,
      readonly O: typeof DeleteScoreResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.UpdateScore
     */
    readonly updateScore: {
      readonly name: "UpdateScore",
      readonly I: typeof UpdateScoreRequest,
      readonly O: typeof UpdateScoreResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

