import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class CustomDropDownComponent implements OnInit {

  @Input() items: object[] = [];
  @Input() bindLabel: string = 'label';
  @Input() placeholder: string = 'Select an option';
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();

  public currentValue: object = {} as object;
  public isDropdownOpen = false;
  public get dropdownElement(): Element { return this.elem.nativeElement.querySelector('.dropdown-list') };
  private currentIndex = -1;


  constructor(
    private elem: ElementRef
  ) { }

  ngOnInit(): void { }

  closeDropdown() {
    this.dropdownElement.setAttribute('aria-expanded', "false");
    this.currentIndex = -1;
    this.isDropdownOpen = false;
  }

  selectByIndex(i: number) {
    let value = this.items[i];
    this.onItemSelect(value);
  }

  onItemSelect(value) {
    this.currentValue = value;
    this.closeDropdown();
    this.selectedItem.emit(this.currentValue);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.dropdownElement.setAttribute('aria-expanded', this.isDropdownOpen ? "true" : "false");
  }


  handleKeyboardEvents($event: KeyboardEvent) {
    if (this.isDropdownOpen) {
      $event.preventDefault();
    } else {
      return;
    }
    if ($event.code === 'ArrowUp' || $event.code === 'Tab') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
    } else if ($event.code === 'ArrowDown' || $event.code === 'Tab') {
      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      } else if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      }
      this.elem.nativeElement.querySelectorAll('li').item(this.currentIndex).focus();
    } else if (($event.code === 'Enter' || $event.code === 'NumpadEnter') && this.currentIndex >= 0) {
      this.selectByIndex(this.currentIndex);
    } else if ($event.code === 'Escape') {
      this.closeDropdown();
    }
  }


}
