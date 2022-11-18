// @generated by protoc-gen-connect-web v0.3.0 with parameter "target=js+dts"
// @generated from file organisation/v1/organisation.proto (package organisation.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CreateOrganisationRequest, CreateOrganisationResponse, OrgDoesExistRequest, OrgDoesExistResponse} from "./organisation_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service organisation.v1.OrganisationService
 */
export declare const OrganisationService: {
  readonly typeName: "organisation.v1.OrganisationService",
  readonly methods: {
    /**
     * @generated from rpc organisation.v1.OrganisationService.CreateOrganisation
     */
    readonly createOrganisation: {
      readonly name: "CreateOrganisation",
      readonly I: typeof CreateOrganisationRequest,
      readonly O: typeof CreateOrganisationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc organisation.v1.OrganisationService.OrgDoesExist
     */
    readonly orgDoesExist: {
      readonly name: "OrgDoesExist",
      readonly I: typeof OrgDoesExistRequest,
      readonly O: typeof OrgDoesExistResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

