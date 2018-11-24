import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment', () => {
    component.increment();
    component.increment();
    fixture.detectChanges();
    expect(component.value).toBe(2);
  });

  it('should increment with 10 step', () => {
    component.step = 10;
    component.increment();
    component.increment();
    fixture.detectChanges();
    expect(component.value).toBe(20);
  });

  it('should decrement', () => {
    component.increment();
    component.increment();
    component.decrement();
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });

  it('should not decrement below minimum value', () => {
    component.increment();
    component.increment();
    component.decrement();
    component.decrement();
    component.decrement();
    component.decrement();
    component.decrement();
    fixture.detectChanges();
    expect(component.value).toBe(0);
  });

  it('should not increment above maximum value', () => {
    component.step = 50;
    component.increment();
    component.increment();
    component.increment();
    component.increment();
    fixture.detectChanges();
    expect(component.value).toBe(100);
  });

  it('should not increment above maximum value', () => {
    component.step = 80;
    component.increment();
    component.increment();
    fixture.detectChanges();
    expect(component.value).toBe(100);
    expect(component.value).not.toBe(100000000);
  });

  it('should call the output on a value change', () => {
    spyOn(component.changed, 'emit').and.callThrough();
    component.step = 100;
    component.increment();
    expect(component.changed.emit).toHaveBeenCalledWith(100);
    expect(component.changed.emit).not.toHaveBeenCalledWith(50);
  });

  it('should decrement when - button clicked', () => {
    component.increment();
    component.increment();
    component.increment();
    el.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(2);
    expect(el.query(By.css('#myValue')).nativeElement.textContent).toBe('2');
  });
});
