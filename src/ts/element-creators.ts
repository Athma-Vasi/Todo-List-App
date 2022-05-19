const elemCreator = (elem_: string) => (class_: string[]) => {
	const element = document.createElement(elem_)

	return class_.reduce((elem: HTMLElement, currClass: string) => {
		elem.classList.add(currClass)
		return elem
	}, element)
}

const addAttributeToElem =
	(attrVals_: Array<string[]>) => (elem_: HTMLElement | null) => {
		return attrVals_.reduce((acc: HTMLElement | null | undefined, curr: string[]) => {
			if (curr.length > 2) return undefined

			acc?.setAttribute(curr[0], curr[1])
			return acc
		}, elem_)
	}
const addTextToElem = (text_: string) => (elem_: HTMLElement | null) => {
	const textNode = document.createTextNode(text_)
	elem_?.appendChild(textNode)
	return elem_
}

const appendElemToParent =
	(parent_: HTMLElement | null) => (child_: HTMLElement | null) => {
		if (child_) parent_?.appendChild(child_)
	}

const createImage =
	(source_: string) => (class_: string[]) => (alt_: string) => (title_: string) => {
		const image = new Image()
		image.src = source_
		image.alt = alt_
		image.title = title_

		return class_.reduce((elem: HTMLImageElement, currClass: string) => {
			elem.classList.add(currClass)
			return elem
		}, image)
	}

const addEvtListener =
	(evt_: string) =>
	(
		handleEvt_: (
			this: any,
			ev: any,
			options?: { capture: boolean; once: boolean; passive: boolean; signal: AbortSignal }
		) => unknown
	) =>
	(elem_: HTMLElement | null) => {
		elem_?.addEventListener(evt_, handleEvt_)
		return elem_
	}

// const pipe =
// 	(...funcs: Array<(_: unknown | null) => unknown>) =>
// 	(v: unknown | null) => {
// 		return funcs.reduce((result, func) => {
// 			if (result) return func(result)
// 		}, v)
// 	}

const pipe =
	(...funcs: any[]) =>
	(value: any) =>
		funcs.reduce((res, func) => func(res), value)

export {
	elemCreator,
	appendElemToParent,
	addTextToElem,
	addAttributeToElem,
	createImage,
	addEvtListener,
	pipe,
}
