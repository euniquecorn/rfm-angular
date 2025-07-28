import { AfterViewInit, Component } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-design',
  template: `<canvas id="canvas" width="500" height="500" style="border:1px solid #ccc;"></canvas>`,
})
export class DesignComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const canvas = new fabric.Canvas('canvas');

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'blue',
      width: 100,
      height: 100,
    });

    canvas.add(rect);
  }
}
