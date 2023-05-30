import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INode } from '../node';

@Component({
  selector: 'ngx-chart-node',
  templateUrl: './ngx-chart-node.component.html',
  styleUrls: ['./ngx-chart-node.component.scss']
})
export class NgxChartNodeComponent {

  @Input()
  node: INode;

  @Input()
  hasParent = false;

  @Input()
  useCheck = false;

  @Input()
  direction: 'vertical' | 'horizontal' = 'vertical';

  @Output() itemClick = new EventEmitter<INode>();

  @Output() itemChange = new EventEmitter<INode>();

  // ngOnInit(){
  //   console.log(this.itemClick);
  //   console.log(this.itemChange);
    
    
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.itemClick);
  //   console.log(this.itemChange);
  // }
}
