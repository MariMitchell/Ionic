import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  constructor() { }
  
  items = [
    { id: 0, value: 'Ookla' },
    { id: 1, value: 'Zohe' },
    { id: 2, value: 'Seran' },
    { id: 3, value: 'Stadler' },
    { id: 4, value: 'Ivory' },
    { id: 5, value: 'Ignum' },
    { id: 6, value: 'Windego' }
    
  ]
  
  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }
  reorderItems(ev) {
    const itemMove = this.items.splice(ev.detail.from, 1)[0];
    this.items.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
}
  ngOnInit() {
  }

}
