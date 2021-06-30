/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PhoneFormatPipe } from './phoneFormat.pipe';

describe('Pipe: PhoneFormate', () => {
  const pipe = new PhoneFormatPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "3367401534" to "+1 (336) 740-1534"', () => {
    expect(pipe.transform('3367401534')).toBe('+1 (336) 740-1534');
  });
});
