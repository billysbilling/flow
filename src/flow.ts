import { Category } from "./types";

export const flows: Array<Category> = [
    {
        "name": "Tøj",
        "keywords": "tøj arbejdstøj firmatøj jakkesæt sikkerhedstøj",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": [
                {
                    "option": "Vareforbrug",
                    "result": {
                        "account": 1210,
                        "tax": 'K'
                    }
                },
                {
                    "option": "Arbejdstøj (m. logo)",
                    "result": {
                        "account": 1840,
                        "tax": 'K'
                    }
                },
                {
                    "option": "Arbejdstøj (kan anvendes privat)",
                    "result": {
                        "account": 1895,
                        "tax": 'F'
                    }
                }
            ]
        }
    },
    {
        "name": "Taxakørsel",
        "keywords": "taxa transport rejse kørsel",
        "result": {
            "account": 1620,
            "tax": 'F'
        }
    },
    {
        "name": "Værktøj",
        "keywords": "værktøj boremaskine skruemaskine sav hammer skruer søm",
        "result": null,
        "question": {
            "text": "Hvor er leverandøren fra?",
            "type": "Multiple choice",
            "responses": [
                {
                    "option": "Dansk leverandør",
                    "text": "Hvad er beløbet?",
                    "type": "Multiple choice",
                    "responses": [
                        {
                            "option": "Under 30.000",
                            "result": {
                                "account": 1840,
                                "tax": 'K'
                            }
                        },
                        {
                            "option": "Over 30.000",
                            "result": {
                                "account": 5310,
                                "tax": 'K'
                            }
                        }
                    ]
                },
                {
                    "option": "Udenlandsk leverandør",
                    "text": "Hvad er beløbet?",
                    "type": "Multiple choice",
                    "responses": [
                        {
                            "option": "Under 30.000",
                            "result": {
                                "account": 1220,
                                "tax": "KYE"
                            }
                        },
                        {
                            "option": "Over 30.000",
                            "result": {
                                "account": 5310,
                                "tax": "KYE"
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        "name": "Restaurant",
        "keywords": "restaurant mad frokost middag forretningsmiddag",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": [
                {
                    "option": "Medarbejdere",
                    "result": {
                        "account": 1440,
                        "tax": 'KK'
                    }
                },
                {
                    "option": "Forretningsforbindelser",
                    "result": {
                        "account": 1650,
                        "tax": 'KK'
                    }
                }
            ]
        }
    },
    {
        "name": "Gaver",
        "keywords": "gaver vin spiritus personalepleje repræsentation",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": [
                {
                    "option": "Forretningsforbindelser",
                    "result": {
                        "account": 1650,
                        "tax": 'F'
                    }
                },
                {
                    "option": "Personalepleje",
                    "result": {
                        "account": 1430,
                        "tax": 'F'
                    }
                }
            ]
        }
    },
    {
        "name": "Blomster",
        "keywords": "blomster gave dekoration planter",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": [
                {
                    "option": "Blomster som gave",
                    "result": {
                        "account": null,
                        "tax": 'F'
                    }
                },
                {
                    "option": "Blomster til virksomheden",
                    "result": {
                        "account": 1650,
                        "tax": 'K'
                    }
                }
            ]
        }
    }
];
