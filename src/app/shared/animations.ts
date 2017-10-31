import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes
} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const scale: AnimationEntryMetadata =
      /*función trigger que vamos a llamar de una forma especifica
    * para poder concatenar la vista con la funcionalidad que le estamos
    * agregando
    */
    trigger('heroState',
    /*Este trigger puede recibir otro array donde agregaremos unos estados y a esos estados vamos agregarle estilos*/
    [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive=>activo', animate('100ms ease-in')),
      transition('active=>inactive', animate('100ms ease-out'))
    ]);

export const popOverState: AnimationEntryMetadata =
    trigger('popOverState', [
    state('show', style({
        opacity: 1
    })),
    state('hide', style({
        opacity: 0
    })),
    transition('show => hide', animate('600ms ease-out')),
    transition('hide => show', animate('1000ms ease-in'))
  ]);

export const photoState: AnimationEntryMetadata =
    trigger('photoState',
      [
        state('move', style({
          opacity: 1,
          transform: 'translateX(100%)'
        })),
        state('enlarge', style({
          transform: 'scale(1.5)'
        })),
        state('spin', style({
          transform: 'rotateY(180deg) rotate(90deg)'
        })),
        transition('* => move', animate('500ms', keyframes([
          style({opacity: 0.11, offset: 0.1 }),
          style({opacity: 0.35, transform: 'translatex(33%)' , offset: 0.3 }),
          style({opacity: 0.69, transform: 'translatex(66%)' , offset: 0.6 }),
          style({opacity: 0.9, transform: 'translatex(86%)' , offset: 0.9 }),
        ]))),
        transition('* => enlarge', animate('500ms ease')),
        transition('* => spin', animate('500ms ease'))
      ]
    );
