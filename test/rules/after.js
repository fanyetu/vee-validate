import test from 'ava';
import moment from 'moment';
import after from './../../src/plugins/date/after';
import mocks from './../helpers';

const validate = after(moment);

test('it checks if a date is after another date', t => {
    const format = 'DD/MM/YYYY';

    mocks.querySelector({ value: '11/9/2016' });
    t.true(validate('12/9/2016', ['otherField', format]));
    t.false(validate('10/9/2016', ['otherField', format]));
});

test('it fails validation if any date is invalid', t => {
    const format = 'DD/MM/YYYY';
    mocks.querySelector({ value: '11/15/2016' }); // invalid target value.
    t.false(validate('12/9/2016', ['otherField', format]));

    mocks.querySelector({ value: '11/10/2016' });
    t.false(validate('31/09/2016', ['otherField', format])); // invalid value.
});
