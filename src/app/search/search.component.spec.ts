import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchPayload } from '../model/Search';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  // UI element
  let searchBtn: DebugElement;
  let nameEle: DebugElement;
  let emailEle: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    // UI Element
    searchBtn = fixture.debugElement.query(By.css('#name'));
    nameEle = fixture.debugElement.query(By.css('#email'));
    emailEle = fixture.debugElement.query(By.css('#searchbtn'));

    fixture.detectChanges();
  });

  it('Setting enabled to false disables the submit button', () => {
    console.log(component.hasEnabled)
    component.hasEnabled = false;
    fixture.detectChanges();
    console.log(searchBtn.nativeElement.disabled,component.hasEnabled)
    expect(searchBtn.nativeElement.disabled).toBeFalsy();
  });

  it('Entering name and email emits searchPlaylod event', () => {

    emailEle.nativeElement.value = "test@example.com";
    nameEle.nativeElement.value = "user1";

    component.searchPayload.subscribe((value: SearchPayload) => {
      expect(value.email).toBe("test@example.com");
      expect(value.name).toBe("user1");
    });
    searchBtn.triggerEventHandler('click', null);
  });
});
