export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE= 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function create() {
	return {type: CATEGORY_CREATE, category}
}

export function update() {
	return {type: CATEGORY_update, category}
}

export function destroy() {
	return {type: CATEGORY_destroy, category}
}