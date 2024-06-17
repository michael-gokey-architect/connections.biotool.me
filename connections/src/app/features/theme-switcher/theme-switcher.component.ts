import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent  implements OnInit  {
  headerFooter = false;
  theme: string = 'theme-grays';

	// onThemeUpdate(updated: boolean) {
	// 	if (updated) this.theme = localStorage.getItem('theme')!;
	// }
	
	ngOnInit() {
		// localStorage.getItem('theme') === null
    //   ? localStorage.setItem('theme', this.theme)
    //   : (this.theme = localStorage.getItem('theme')!);;
	}



}
