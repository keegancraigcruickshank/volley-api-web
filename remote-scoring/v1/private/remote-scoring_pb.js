// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts"
// @generated from file remote-scoring/v1/private/remote-scoring.proto (package remote_scoring.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message remote_scoring.v1.private.UploadScoreRequest
 */
export const UploadScoreRequest = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.UploadScoreRequest",
  () => [
    { no: 1, name: "team_one_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "team_two_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "team_one_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "team_two_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "played_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.UploadScoreResponse
 */
export const UploadScoreResponse = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.UploadScoreResponse",
  () => [
    { no: 1, name: "score_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.ListScoresFilter
 */
export const ListScoresFilter = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.ListScoresFilter",
  () => [
    { no: 1, name: "recorded_date", kind: "message", T: Timestamp },
    { no: 2, name: "team_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.ListScoresRequest
 */
export const ListScoresRequest = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.ListScoresRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "pageSize", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "score_filter", kind: "message", T: ListScoresFilter, opt: true },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.ListScoresResponse
 */
export const ListScoresResponse = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.ListScoresResponse",
  () => [
    { no: 1, name: "scores", kind: "message", T: ListScoresResponse_Score, repeated: true },
    { no: 2, name: "total_count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.ListScoresResponse.Score
 */
export const ListScoresResponse_Score = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.ListScoresResponse.Score",
  () => [
    { no: 1, name: "score_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "team_one_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "team_two_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "team_one_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "team_two_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "played_at", kind: "message", T: Timestamp },
    { no: 7, name: "team_one_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "team_two_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListScoresResponse_Score"},
);

/**
 * @generated from message remote_scoring.v1.private.DeleteScoreRequest
 */
export const DeleteScoreRequest = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.DeleteScoreRequest",
  () => [
    { no: 1, name: "score_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.DeleteScoreResponse
 */
export const DeleteScoreResponse = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.DeleteScoreResponse",
  [],
);

/**
 * @generated from message remote_scoring.v1.private.UpdateScoreRequest
 */
export const UpdateScoreRequest = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.UpdateScoreRequest",
  () => [
    { no: 1, name: "score_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "team_one_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "team_two_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "team_one_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "team_two_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "played_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message remote_scoring.v1.private.UpdateScoreResponse
 */
export const UpdateScoreResponse = /*@__PURE__*/ proto3.makeMessageType(
  "remote_scoring.v1.private.UpdateScoreResponse",
  [],
);

