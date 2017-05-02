import { Injectable, ElementRef } from '@angular/core'
import * as paper from 'paper'

@Injectable()
export class PaperProvider {

  paper: paper.PaperScope = paper

  constructor() {
    console.log('Hello Paper Provider')
  }

  /** Setup paper with the given canvas element. */
  setup(canvas: ElementRef) {
    paper.project && paper.project.clear()
    paper.setup(canvas.nativeElement)
  }

  /** Start animating (redraw the canvas on each animation frame). */
  startAnimating() {
    this.paper.view.onFrame = () => this.paper.view.draw()
  }

  /** Stop animating (will no longer automatically redraw canvas for each animation frame). */
  stopAnimating() {
    this.paper.view.onFrame = undefined
  }
}
