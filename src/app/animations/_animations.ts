import { trigger, state, animate, transition, style } from '@angular/animations';

export const flyInOut =
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({ transform: 'translateX(100%)' }))
    ])
  ])

export const childrenInOut =
  trigger('childrenInOut', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [
      style({ opacity: 0 }),
      animate(1000)
    ]),
    transition('* => void', [
      animate(1000, style({ opacity: 0 }))
    ])
  ])


