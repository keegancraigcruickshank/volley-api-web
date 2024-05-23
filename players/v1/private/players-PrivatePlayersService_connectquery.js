// @generated by protoc-gen-connect-query v1.4.1 with parameter "target=js+dts"
// @generated from file players/v1/private/players.proto (package players.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { CreatePlayerRequest, CreatePlayerResponse, GetPlayerRequest, GetPlayerResponse, ListPlayersRequest, ListPlayersResponse, ModifyPlayerRequest, ModifyPlayerResponse, RemovePlayersRequest, RemovePlayersResponse } from "./players_pb.js";

/**
 * @generated from rpc players.v1.private.PrivatePlayersService.CreatePlayer
 */
export const createPlayer = {
  localName: "createPlayer",
  name: "CreatePlayer",
  kind: MethodKind.Unary,
  I: CreatePlayerRequest,
  O: CreatePlayerResponse,
  service: {
    typeName: "players.v1.private.PrivatePlayersService"
  }
};

/**
 * @generated from rpc players.v1.private.PrivatePlayersService.RemovePlayers
 */
export const removePlayers = {
  localName: "removePlayers",
  name: "RemovePlayers",
  kind: MethodKind.Unary,
  I: RemovePlayersRequest,
  O: RemovePlayersResponse,
  service: {
    typeName: "players.v1.private.PrivatePlayersService"
  }
};

/**
 * @generated from rpc players.v1.private.PrivatePlayersService.ModifyPlayer
 */
export const modifyPlayer = {
  localName: "modifyPlayer",
  name: "ModifyPlayer",
  kind: MethodKind.Unary,
  I: ModifyPlayerRequest,
  O: ModifyPlayerResponse,
  service: {
    typeName: "players.v1.private.PrivatePlayersService"
  }
};

/**
 * @generated from rpc players.v1.private.PrivatePlayersService.ListPlayers
 */
export const listPlayers = {
  localName: "listPlayers",
  name: "ListPlayers",
  kind: MethodKind.Unary,
  I: ListPlayersRequest,
  O: ListPlayersResponse,
  service: {
    typeName: "players.v1.private.PrivatePlayersService"
  }
};

/**
 * @generated from rpc players.v1.private.PrivatePlayersService.GetPlayer
 */
export const getPlayer = {
  localName: "getPlayer",
  name: "GetPlayer",
  kind: MethodKind.Unary,
  I: GetPlayerRequest,
  O: GetPlayerResponse,
  service: {
    typeName: "players.v1.private.PrivatePlayersService"
  }
};
