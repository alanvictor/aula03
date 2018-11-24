import { FilterPipe } from './filter.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('FilePipe isolated tests', () => {
  const pipe = new FilterPipe();
  const items = [{ name: 'constantine'}, { name: 'john travolta'}];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter the list by name when provided', () => {
    expect(pipe.transform(items, 'const')).toEqual([{name: 'constantine'}]);
  });

  it('should return the list when a filter is not provided', () => {
    expect(pipe.transform(items)).toBe(items);
  });

  it('should return the same when object dont have name property', () => {
    const otherItems = [
      { nome: 'Joao' },
      { nome: 'Pedro' },
      { nome: 'Valdir' },
    ];
    const filter = 'Valdir';
    expect(pipe.transform(otherItems, filter)).toEqual(otherItems);
  });
});

describe('FilePipe with components', () => {
  @Component({
    template: `<div *ngFor="let item of items | petfilter:filter">{{ item.name }}</div>`
  })
  class TestComponent {
    filter = '';
    items = [
      { name: 'constantine'},
      { name: 'john travolta'}
    ];
  }

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterPipe,
        TestComponent
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should filter the list by name when provided', () => {
    component.filter = 'const';
    fixture.detectChanges();
    expect(el.textContent).toContain('constantine');
    expect(el.textContent).not.toContain('john travolta');
  });

  it('should return the list when a filter is not provided', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('constantine');
    expect(el.textContent).toContain('john travolta');
  });
});
