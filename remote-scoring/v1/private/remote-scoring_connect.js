// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js+dts"
// @generated from file remote-scoring/v1/private/remote-scoring.proto (package remote_scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteScoreRequest, DeleteScoreResponse, ListScoresRequest, ListScoresResponse, UpdateScoreRequest, UpdateScoreResponse, UploadScoreRequest, UploadScoreResponse } from "./remote-scoring_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service remote_scoring.v1.private.PrivateRemoteScoringService
 */
export const PrivateRemoteScoringService = {
  typeName: "remote_scoring.v1.private.PrivateRemoteScoringService",
  methods: {
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.UploadScore
     */
    uploadScore: {
      name: "UploadScore",
      I: UploadScoreRequest,
      O: UploadScoreResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.ListScores
     */
    listScores: {
      name: "ListScores",
      I: ListScoresRequest,
      O: ListScoresResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.DeleteScore
     */
    deleteScore: {
      name: "DeleteScore",
      I: DeleteScoreRequest,
      O: DeleteScoreResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc remote_scoring.v1.private.PrivateRemoteScoringService.UpdateScore
     */
    updateScore: {
      name: "UpdateScore",
      I: UpdateScoreRequest,
      O: UpdateScoreResponse,
      kind: MethodKind.Unary,
    },
  }
};

