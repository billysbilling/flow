import { Flow } from "./types";

export const flows: Array<Flow> = [
    {
        "name": "Tøj",
        "keywords": "tøj arbejdstøj firmatøj jakkesæt sikkerhedstøj",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": {
                "Vareforbrug": {
                    "result": {
                        "account": 1210,
                        "tax": 'K'
                    }
                },
                "Arbejdstøj (m. logo)": {
                    "result": {
                        "account": 1840,
                        "tax": 'K'
                    }
                },
                "Arbejdstøj (kan anvendes privat)": {
                    "result": {
                        "account": 1895,
                        "tax": 'F'
                    }
                }
            }
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
            "responses": {
                "Dansk leverandør": {
                    "text": "Hvad er beløbet?",
                    "type": "Multiple choice",
                    "responses": {
                        "Under 30.000": {
                            "result": {
                                "account": 1840,
                                "tax": 'K'
                            }
                        },
                        "Over 30.000": {
                            "result": {
                                "account": 5310,
                                "tax": 'K'
                            }
                        },
                    }
                },
                "Udenlandsk leverandør": {
                    "text": "Hvad er beløbet?",
                    "type": "Multiple choice",
                    "responses": {
                        "Under 30.000": {
                            "result": {
                                "account": 1220,
                                "tax": "KYE"
                            }
                        },
                        "Over 30.000": {
                            "result": {
                                "account": 5310,
                                "tax": "KYE"
                            }
                        },
                    }
                }
            }
        }
    },
    {
        "name": "Restaurant",
        "keywords": "restaurant mad frokost middag forretningsmiddag",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": {
                "Medarbejdere": {
                    "result": {
                        "account": 1440,
                        "tax": 'KK'
                    }
                },
                "Forretningsforbindelser": {
                    "result": {
                        "account": 1650,
                        "tax": 'KK'
                    }
                }
            }
        }
    },
    {
        "name": "Gaver",
        "keywords": "gaver vin spiritus personalepleje repræsentation",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": {
                "Forretningsforbindelser": {
                    "result": {
                        "account": 1650,
                        "tax": 'F'
                    }
                },
                "Personalepleje": {
                    "result": {
                        "account": 1430,
                        "tax": 'F'
                    }
                }
            }
        }
    },
    {
        "name": "Blomster",
        "keywords": "blomster gave dekoration planter",
        "result": null,
        "question": {
            "text": "Vælg den kategori dit køb passer til",
            "type": "Multiple choice",
            "responses": {
                "Blomster som gave": {
                    "result": {
                        "account": null,
                        "tax": 'F'
                    }
                },
                "Blomster til virksomheden": {
                    "result": {
                        "account": 1650,
                        "tax": 'K'
                    }
                }
            }
        }
    }
];
