type QuestionType = 'Multiple choice';

type Question = {
    text: string;
    type: QuestionType;
    responses?: ResponseOptions;
}

type ResponseOptions = Record<string, { result: Result } | Question>

export type Flow = {
    name: string;
    keywords: string;
    result?: Result;
    question?: Question;
}

type Result = {
    account: number;
    tax: string;
}
