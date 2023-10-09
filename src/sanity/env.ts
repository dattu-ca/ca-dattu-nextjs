import {CLIENT_CONFIG} from "~/utils/config.client";

export const apiVersion = CLIENT_CONFIG.SANITY.API_VERSION;

export const dataset = assertValue(
  CLIENT_CONFIG.SANITY.DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  CLIENT_CONFIG.SANITY.PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
