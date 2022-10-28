class AllMatrixes {
    constructor() {

        this.area1 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                            
                
            ],
            title: "Level 1",
            doors: [
                { x: 14, y: 2, toArea: "area2", appearingCoords: { x: 12, y: 16 } },
                { x: 5, y: 10, toArea: "area4", appearingCoords: { x: 4, y: 8 } },
                { x: 14, y: 19, toArea: "area3", appearingCoords: { x: 20, y: 5 } },
                { x: 23, y: 10, toArea: "area5", appearingCoords: { x: 26, y: 11 } },

                

            ],
            finishFlags: [
                //{x:17,y:15},{x:18,y:15},{x:19,y:15},{x:20,y:15},
                //{x:20,y:16},{x:20,y:17},{x:20,y:18},
            ],
            signBoards: [
                {x: 18*29, y: 5*29, sign: "Loading Ramp"}
            ]

        };

        this.area2 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,21,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,21,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,21,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,21,0,0,1,1,1,1,1,1,1,0,0],
                [0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,28,28,28,28,28,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,28,0,0,0,0,0,0,0,0,0,28,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0],
                [0,0,1,28,0,0,0,0,0,0,0,0,0,28,1,0,0,0,0,0,0,1,0,0,0,0,0,21,21,21,21,1,0,0],
                [0,0,1,28,0,0,0,0,0,0,0,0,0,28,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,28,28,28,28,28,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0],
                [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0],
                [0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                          
                
            ],
            title: "Level 2",
            doors: [
                { x: 12, y: 17, toArea: "area1", appearingCoords: { x: 14, y: 3 } },

                { x: 4, y: 17, toArea: "area4", appearingCoords: { x: 16, y: 10 } },
                { x: 4, y: 3, toArea: "area4", appearingCoords: { x: 14, y: 6 } },

                { x: 12, y: 3, toArea: "area5", appearingCoords: { x: 22, y: 3 } },
                { x: 30, y: 4, toArea: "area4", appearingCoords: { x: 23, y: 3 } },
                { x: 29, y: 17, toArea: "area3", appearingCoords: { x: 5, y: 17 } },
                { x: 18, y: 16, toArea: "area3", appearingCoords: { x: 15, y: 13 } },

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 6*29, y: 9*29, sign: "Medical"},
                {x: 25*29, y: 11*29, sign: "Oxygen"}

            ]
        };

        this.area3 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,1,21,21,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,21,21,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,21,21,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,21,21,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,21,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,27,27,27,27,27,27,27,27,27,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                               
                

            ],
            title: "Level 3",
            doors: [
                { x: 19, y: 5, toArea: "area1", appearingCoords: { x: 14, y: 18 } },

                { x: 27, y: 5, toArea: "area4", appearingCoords: { x: 12, y: 17 } },
                { x: 23, y: 3, toArea: "area5", appearingCoords: { x: 14, y: 3 } },
                { x: 15, y: 5, toArea: "area4", appearingCoords: { x: 26, y: 7 } },
                { x: 5, y: 18, toArea: "area2", appearingCoords: { x: 29, y: 16 } },
                { x: 14, y: 13, toArea: "area2", appearingCoords: { x: 19, y: 16 } },
                

            ],
            finishFlags: [
                {x:25,y:15},{x:26,y:15},{x:27,y:15},
                {x:25,y:16},{x:25,y:17},{x:25,y:18}
            ],
            signBoards: [
                {x: 3*29, y: 3*29, sign: "Reactor"},
                {x: 21*29, y: 6*29, sign: "Archives"},
                {x: 24*29, y: 11*29, sign: "Command Deck"}

            ]
        };

        this.area4 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,26,26,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,26,26,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,22,22,22,22,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,22,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,22,0,0,0,1,1,1,1,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,22,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,22,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,26,26,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,26,26,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,26,26,0,0,0,0,0,0,0,1,0,0,0,0,0,0,26,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
                
            ],
            title: "Level 4",
            doors: [
                { x: 3, y: 8, toArea: "area1", appearingCoords: { x: 6, y: 10 } },
                { x: 16, y: 9, toArea: "area2", appearingCoords: { x: 4, y: 16 } },
                { x: 13, y: 6, toArea: "area2", appearingCoords: { x: 4, y: 4 } },
                { x: 11, y: 17, toArea: "area3", appearingCoords: { x: 26, y: 5 } },

                { x: 9, y: 3, toArea: "area5", appearingCoords: { x: 9, y: 16 } },
                { x: 9, y: 14, toArea: "area4", appearingCoords: { x: 17, y: 17 } },
                { x: 17, y: 18, toArea: "area4", appearingCoords: { x: 9, y: 13 } },
                { x: 23, y: 14, toArea: "area5", appearingCoords: { x: 5, y: 9 } },
                { x: 23, y: 2, toArea: "area2", appearingCoords: { x: 29, y: 4 } },
                { x: 27, y: 7, toArea: "area3", appearingCoords: { x: 14, y: 5 } },


            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 2*29, y: 16*29, sign: "Laboratory"},
                {x: 21*29, y: 18*29, sign: "Weapons"},
                {x: 26*29, y: 10*29, sign: "Security"}

            ]
        };

        this.area5 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,28,28,28,28,28,0,0,0,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,28,28,28,28,28,28,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
                
            ],
            title: "Level 5",
            doors: [
                { x: 27, y: 11, toArea: "area1", appearingCoords: { x: 22, y: 10 } },
                { x: 14, y: 2, toArea: "area3", appearingCoords: { x: 23, y: 4 } },
                { x: 9, y: 17, toArea: "area4", appearingCoords: { x: 9, y: 4 } },
                { x: 22, y: 2, toArea: "area2", appearingCoords: { x: 12, y: 4 } },
                { x: 4, y: 9, toArea: "area4", appearingCoords: { x: 23, y: 13 } },
                
            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 15*29, y: 14*29, sign: "Reactor"}

            ]
        };

    }


}

// const allMatrixes = {}

module.exports = {
    AllMatrixes,
}