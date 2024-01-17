import path from "path";
import { z } from "zod";

export function getNodeEnv(): string {
  return process.env.NODE_ENV ?? "";
}

export function isDev(): boolean {
  return getNodeEnv() === "development";
}

export function getPort(): number {
  return Number(process.env.PORT ?? "3000");
}

export function getEsBuildPort(): number {
  return Number(process.env.ES_BUILD_DEV_PORT ?? "2346");
}

export function getStaticsFolder(): string {
  return path.join(__dirname, "../../dist/client");
}

export function getAwsCredentials(): {
  accessKeyId: string;
  secretAccessKey: string;
} {
  return {
    accessKeyId: assertConfigured("AWS_ACCESS_KEY_ID"),
    secretAccessKey: assertConfigured("AWS_SECRET_ACCESS_KEY"),
  };
}

export function getAwsBucketName(): string {
  return assertConfigured("AWS_BUCKET_NAME");
}

export function getRethinkConfig() {
  return {
    host: assertConfigured("RETHINKDB_HOST"),
    port: z.coerce.number().parse(assertConfigured("RETHINKDB_PORT")),
    name: z.string().optional().parse(process.env.RETHINKDB_NAME),
    password: z.string().optional().parse(process.env.RETHINKDB_PASSWORD),
    username: z.string().optional().parse(process.env.RETHINKDB_USERNAME),
  };
}

function assertConfigured(varName: string): string {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`${varName} is not configured`);
  }
  return value;
}
