// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file teams/v1/private/teams.proto (package teams.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { AddTeamRequest, AddTeamResponse, AssociatePlayersToTeamsRequest, AssociatePlayersToTeamsResponse, DissociatePlayersFromTeamsRequest, DissociatePlayersFromTeamsResponse, GetTeamRequest, GetTeamResponse, ListTeamsRequest, ListTeamsResponse, RemoveTeamsRequest, RemoveTeamsResponse, UpdateTeamDivisionRequest, UpdateTeamDivisionResponse, UpdateTeamRequest, UpdateTeamResponse } from "./teams_pb.js";

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.AddTeam
 */
export const addTeam = {
  localName: "addTeam",
  name: "AddTeam",
  kind: MethodKind.Unary,
  I: AddTeamRequest,
  O: AddTeamResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.ListTeams
 */
export const listTeams = {
  localName: "listTeams",
  name: "ListTeams",
  kind: MethodKind.Unary,
  I: ListTeamsRequest,
  O: ListTeamsResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.GetTeam
 */
export const getTeam = {
  localName: "getTeam",
  name: "GetTeam",
  kind: MethodKind.Unary,
  I: GetTeamRequest,
  O: GetTeamResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.RemoveTeams
 */
export const removeTeams = {
  localName: "removeTeams",
  name: "RemoveTeams",
  kind: MethodKind.Unary,
  I: RemoveTeamsRequest,
  O: RemoveTeamsResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.UpdateTeam
 */
export const updateTeam = {
  localName: "updateTeam",
  name: "UpdateTeam",
  kind: MethodKind.Unary,
  I: UpdateTeamRequest,
  O: UpdateTeamResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.AssociatePlayersToTeams
 */
export const associatePlayersToTeams = {
  localName: "associatePlayersToTeams",
  name: "AssociatePlayersToTeams",
  kind: MethodKind.Unary,
  I: AssociatePlayersToTeamsRequest,
  O: AssociatePlayersToTeamsResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.DissociatePlayersFromTeams
 */
export const dissociatePlayersFromTeams = {
  localName: "dissociatePlayersFromTeams",
  name: "DissociatePlayersFromTeams",
  kind: MethodKind.Unary,
  I: DissociatePlayersFromTeamsRequest,
  O: DissociatePlayersFromTeamsResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};

/**
 * @generated from rpc teams.v1.private.PrivateTeamsService.UpdateTeamDivision
 */
export const updateTeamDivision = {
  localName: "updateTeamDivision",
  name: "UpdateTeamDivision",
  kind: MethodKind.Unary,
  I: UpdateTeamDivisionRequest,
  O: UpdateTeamDivisionResponse,
  service: {
    typeName: "teams.v1.private.PrivateTeamsService"
  }
};
