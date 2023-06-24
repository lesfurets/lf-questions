import * as React from "react";
import { FC } from "react";
import { QuestionManager, QuestionManagerProps } from "./QuestionManager";

let config: QuestionManagerProps = {
    storageKey: "1NsncYC4vb-eO84Ucc8ohnsBBxVocwoAxe5F1AnePU6I",
};

export const RootApp: FC = () => (
    <React.Suspense fallback={<div>Loading</div>}>
        <QuestionManager {...config} />
    </React.Suspense>
);
