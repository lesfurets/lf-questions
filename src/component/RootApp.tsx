import * as React from "react";
import { FC } from "react";
import {QuestionManager, QuestionManagerConfig} from "./QuestionManager";

let config: QuestionManagerConfig = {
    title: "Réunion d'information",
    subTitle: "",
    listKey: "1NsncYC4vb-eO84Ucc8ohnsBBxVocwoAxe5F1AnePU6I",
    formKey: "1FAIpQLSdJtBsfbGmxopYLXl7irEp1tukhXmfcvR3HlexBbjYJBWYMxA",
    presentationMode: false //window.location.search.includes('?presentation-mode')
};

export const RootApp: FC = () => <QuestionManager config={config}/>;
