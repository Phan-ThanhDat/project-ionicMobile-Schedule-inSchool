import { Component } from '@angular/core';

import { RoomsPage } from '../rooms/rooms';
import { TeachersPage } from '../teachers/teachers';
import { ClassesPage } from '../classes/classes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ClassesPage;
  tab2Root = TeachersPage;
  tab3Root = RoomsPage;

  constructor() {

  }
}
