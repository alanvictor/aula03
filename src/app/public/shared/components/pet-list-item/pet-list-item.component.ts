import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PetOptions } from './pet-list-item.options';

@Component({
    selector: 'app-pet-list-item',
    templateUrl: 'pet-list-item.component.html',
    styleUrls: ['pet-list-item.component.scss'],
})
export class PetListItemComponent {
    @Input() pet: PetOptions;

    // tslint:disable-next-line:max-line-length
    photo = 'https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=200&h=200&crop=1';
}
