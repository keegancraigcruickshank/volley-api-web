// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddTeamRequest, AddTeamResponse, AssociatePlayersToTeamsRequest, AssociatePlayersToTeamsResponse, ListTeamsRequest, ListTeamsResponse, RemoveTeamsRequest, RemoveTeamsResponse, UpdateTeamRequest, UpdateTeamResponse } from "./teams_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service teams.v1.private.PrivateTeamsService
 */
export declare const PrivateTeamsService: {
  readonly typeName: "teams.v1.private.PrivateTeamsService",
  readonly methods: {
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.AddTeam
     */
    readonly addTeam: {
      readonly name: "AddTeam",
      readonly I: typeof AddTeamRequest,
      readonly O: typeof AddTeamResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.ListTeams
     */
    readonly listTeams: {
      readonly name: "ListTeams",
      readonly I: typeof ListTeamsRequest,
      readonly O: typeof ListTeamsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.RemoveTeams
     */
    readonly removeTeams: {
      readonly name: "RemoveTeams",
      readonly I: typeof RemoveTeamsRequest,
      readonly O: typeof RemoveTeamsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.UpdateTeam
     */
    readonly updateTeam: {
      readonly name: "UpdateTeam",
      readonly I: typeof UpdateTeamRequest,
      readonly O: typeof UpdateTeamResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.AssociatePlayersToTeams
     */
    readonly associatePlayersToTeams: {
      readonly name: "AssociatePlayersToTeams",
      readonly I: typeof AssociatePlayersToTeamsRequest,
      readonly O: typeof AssociatePlayersToTeamsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

