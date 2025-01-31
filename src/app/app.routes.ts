import { Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizInfoComponent } from './pages/quiz-info/quiz-info.component';
import { QuizScoreComponent } from './pages/quiz-score/quiz-score.component';
import { QuizJoinComponent } from './pages/quiz-join/quiz-join.component';

export const routes: Routes = [
    {
        path: "",
        component: QuizJoinComponent
    },
    {
        path: "quiz-info",
        component: QuizInfoComponent
    },
    {
        path: "quiz",
        component: QuizComponent
    },
    {
        path: "quiz-score",
        component: QuizScoreComponent
    }
];
