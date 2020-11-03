export const fhirVersions = {
  DSTU2: "dstu2" as "dstu2",
  STU3: "stu3" as "stu3",
  R4: "r4" as "r4",
};

export type fhirVersions = typeof fhirVersions[keyof typeof fhirVersions];
