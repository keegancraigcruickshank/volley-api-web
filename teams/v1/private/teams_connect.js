// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddTeamRequest, AddTeamResponse, AssociatePlayersToTeamsRequest, AssociatePlayersToTeamsResponse, DissociatePlayersFromTeamsRequest, DissociatePlayersFromTeamsResponse, GetTeamRequest, GetTeamResponse, ListTeamsRequest, ListTeamsResponse, RemoveTeamsRequest, RemoveTeamsResponse, UpdateTeamRequest, UpdateTeamResponse } from "./teams_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service teams.v1.private.PrivateTeamsService
 */
export const PrivateTeamsService = {
  typeName: "teams.v1.private.PrivateTeamsService",
  methods: {
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.AddTeam
     */
    addTeam: {
      name: "AddTeam",
      I: AddTeamRequest,
      O: AddTeamResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.ListTeams
     */
    listTeams: {
      name: "ListTeams",
      I: ListTeamsRequest,
      O: ListTeamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.GetTeam
     */
    getTeam: {
      name: "GetTeam",
      I: GetTeamRequest,
      O: GetTeamResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.RemoveTeams
     */
    removeTeams: {
      name: "RemoveTeams",
      I: RemoveTeamsRequest,
      O: RemoveTeamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.UpdateTeam
     */
    updateTeam: {
      name: "UpdateTeam",
      I: UpdateTeamRequest,
      O: UpdateTeamResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.AssociatePlayersToTeams
     */
    associatePlayersToTeams: {
      name: "AssociatePlayersToTeams",
      I: AssociatePlayersToTeamsRequest,
      O: AssociatePlayersToTeamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc teams.v1.private.PrivateTeamsService.DissociatePlayersFromTeams
     */
    dissociatePlayersFromTeams: {
      name: "DissociatePlayersFromTeams",
      I: DissociatePlayersFromTeamsRequest,
      O: DissociatePlayersFromTeamsResponse,
      kind: MethodKind.Unary,
    },
  }
};

