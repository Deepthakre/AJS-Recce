import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Details1Page } from './details1.page';

describe('Details1Page', () => {
  let component: Details1Page;
  let fixture: ComponentFixture<Details1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Details1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
