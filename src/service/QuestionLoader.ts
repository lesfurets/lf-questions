import Question from "../model/Question";

let googleApiLoaded = false;

// @ts-ignore
google.load('visualization', '1.0', {'packages': ['controls', 'corechart', 'table']});

// @ts-ignore
google.setOnLoadCallback(() => {
    googleApiLoaded = true;
});

export interface QuestionLoader {
    load: () => void
}

export const initQuestionLoader: (setQuestions: (value: (((prevState: Question[]) => Question[]) | Question[])) => void, driveKey: string) => QuestionLoader =
    (setQuestions, driveKey) => ({
        load: () => {
            if (!googleApiLoaded) {
                return;
            }
            console.log("pulling")
            // @ts-ignore
            var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/" + driveKey + "/gviz/tq?headers=1");
            // @ts-ignore
            query.send(function (response) {
                var driveData = response.getDataTable();
                var driveQuestions: Question[] = [];
                for (var i = 0; i < driveData.getNumberOfRows(); i++) {
                    driveQuestions.push({id: i + 1, label: driveData.getValue(i, 1)});
                }
                setQuestions(driveQuestions.length > 0 ? driveQuestions : [{
                    id: 0,
                    label: "Aucun question n'a encore été posée !"
                }]);
            });
        }
    })