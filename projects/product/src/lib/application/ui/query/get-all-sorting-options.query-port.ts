import {InjectionToken} from '@angular/core';
import {SortOptionDomain} from '../../domain/sort-option.domain';

export const GET_ALL_SORTING_OPTIONS_QUERY_PORT = new InjectionToken<SortOptionDomain>('GET_ALL_SORTING_OPTIONS_QUERY_PORT');
