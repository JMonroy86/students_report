
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            results: [
                {
                    "id": 1,
                    "name": "Lewis Leal",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": "70",
                        "css": 40,
                        "bootstrap": 20,
                        "git": 20,
                        "js": 40,
                        "react": 40,
                        "reactContext": 20,
                        "python": 1,
                    }
                },
                {
                    "id": 2,
                    "name": "Attilio Andres Giglio Sanchez",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": "100",
                        "css": "100",
                        "bootstrap": "100",
                        "git": "70",
                        "js": "80",
                        "react": "70",
                        "reactContext": "50",
                        "python": "1",
                    }
                },
                {
                    "id": 3,
                    "name": "Antonio Bello",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": "60",
                        "css": 60,
                        "bootstrap": 70,
                        "git": 60,
                        "js": 50,
                        "react": 40,
                        "reactContext": 40,
                        "python": "1",
                    }
                },
                {
                    "id": 4,
                    "name": "Carlos Gumucio",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": 100,
                        "css": 100,
                        "bootstrap": 100,
                        "git": 70,
                        "js": 80,
                        "react": 80,
                        "reactContext": 70,
                        "python": 0,
                    }
                },
                {
                    "id": 5,
                    "name": "Guillermo Sequera",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": "100",
                        "css": 95,
                        "bootstrap": 80,
                        "git": 90,
                        "js": 70,
                        "react": 50,
                        "reactContext": 50,
                        "python": 0,
                    }
                },
                {
                    "id": 6,
                    "name": "Patricio Gonzalez",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": 100,
                        "css": 100,
                        "bootstrap": 100,
                        "git": 70,
                        "js": 100,
                        "react": 100,
                        "reactContext": 100,
                        "python": 0,
                    }
                },
                {
                    "id": 7,
                    "name": "Anita Cornejo",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": "100",
                        "css": 100,
                        "bootstrap": 100,
                        "git": 60,
                        "js": 70,
                        "react": 60,
                        "reactContext": 50,
                        "python": 1,
                    }
                },
                {
                    "id": 8,
                    "name": "Emilio Ballesta",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": 40,
                        "css": 40,
                        "bootstrap": 60,
                        "git": 60,
                        "js": 30,
                        "react": 50,
                        "reactContext": 20,
                        "python": 45,
                    }
                },
                {
                    "id": 9,
                    "name": "Esteban Bravo",
                    "cohort": "Part Time VIII",
                    "tech": {
                        "html": 90,
                        "css": 60,
                        "bootstrap": 80,
                        "git": 60,
                        "js": 60,
                        "react": 70,
                        "reactContext": 60,
                        "python": 0,
                    }
                },
                {
                    "id": 10,
                    "name": "Jeronimo Santa Maria",
                    "cohort": "Full Time V",
                    "tech": {
                        "html": 100,
                        "css": 70,
                        "bootstrap": 65,
                        "git": 70,
                        "js": 40,
                        "react": 70,
                        "reactContext": 40,
                        "python": 40,
                    }
                },
                {
                    "id": 11,
                    "name": "Andrea Parada",
                    "cohort": "Full Time V",
                    "tech": {
                        "html": 100,
                        "css": 100,
                        "bootstrap": 100,
                        "git": 60,
                        "js": 75,
                        "react": 80,
                        "reactContext": 75,
                        "python": 70,
                    }
                },
            ]





        },
        actions: {
            // getFood: url => {
            //     fetch(`${foodURL}?${apiKey}&${query}`)
            //         .then(resp => resp.json())
            //         .then(data => {
            //             console.log(data)
            //             setStore({
            //                 food: data
            //             })
            //         })
            // },
        }
    }
}
export default getState;