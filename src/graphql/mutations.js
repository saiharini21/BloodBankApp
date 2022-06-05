/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonor = /* GraphQL */ `
  mutation CreateDonor(
    $input: CreateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    createDonor(input: $input, condition: $condition) {
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
export const updateDonor = /* GraphQL */ `
  mutation UpdateDonor(
    $input: UpdateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    updateDonor(input: $input, condition: $condition) {
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
export const deleteDonor = /* GraphQL */ `
  mutation DeleteDonor(
    $input: DeleteDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    deleteDonor(input: $input, condition: $condition) {
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
