// @generated by protoc-gen-connect-es v0.9.1 with parameter "target=js+dts"
// @generated from file locations/v1/private/locations.proto (package locations.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddLocationRequest, AddLocationResponse, ListLocationsRequest, ListLocationsResponse, ModifyLocationRequest, ModifyLocationResponse, RemoveLocationsRequest, RemoveLocationsResponse } from "./locations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service locations.v1.private.PublicUsersService
 */
export const PublicUsersService = {
  typeName: "locations.v1.private.PublicUsersService",
  methods: {
    /**
     * @generated from rpc locations.v1.private.PublicUsersService.AddLocation
     */
    addLocation: {
      name: "AddLocation",
      I: AddLocationRequest,
      O: AddLocationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc locations.v1.private.PublicUsersService.ModifyLocation
     */
    modifyLocation: {
      name: "ModifyLocation",
      I: ModifyLocationRequest,
      O: ModifyLocationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc locations.v1.private.PublicUsersService.ListLocations
     */
    listLocations: {
      name: "ListLocations",
      I: ListLocationsRequest,
      O: ListLocationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc locations.v1.private.PublicUsersService.RemoveLocations
     */
    removeLocations: {
      name: "RemoveLocations",
      I: RemoveLocationsRequest,
      O: RemoveLocationsResponse,
      kind: MethodKind.Unary,
    },
  }
};

