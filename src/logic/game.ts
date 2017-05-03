
import { PaperProvider } from '../providers/paper'

import * as paper from 'paper'

/** Encapsulates the game's functionality. */
export class Game {

  /** The paper provider (providing methods to start and stop animation). */
  paperProvider: PaperProvider

  /** The paper object. */
  scope: paper.PaperScope

  /** Createa a new Game object from the paper scope. */
  constructor(paperProvider: PaperProvider) {
    this.scope = paperProvider.paper
    this.paperProvider = paperProvider
  }

  /** Start the game. */
  start() {
    console.log('Starting the game.')

    var maxDistance = 50
    var sizeRange = [3, 20]
    var colors = [
      'green', 'yellow', 'gray', 'pink', 'orange', 
      'red', 'black', 'blue', 'lightblue', 'purple', 'brown'
    ]

    function randomIndex(length) {
      return Math.floor(Math.random() * length)
    }

    function randomColor() {
      return colors[randomIndex(colors.length)]
    }

    function drawRandomCirclesAtPoint(point, modifier) {
      var color = randomColor()
      var size = sizeRange[0] + randomIndex(sizeRange[1] - sizeRange[0])
      var distance = randomIndex(maxDistance) * modifier
      
      var direction = Math.random() * Math.PI * 2
      var location = new paper.Point(point.x + Math.cos(direction) * distance, point.y + Math.sin(direction) * distance)
      var circle = paper.Path.Circle({
          center: location,
          radius: size * modifier
      })
      
      circle.fillColor = color
    }

    function onMouseDrag(event) {
      var modifier = Math.pow(event.delta.length, 2) / 400
      drawRandomCirclesAtPoint(event.point, modifier)
    }

    var tool = new paper.Tool()
    tool.onMouseDrag = onMouseDrag
  }
}