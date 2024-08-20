'use client';

// components
import { Greet } from "@/components/greet";
import { HandleSearchTask } from "@/components/search-input-container";

// hooks
import { useAtom } from "jotai";
// atoms
import { globalToggleSidebarAtoms } from "./(atoms)/(global)/global-atoms";

export const TodoListMainComponent = () => {

    return (
        <>
          <Greet/>
          <HandleSearchTask/>
        </>
      )
}