import Question from "../model/Question";

const EMPTY_DB = [{ id: 0, label: "Aucune question n'a encore été posée !" }];

let googleApiLoaded = false;

// @ts-ignore
google.load("visualization", "1.0", { packages: ["controls", "corechart", "table"] });

// @ts-ignore
google.setOnLoadCallback(() => {
    googleApiLoaded = true;
});

export const fetchQuestions: (driveKey: string) => Promise<Question[]> = (driveKey) => {
    return new Promise((resolve) => {
        queryQuestion(driveKey, resolve);
    });
};

const queryQuestion = (
    driveKey: string,
    resolve: (value: Question[] | PromiseLike<Question[]>) => void,
) => {
    if (!googleApiLoaded) {
        setTimeout(() => queryQuestion(driveKey, resolve), 500);
        return;
    }

    // @ts-ignore
    var query = new google.visualization.Query(
        "https://docs.google.com/spreadsheets/d/" + driveKey + "/gviz/tq?headers=1",
    );

    // @ts-ignore
    query.send((response) => {
        const driveData = response.getDataTable();

        const driveQuestions: Question[] = [];
        for (let i = 0; i < driveData.getNumberOfRows(); i++) {
            driveQuestions.push({ id: i + 1, label: driveData.getValue(i, 1) });
        }

        resolve(driveQuestions.length > 0 ? driveQuestions : EMPTY_DB);
    });
};
