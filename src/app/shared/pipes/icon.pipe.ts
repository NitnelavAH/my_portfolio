import { Pipe, PipeTransform } from '@angular/core';
import { ICONS } from '../icons';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(name: string): string {
    const icon = ICONS[name as keyof typeof ICONS] || '';
    return icon;
  }
}
