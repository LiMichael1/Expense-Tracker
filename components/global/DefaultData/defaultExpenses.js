// sample
import Iphone from '../../../public/ExpensePhotos/Iphone13.png';
import Netflix from '../../../public/ExpensePhotos/Netflix.png';
import Figma from '../../../public/ExpensePhotos/Figma.png';

function createRow(img, name, business, type, amount, date, invoice_id) {
  return { img, name, business, type, amount, date, invoice_id };
}

function createRecurRow(img, name, business, amount) {
  return { img, name, business, amount };
}

export const defaultExpenseData = [
  createRow(
    Iphone,
    'Iphone 13 Pro MAX',
    'Apple Inc.',
    'Mobile',
    420.84,
    new Date('2002-12-21'),
    'MGL0124877'
  ),
  createRow(
    Netflix,
    'Netflix Subscription',
    'Netflix',
    'Entertainment',
    100.0,
    new Date('2002-04-05'),
    'MGL0124877'
  ),
  createRow(
    Figma,
    'Figma Subscription',
    'Figma Inc.',
    'Software',
    244.2,
    new Date('2002-04-02'),
    'MGL0124877'
  ),
];

export const defaultRecurExpenseData = [
  createRecurRow(Netflix, 'Netflix Subscription', 'Netflix', -121.21),
];
