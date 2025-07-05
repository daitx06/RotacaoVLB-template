const positions = [
    { top: '75%', left: '75%' }, // Posição 1
    { top: '10%', left: '75%' }, // Posição 2
    { top: '10%', left: '45%' }, // Posição 3
    { top: '10%', left: '15%' }, // Posição 4
    { top: '75%', left: '15%' }, // Posição 5
    { top: '75%', left: '45%' }, // Posição 6
];

const basePositions = [
    { top: '75%', left: '75%' }, // Posição 1
    { top: '10%', left: '75%' }, // Posição 2
    { top: '10%', left: '45%' }, // Posição 3
    { top: '10%', left: '15%' }, // Posição 4
    { top: '75%', left: '15%' }, // Posição 5
    { top: '75%', left: '45%' }, // Posição 6
]

const attackingPositions = [
    levantadorNa1 = [
        { top: '5%', left: '55%' }, // Posição 3
        { top: '35%', left: '90%' }, // Posição 2
        { top: '35%', left: '5%' }, // Posição 3
        { top: '35%', left: '40%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '55%', left: '65%' }, // Posição 6
    ],
    levantadorNa2 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '5%', left: '55%' }, // Posição 2
        { top: '35%', left: '90%' }, // Posição 3
        { top: '35%', left: '0%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa3 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '35%', left: '90%' }, // Posição 2
        { top: '5%', left: '55%' }, // Posição 3
        { top: '35%', left: '0%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa4 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '35%', left: '90%' }, // Posição 2
        { top: '35%', left: '0%' }, // Posição 3
        { top: '5%', left: '55%' }, // Posição 3
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa5 = [
        { top: '55%', left: '55%' }, // Posição 1
        { top: '35%', left: '45%' }, // Posição 2
        { top: '35%', left: '90%' }, // Posição 3
        { top: '35%', left: '0%' }, // Posição 4
        { top: '5%', left: '55%' }, // Posição 3
        { top: '55%', left: '25%' }, // Posição 6
    ],
    levantadorNa6 = [
        { top: '55%', left: '60%' }, // Posição 1
        { top: '35%', left: '90%' }, // Posição 2
        { top: '35%', left: '45%' }, // Posição 3
        { top: '35%', left: '0%' }, // Posição 4
        { top: '55%', left: '30%' }, // Posição 5
        { top: '5%', left: '55%' }, // Posição 3
    ]
]

const receivingServePositions = [
    levantadorNa1 = [
        { top: '50%', left: '95%' }, // Posição 1
        { top: '45%', left: '85%' }, // Posição 2
        { top: '45%', left: '5%' }, // Posição 3
        { top: '10%', left: '0%' }, // Posição 4
        { top: '65%', left: '30%' }, // Posição 5
        { top: '65%', left: '60%' }, // Posição 6
    ],
    levantadorNa2 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '5%', left: '90%' }, // Posição 2
        { top: '35%', left: '85%' }, // Posição 3
        { top: '35%', left: '5%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa3 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '35%', left: '85%' }, // Posição 2
        { top: '5%', left: '45%' }, // Posição 3
        { top: '35%', left: '5%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa4 = [
        { top: '55%', left: '70%' }, // Posição 1
        { top: '35%', left: '85%' }, // Posição 2
        { top: '35%', left: '5%' }, // Posição 3
        { top: '5%', left: '0%' }, // Posição 4
        { top: '55%', left: '20%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa5 = [
        { top: '55%', left: '55%' }, // Posição 1
        { top: '45%', left: '80%' }, // Posição 2
        { top: '10%', left: '75%' }, // Posição 3
        { top: '10%', left: '0%' }, // Posição 4
        { top: '25%', left: '10%' }, // Posição 5
        { top: '55%', left: '25%' }, // Posição 6
    ],
    levantadorNa6 = [
        { top: '65%', left: '60%' }, // Posição 1
        { top: '45%', left: '80%' }, // Posição 2
        { top: '5%', left: '45%' }, // Posição 3
        { top: '45%', left: '10%' }, // Posição 4
        { top: '65%', left: '30%' }, // Posição 5
        { top: '25%', left: '45%' }, // Posição 6
    ]
]

const defendingCenterPositions = [
    levantadorNa1 = [
        { top: '55%', left: '85%' }, // Posição 1
        { top: '5%', left: '55%' }, // Posição 2
        { top: '5%', left: '35%' }, // Posição 3
        { top: '5%', left: '45%' }, // Posição 4
        { top: '55%', left: '5%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa2 = [
        { top: '55%', left: '85%' }, // Posição 1
        { top: '5%', left: '45%' }, // Posição 2
        { top: '5%', left: '55%' }, // Posição 3
        { top: '5%', left: '35%' }, // Posição 4
        { top: '55%', left: '5%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa3 = [
        { top: '55%', left: '85%' }, // Posição 1
        { top: '5%', left: '55%' }, // Posição 2
        { top: '5%', left: '45%' }, // Posição 3
        { top: '5%', left: '35%' }, // Posição 4
        { top: '55%', left: '5%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa4 = [
        { top: '55%', left: '85%' }, // Posição 1
        { top: '5%', left: '55%' }, // Posição 2
        { top: '5%', left: '35%' }, // Posição 3
        { top: '5%', left: '45%' }, // Posição 4
        { top: '55%', left: '5%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa5 = [
        { top: '55%', left: '5%' }, // Posição 1
        { top: '5%', left: '45%' }, // Posição 2
        { top: '5%', left: '55%' }, // Posição 3
        { top: '5%', left: '35%' }, // Posição 4
        { top: '55%', left: '85%' }, // Posição 5
        { top: '65%', left: '45%' }, // Posição 6
    ],
    levantadorNa6 = [
        { top: '65%', left: '45%' }, // Posição 1
        { top: '5%', left: '55%' }, // Posição 2
        { top: '5%', left: '45%' }, // Posição 3
        { top: '5%', left: '35%' }, // Posição 4
        { top: '55%', left: '5%' }, // Posição 5
        { top: '55%', left: '85%' }, // Posição 6
    ]
]

const defendingLeftPositions = [
    levantadorNa1 = [
        { top: '45%', left: '65%' }, // Posição 1
        { top: '15%', left: '65%' }, // Posição 2
        { top: '5%', left: '5%' }, // Posição 3
        { top: '5%', left: '15%' }, // Posição 4
        { top: '55%', left: '0%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa2 = [
        { top: '45%', left: '65%' }, // Posição 1
        { top: '5%', left: '15%' }, // Posição 2
        { top: '15%', left: '65%' }, // Posição 3
        { top: '5%', left: '5%' }, // Posição 4
        { top: '55%', left: '0%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa3 = [
        { top: '45%', left: '65%' }, // Posição 1
        { top: '15%', left: '65%' }, // Posição 2
        { top: '5%', left: '15%' }, // Posição 3
        { top: '5%', left: '5%' }, // Posição 4
        { top: '55%', left: '0%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa4 = [
        { top: '45%', left: '65%' }, // Posição 1
        { top: '15%', left: '65%' }, // Posição 2
        { top: '5%', left: '5%' }, // Posição 3
        { top: '5%', left: '15%' }, // Posição 4
        { top: '55%', left: '0%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa5 = [
        { top: '55%', left: '0%' }, // Posição 1
        { top: '5%', left: '15%' }, // Posição 2
        { top: '15%', left: '65%' }, // Posição 3
        { top: '5%', left: '5%' }, // Posição 4
        { top: '45%', left: '65%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa6 = [
        { top: '75%', left: '45%' }, // Posição 1
        { top: '15%', left: '65%' }, // Posição 2
        { top: '5%', left: '15%' }, // Posição 3
        { top: '5%', left: '5%' }, // Posição 4
        { top: '55%', left: '0%' }, // Posição 5
        { top: '45%', left: '65%' }, // Posição 6
    ]
]

const defendingRightPositions = [
    levantadorNa1 = [
        { top: '55%', left: '90%' }, // Posição 1
        { top: '5%', left: '85%' }, // Posição 2
        { top: '15%', left: '25%' }, // Posição 3
        { top: '5%', left: '75%' }, // Posição 4
        { top: '45%', left: '25%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa2 = [
        { top: '55%', left: '90%' }, // Posição 1
        { top: '5%', left: '75%' }, // Posição 2
        { top: '5%', left: '85%' }, // Posição 3
        { top: '15%', left: '25%' }, // Posição 4
        { top: '45%', left: '25%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa3 = [
        { top: '55%', left: '90%' }, // Posição 1
        { top: '5%', left: '85%' }, // Posição 2
        { top: '5%', left: '75%' }, // Posição 3
        { top: '15%', left: '25%' }, // Posição 4
        { top: '45%', left: '25%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa4 = [
        { top: '55%', left: '90%' }, // Posição 1
        { top: '5%', left: '85%' }, // Posição 2
        { top: '15%', left: '25%' }, // Posição 3
        { top: '5%', left: '75%' }, // Posição 4
        { top: '45%', left: '25%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa5 = [
        { top: '45%', left: '25%' }, // Posição 1
        { top: '5%', left: '75%' }, // Posição 2
        { top: '5%', left: '85%' }, // Posição 3
        { top: '15%', left: '25%' }, // Posição 4
        { top: '55%', left: '90%' }, // Posição 5
        { top: '75%', left: '45%' }, // Posição 6
    ],
    levantadorNa6 = [
        { top: '75%', left: '45%' }, // Posição 1
        { top: '5%', left: '85%' }, // Posição 2
        { top: '5%', left: '75%' }, // Posição 3
        { top: '15%', left: '25%' }, // Posição 4
        { top: '45%', left: '25%' }, // Posição 5
        { top: '55%', left: '90%' }, // Posição 6
    ]
]

// 0 5 4 3 2 1
let currentRotation = 0;

function updatePlayers() {
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });
}

function BaseFormation(){
    var positions = basePositions;
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });
}

function ReceivingServeFormation(){
    var positions = receivingServePositions[currentRotation];
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });  
}

function Attacking(){
    var positions = attackingPositions[currentRotation];
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });
}

function DefendingCenter(){
    var positions = defendingCenterPositions[currentRotation];
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });    
}

function DefendingLeft(){
    var positions = defendingLeftPositions[currentRotation];
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });    
}

function DefendingRight(){
    var positions = defendingRightPositions[currentRotation];
    document.querySelectorAll('.player').forEach((player, index) => {
        const pos = positions[(index + currentRotation) % 6];
        player.style.top = pos.top;
        player.style.left = pos.left;
    });    
}

function UpdatePlayerText(playerNumber) {
    const input = document.getElementById('playerText' + playerNumber);
    const player = document.getElementById('player' + playerNumber);
    player.textContent = input.value;
}

function drawLines(clearLines = false) {
        
    if(clearLines){
        
        if(document.contains(document.getElementById('lines'))){
            document.getElementById("lines").remove();
        }
    }
    else {
        
        let lineNumbers = 1;
        const court = document.getElementById('court');
        
        const lines = [
            { top: '35%', left: '0%', width: '5px', height: '37%' }, // defesa 5
            { top: '34%', left: '34%', width: '5px', height: '37%' }, // defesa 5
            { top: '34%', left: '0%', width: '35%', height: '5px' }, // defesa 5
            { top: '71%', left: '0%', width: '35.65%', height: '5px' }, // defesa 5
            { top: '73%', left: '0%', width: '5px', height: '27%' }, // defesa 6
            { top: '73%', left: '98%', width: '5px', height: '27%' }, // defesa 6
            { top: '73%', left: '0%', width: '98%', height: '5px' }, // defesa 6
            { top: '98.6%', left: '0%', width: '99.6%', height: '5px' }, // defesa 6
            { top: '34%', left: '36%', width: '5px', height: '37%' }, // defesa 1
            { top: '34%', left: '98%', width: '5px', height: '38%' }, // defesa 1
            { top: '34%', left: '36%', width: '63%', height: '5px' }, // defesa 1
            { top: '71%', left: '36%', width: '63.6%', height: '5px' }, // defesa 1
            { top: '16%', left: '0%', width: '5px', height: '16%' }, // defesa 2
            { top: '0%', left: '28%', width: '5px', height: '17%' }, // defesa 2
            { top: '0%', left: '98%', width: '5px', height: '32%' }, // defesa 2
            { top: '0%', left: '28%', width: '71%', height: '5px' }, // defesa 2
            { top: '16%', left: '0%', width: '29.6%', height: '5px' }, // defesa 2
            { top: '30.6%', left: '0%', width: '98%', height: '5px' }, // defesa 2
        ];
        
        const linesElement = document.createElement('div');
        linesElement.className = 'lines';
        linesElement.id = 'lines';

        lines.forEach(line => {
            var div = document.createElement('div');
            div.className = 'line';
            div.id = 'line' + lineNumbers;

            div.style.top = line.top;
            div.style.left = line.left;
            div.style.width = line.width;
            div.style.height = line.height;
            linesElement.appendChild(div);
            lineNumbers++;
        });

        court.appendChild(linesElement);
    }
}

document.getElementById("receiveServe").addEventListener('click', () => {
    ReceivingServeFormation();
    drawLines(true);
});

document.getElementById("defending-center").addEventListener('click', () => {
    DefendingCenter();
    drawLines(true);
});

document.getElementById("defending-left").addEventListener('click', () => {
    DefendingLeft();
    drawLines(true);
});

document.getElementById("defending-right").addEventListener('click', () => {
    DefendingRight();
    drawLines(true);
});

document.getElementById("attacking").addEventListener('click', () => {
    Attacking();
    drawLines(true);
});

document.getElementById("baseForm").addEventListener('click', () => {
    BaseFormation();
    drawLines(true);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentRotation = (currentRotation + 1) % 6;
    drawLines(true);
    updatePlayers();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentRotation = (currentRotation - 1 + 6) % 6;
    drawLines(true);
    updatePlayers();
});

// Inicializar posições dos jogadores
updatePlayers();
