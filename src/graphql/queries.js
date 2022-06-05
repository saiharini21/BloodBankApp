/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDonor = /* GraphQL */ `
  query GetDonor($id: ID!) {
    getDonor(id: $id) {
      id
      name
      email
      hospital
      Phone
      bgrp
      date
      createdAt
      updatedAt
    }
  }
`;
export const listDonors = /* GraphQL */ `
  query ListDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        hospital
        Phone
        bgrp
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
