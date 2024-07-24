import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";

const Sidebar = () => {
  const [tab, setTab] = useState("motion");

  const motionComponents = [
    "MOVEX_TEN",
    "MOVEX_FIFTEEN",
    "MOVEX_THIRTY",
    "MOVEY_TEN",
    "MOVEY_FIFTEEN",
    "MOVEY_THIRTY",
    "CLOCKWISE_TEN",
    "CLOCKWISE_FIFTEEN",
    "CLOCKWISE_THIRTY",
    "ANTICLOCKWISE_TEN",
    "ANTICLOCKWISE_FIFTEEN",
    "ANTICLOCKWISE_THIRTY",
    "GOTO_XY",
  ];

  const looksComponents = [
    "SAY_TEN",
    "SAY_FIFTEEN",
    "SAY_THIRTY",
    "THINK_TEN",
    "THINK_FIFTEEN",
    "THINK_THIRTY",
  ];

  return (
    <div className="w-64 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="flex justify-between gap-2 border-1 border-gray-600 w-full mb-2">
        <button
          onClick={() => setTab("motion")}
          className={`w-full px-4 py-2 rounded-tl-lg rounded-tr-lg ${
            tab === "motion"
              ? "bg-red-600 text-white border-b-2 border-red-700"
              : "bg-gray-500 text-white hover:bg-red-600"
          }`}
        >
          Motion
        </button>
        <button
          onClick={() => setTab("looks")}
          className={`w-full px-4 py-2 rounded-tl-lg rounded-tr-lg ${
            tab === "looks"
              ? "bg-red-600 text-white border-b-2 border-red-700"
              : "bg-gray-500 text-white hover:bg-red-600"
          }`}
        >
          Looks
        </button>
      </div>

      {tab === "motion" ? (
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion flex flex-col gap-0.5 items-center"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((Component, i) => (
                <Draggable
                  key={`${Component}-sideArea`}
                  draggableId={`${Component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="w-[200px]"
                    >
                      {fetchComponent(Component)}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      ) : (
        <Droppable droppableId="sideArea-looks" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-looks flex flex-col gap-0.5 items-center my-0"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((Component, i) => (
                <Draggable
                  key={`${Component}-sideArea`}
                  draggableId={`${Component}-sideArea`}
                  index={i}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="w-[200px]"
                    >
                      {fetchComponent(Component)}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default Sidebar;
