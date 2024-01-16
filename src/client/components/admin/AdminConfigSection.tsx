import { capitalCase } from "change-case";
import React, { useState } from "react";
import { ZodBoolean, ZodEnum, ZodNumber, ZodObject, ZodString } from "zod";
import {
  GameState,
  gameStateSchema,
} from "../../../common/models/GameStateSchema";
import { witnessConfigSchema } from "../../../common/models/witnessConfigSchema";
import { last, objectEntries } from "../../../common/utils/arrayUtils";
import { useGameState } from "../../hooks/useGameState";
import { trpcClient } from "../../trpc/trpcClient";
import { AdminWitnessConfig } from "./AdminWitnessConfig";

export function AdminConfigSection() {
  const gameState = useGameState();

  if (!gameState) return null;

  return (
    <section className="flex flex-col gap-4">
      {objectEntries(gameStateSchema.shape.config.shape).map(
        ([fieldName, field]) => (
          <ZodField
            key={fieldName}
            field={field}
            path={["config", fieldName]}
          />
        ),
      )}
    </section>
  );
}

type GameStatePath = string[];

const ZodField: React.FC<{ field: Zod.ZodType; path?: GameStatePath }> = ({
  field,
  path = [],
}) => {
  const gameState = useGameState();
  if (!gameState) return null;

  if (field instanceof ZodString) {
    return <ConfigFieldInput gameState={gameState} path={path} />;
  }

  if (field === witnessConfigSchema) {
    return (
      <div>
        <span className="text-sm font-semibold">{capitalCase(last(path))}</span>
        <AdminWitnessConfig
          value={gameState.config.witness}
          onChange={(newValue) => {}}
        />
      </div>
    );
  }

  if (field instanceof ZodNumber) {
    // TODO
  }
  // TODO
  if (field instanceof ZodBoolean) {
  }
  // TODO
  if (field instanceof ZodEnum) {
  }

  // Recurse
  if (field instanceof ZodObject) {
    return (
      <div className="pb-4">
        <span className="text-md">{capitalCase(last(path))}</span>
        <div className="flex flex-col gap-4 border-l  pl-4 py-1">
          {objectEntries(field.shape).map(([key, value]) => (
            <ZodField key={key} field={value} path={[...path, key]} />
          ))}
        </div>
      </div>
    );
  }

  // Catch all
  return <pre>{JSON.stringify(resolve(gameState, path), null, 2)}</pre>;
};

function resolve(obj: any, path: GameStatePath): unknown {
  return path.reduce((prev: any | undefined, curr): any => prev?.[curr], obj);
}

function constructPatch(
  path: GameStatePath,
  value: unknown,
): Partial<GameState> {
  let current = value;
  for (const key of [...path].reverse()) {
    current = { [key]: current };
  }
  return current as Partial<GameState>;
}

const ConfigFieldInput: React.FC<{
  gameState: GameState;
  path: GameStatePath;
  type?: "text" | "number";
}> = ({ gameState, path, type = "text" }) => {
  const savedValue = resolve(gameState, path) as string;
  const [value, setValue] = useState<string>(savedValue);

  return (
    <fieldset className="flex gap-2 items-end">
      <label className="w-fit flex flex-col">
        <span className="text-sm">
          <span className="text-sm">{capitalCase(last(path))}</span>
        </span>
        <input
          className="admin-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
        />
      </label>
      {value != savedValue && (
        <>
          <button
            className="admin-button primary"
            onClick={() => {
              const patch = constructPatch(path, value);
              console.log({ path, value, patch });
              trpcClient.gameState.patch.mutate(patch);
            }}
          >
            Save
          </button>
          <button
            className="admin-button danger"
            onClick={() => {
              setValue(savedValue);
            }}
          >
            Cancel
          </button>
        </>
      )}
    </fieldset>
  );
};
