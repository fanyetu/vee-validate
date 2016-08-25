import test from 'ava';
import moment from 'moment';
import date_between from './../../src/plugins/date/date_between'; // eslint-disable-line

const validate = date_between(moment);

test('it checks if a date is between two other dates', t => {
    const format = 'DD/MM/YYYY';

    t.true(validate('16/9/2016', ['1/9/2016', '20/09/2016', format]));
    t.false(validate('16/9/2016', ['1/9/2016', '15/09/2016', format]));
});


test('it fails the valiadation if any date is in incorrect format', t => {
    const format = 'DD/MM/YYYY';

    t.false(validate('09/16/2016', ['1/9/2016', '20/09/2016', format])); // invalid value.
    t.false(validate('16/9/2016', ['199/10/2016', '20/09/2016', format])); // invalid low bound.
    t.false(validate('16/9/2016', ['1/9/2016', '1/15/2016', format])); // invalid upper bound.
});
