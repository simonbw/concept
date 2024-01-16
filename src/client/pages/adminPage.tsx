import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React from "react";
import { AdminCameraSection } from "../components/admin/AdminCameraSection";
import { AdminConfigSection } from "../components/admin/AdminConfigSection";
import { AdminHintSection } from "../components/admin/AdminHintSection";
import { AdminLogSection } from "../components/admin/AdminLogSection";
import { AdminPuzzleSection } from "../components/admin/AdminPuzzleSection";
import { AdminStartSection } from "../components/admin/AdminStartSection";
import { GameStateProvider } from "../hooks/useGameState";
import { trpcClient } from "../trpc/trpcClient";
import { renderPage } from "../utils/renderPage";

const AdminPage = () => {
  return (
    <GameStateProvider>
      <div className="p-16 flex flex-col gap-12 max-w-4xl mx-auto">
        <h1 className="text-center text-6xl font-bold">Escape Room Manager</h1>

        <AdminStartSection />

        {/* <button
          className="admin-button"
          onClick={() => trpcClient.dilemma.startDilemma.mutate()}
        >
          Start Dilemma
        </button> */}

        <Accordion
          allowMultiple
          transition
          transitionTimeout={250}
          className="admin-accordion"
        >
          <AccordionItem header="Monitoring" buttonProps={{ tabIndex: -1 }}>
            <AdminCameraSection />
          </AccordionItem>

          <AccordionItem header="Hints" buttonProps={{ tabIndex: -1 }}>
            <AdminHintSection />
          </AccordionItem>

          <AccordionItem header="Logs" buttonProps={{ tabIndex: -1 }}>
            <AdminLogSection />
          </AccordionItem>

          <AccordionItem header="Puzzle Status" buttonProps={{ tabIndex: -1 }}>
            <AdminPuzzleSection />
          </AccordionItem>

          <AccordionItem header="Config" buttonProps={{ tabIndex: -1 }}>
            <AdminConfigSection />
          </AccordionItem>

          <AccordionItem header="Reset" buttonProps={{ tabIndex: -1 }}>
            <div className="py-2 w-full">
              <button
                className="admin-button danger w-full"
                onClick={() => trpcClient.gameState.reset.mutate()}
              >
                Reset Game
              </button>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </GameStateProvider>
  );
};

renderPage(<AdminPage />);
