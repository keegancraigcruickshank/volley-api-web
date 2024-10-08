// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=js+dts"
// @generated from file players/v1/private/players.proto (package players.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddPlayerExclusionRequest, AddPlayerExclusionResponse, CreatePlayerRequest, CreatePlayerResponse, GetPlayerRequest, GetPlayerResponse, ListPlayersRequest, ListPlayersResponse, ModifyPlayerRequest, ModifyPlayerResponse, RemovePlayerExclusionRequest, RemovePlayerExclusionResponse, RemovePlayersRequest, RemovePlayersResponse } from "./players_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service players.v1.private.PrivatePlayersService
 */
export declare const PrivatePlayersService: {
  readonly typeName: "players.v1.private.PrivatePlayersService",
  readonly methods: {
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.CreatePlayer
     */
    readonly createPlayer: {
      readonly name: "CreatePlayer",
      readonly I: typeof CreatePlayerRequest,
      readonly O: typeof CreatePlayerResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.RemovePlayers
     */
    readonly removePlayers: {
      readonly name: "RemovePlayers",
      readonly I: typeof RemovePlayersRequest,
      readonly O: typeof RemovePlayersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.ModifyPlayer
     */
    readonly modifyPlayer: {
      readonly name: "ModifyPlayer",
      readonly I: typeof ModifyPlayerRequest,
      readonly O: typeof ModifyPlayerResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.ListPlayers
     */
    readonly listPlayers: {
      readonly name: "ListPlayers",
      readonly I: typeof ListPlayersRequest,
      readonly O: typeof ListPlayersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.GetPlayer
     */
    readonly getPlayer: {
      readonly name: "GetPlayer",
      readonly I: typeof GetPlayerRequest,
      readonly O: typeof GetPlayerResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.AddPlayerExclusion
     */
    readonly addPlayerExclusion: {
      readonly name: "AddPlayerExclusion",
      readonly I: typeof AddPlayerExclusionRequest,
      readonly O: typeof AddPlayerExclusionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc players.v1.private.PrivatePlayersService.RemovePlayerExclusion
     */
    readonly removePlayerExclusion: {
      readonly name: "RemovePlayerExclusion",
      readonly I: typeof RemovePlayerExclusionRequest,
      readonly O: typeof RemovePlayerExclusionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

