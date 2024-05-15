// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=js+dts"
// @generated from file locations/v1/private/locations.proto (package locations.v1.private, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { AddLocationRequest, AddLocationResponse, ListLocationsRequest, ListLocationsResponse, ModifyLocationRequest, ModifyLocationResponse, RemoveLocationsRequest, RemoveLocationsResponse } from "./locations_pb.js";

/**
 * @generated from rpc locations.v1.private.PrivateLocationsService.AddLocation
 */
export const addLocation = {
  localName: "addLocation",
  name: "AddLocation",
  kind: MethodKind.Unary,
  I: AddLocationRequest,
  O: AddLocationResponse,
  service: {
    typeName: "locations.v1.private.PrivateLocationsService"
  }
};

/**
 * @generated from rpc locations.v1.private.PrivateLocationsService.ModifyLocation
 */
export const modifyLocation = {
  localName: "modifyLocation",
  name: "ModifyLocation",
  kind: MethodKind.Unary,
  I: ModifyLocationRequest,
  O: ModifyLocationResponse,
  service: {
    typeName: "locations.v1.private.PrivateLocationsService"
  }
};

/**
 * @generated from rpc locations.v1.private.PrivateLocationsService.ListLocations
 */
export const listLocations = {
  localName: "listLocations",
  name: "ListLocations",
  kind: MethodKind.Unary,
  I: ListLocationsRequest,
  O: ListLocationsResponse,
  service: {
    typeName: "locations.v1.private.PrivateLocationsService"
  }
};

/**
 * @generated from rpc locations.v1.private.PrivateLocationsService.RemoveLocations
 */
export const removeLocations = {
  localName: "removeLocations",
  name: "RemoveLocations",
  kind: MethodKind.Unary,
  I: RemoveLocationsRequest,
  O: RemoveLocationsResponse,
  service: {
    typeName: "locations.v1.private.PrivateLocationsService"
  }
};
