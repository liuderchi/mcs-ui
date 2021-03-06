// @flow
import * as R from 'ramda';
import { type ItemProps, type ItemValueMapper } from './type.flow';
import { type Theme } from '../utils/type.flow';

export const MAX_HEIGHT = 155;

export function filterBy({
  items,
  filter,
  itemValueMapper,
}: {
  items: Array<ItemProps>,
  filter: string,
  itemValueMapper: ItemValueMapper,
}): Array<ItemProps> {
  const regex = new RegExp(filter, 'gi');
  return items.filter((item: ItemProps) => regex.test(itemValueMapper(item)));
}

export function getInputValue({
  isOpen,
  filter,
  activeItem,
  itemValueMapper,
}: {
  isOpen: boolean,
  filter: string,
  activeItem?: ItemProps,
  itemValueMapper: ItemValueMapper,
}): string {
  let value;

  if (isOpen) {
    value = filter;
  } else {
    value = activeItem ? itemValueMapper(activeItem) : '';
  }

  return value;
}

export function getPlaceholder({
  isOpen,
  activeItem,
  placeholder,
}: {
  isOpen: boolean,
  activeItem?: ItemProps,
  placeholder?: string,
}): string {
  if (isOpen && activeItem) return '';

  return placeholder || '';
}

export function getMenuItemHeight(theme: Theme): number {
  return parseInt(theme.height.normal.replace('px', ''), 10);
}

export function getMenuHeight({
  filteredItems,
  menuItemHeight,
}: {
  filteredItems: Array<ItemProps>,
  menuItemHeight: number,
}): number {
  const length = R.length(filteredItems);

  return length < 5 ? menuItemHeight * length : MAX_HEIGHT;
}
