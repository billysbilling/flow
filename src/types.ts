type QuestionType = 'Multiple choice';
type Region = 'DK' | 'EU' | 'Other'
type Tax = 'KVE' | 'K' | 'KVU'

type Question = {
    text: string;
    type: QuestionType;
    responses?: ResponseOptions;
}

type Option = { result: ResultSet, option: string }

type ResponseOptions = Array<Option | Question>

export type Category = {
    id: string;
    name: string;
    keywords: string;
    result?: ResultSet;
    question?: Question;
}

type AccountTypes = 'billy' | 'meneto_emv' | 'meneto_selskab'

type ResultSet = Array<{
    region: Region;
    isAsset?: boolean;
    account: {
        [K in AccountTypes]: number;
    };
    tax: Tax;
}>

const f: Category = {
    id: '0006ggrh-htht-hteh', // UUID?
    name: 'Værktøj',
    keywords: 'søm hammer',
    question: {
        text: 'Choose category for purchase',
        type: 'Multiple choice',
        responses: [{
            option: 'Værktøj til min virksomhed',
            result: [{
                region: "DK",
                isAsset: true,
                account: { // Account direct map in FE
                    meneto_emv: 1430,
                    meneto_selskab: 1430,
                    billy: 1510,
                },
                tax: 'K'
            },
            {
                region: "DK",
                isAsset: false,
                account: {
                    billy: 1310,
                    meneto_emv: 1310,
                    meneto_selskab: 1310
                },
                tax: 'K'
            },
            {
                region: "EU",
                isAsset: true,
                account: {
                    billy: 1310,
                    meneto_emv: 1310,
                    meneto_selskab: 1310
                },
                tax: 'KVE'
            },
            {
                region: "EU",
                isAsset: false,
                account: {
                    billy: 1310,
                    meneto_emv: 1310,
                    meneto_selskab: 1310
                },
                tax: 'KVE'
            },
             {
                region: "Other",
                isAsset: true,
                account: {
                    billy: 1310,
                    meneto_emv: 1310,
                    meneto_selskab: 1310
                },
                tax: 'KVU'
            },
            {
                region: "Other",
                isAsset: false,
                account: {
                    billy: 1310,
                    meneto_emv: 1310,
                    meneto_selskab: 1310
                },
                tax: 'KVU'
            },
        ]
        }]
    },
}