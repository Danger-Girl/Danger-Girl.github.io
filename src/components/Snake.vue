<template>

  <div>
    <h1> Le Serpent </h1>
    <canvas ref="snake" id="snake" :width="width * cellSize" :height="height * cellSize" />

  </div>
</template>

<script>
export default {
  name: 'Snake',
  data() {
    return {
      width: 50,
      height: 30,
      cellSize: 20,
      snake: [],
      nextFoodPosition: {x: 0, y:0},
      nextDirection: null,
      directions: [
        { // Gauche
          keyCode : 37,
          move: {
            x: -1,
            y: 0,
          }
        },
        { // Haut
          keyCode : 38,
          move: {
            x: 0,
            y: -1,
          }
        },
        { // Droite
          keyCode : 39,
          move: {
            x: 1,
            y: 0,
          }
        },
        { // bas
          keyCode : 40,
          move: {
            x: 0,
            y: 1,
          }
        },
      ]

    }
  },
  mounted() {

    // Contexte 2D
    this.context = this.$refs.snake.getContext("2d");

    this.resetGame();

    window.addEventListener("keydown", this.onKeyDown);
    this.interval = setInterval(this.moveNext, 100);
  },
  methods: {
    resetGame() {
    // création du serpent: juste la tete
    this.snake = [{x: this.width / 2, y: this.height /2}]
    this.nextDirection = null;

    // POSITION DE LA BOUFFE

    this.computeNewFoodPosition();

    // Dessiner la scene
    this.drawGame();
    },
    computeNewFoodPosition() {
      var positionFound = false;
      while (!positionFound)
      {
        // position random
        var foodPosition = { x: Math.floor(Math.random() * this.width) , y: Math.floor(Math.random() * this.height) };
        // si c'est pas un serpent
        var snakePart = this.snake.find(snakeP => snakeP.x === foodPosition.x && snakeP.y === foodPosition.y );
        if (!snakePart)
        {
          this.nextFoodPosition = foodPosition;
          positionFound = true;
        }
      }

      this.drawGame();
    },
    moveNext() {
      // Pas bouger si pas direction
      if (this.nextDirection == null) {
        return;
      }

      // Calculer position du serpent
      this.snake.unshift({ x: this.snake[0].x + this.nextDirection.move.x, y: this.snake[0].y + this.nextDirection.move.y});

      // Calculer si la position de la tte == position de la bouffe
      if (this.snake[0].x === this.nextFoodPosition.x && this.snake[0].y === this.nextFoodPosition.y) {
        this.computeNewFoodPosition();
      }
      else {
      this.snake.pop();
      }
      // calculer si la nouvelle tte est pas dans le serpent ou la bordure
      if (this.snake[0].x < 0 || this.snake[0].x >= this.width || this.snake[0].y < 0 || this.snake[0].y >= this.height) {
        window.alert("T'as perdu CHEH !");
        this.resetGame();
        return;
      }

      // regarder si c'est pas le serpent
      for (var cpt = 1; cpt < this.snake.length; cpt++) {
         if (this.snake[0].x === this.snake[cpt].x && this.snake[0].y === this.snake[cpt].y) {
           this.resetGame();
           window.alert("Cheh perdu t'as touché le corps");
           return;
         }
      }

      // Dessin
      this.drawGame();

    },
    onKeyDown(event) {
      // Trouver la direction
      var direction = this.directions.find(dir => dir.keyCode == event.keyCode);

      if (!direction) {
        return;
      }

      if (this.nextDirection == null || Math.abs(this.nextDirection.keyCode - direction.keyCode) != 2){
        this.nextDirection = direction;
      }
    },
    drawGame() {

      // Clear Canvas
      this.context.clearRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);

      // Dessiner les parties du serpent
      this.context.beginPath();
      this.snake.forEach(part => {
        this.context.rect(part.x * this.cellSize, part.y * this.cellSize, this.cellSize, this.cellSize);
        this.context.fillStyle = "#3D3E48";
        this.context.fill();
      });
      this.context.closePath();

      // La bouffe graph
      this.context.beginPath();
      this.context.rect(this.nextFoodPosition.x * this.cellSize, this.nextFoodPosition.y * this.cellSize, this.cellSize, this.cellSize);
      this.context.fillStyle = "#AC4327";
      this.context.fill();
      this.context.closePath();
    }
  }
}
</script>

<style>
h1 {
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content:  center;
  color: lightsalmon;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background-color: #14151A;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden
}

#snake {
  border: 3px solid #012A34;
}
</style>