
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
    const screen = this.scope.view.viewSize
    const rect = paper.Path.Rectangle(new paper.Point(0, 0), new paper.Point(screen.width, screen.height))
    rect.fillColor = 'green'
  }
}