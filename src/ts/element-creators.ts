const elemCreator = (elem_: string) => (class_: string[]) => {
	const element = document.createElement(elem_)

	return class_.reduce((elem, currClass) => {
		elem.classList.add(currClass)
		return elem
	}, element)
}

const addAttributeToElem =
	(elem_: HTMLElement | null) => (attribute_: string) => (value_: string) => {
		elem_?.setAttribute(attribute_, value_)
		return elem_
	}

const addTextToElem = (elem_: HTMLElement | null) => (text_: string) => {
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

		return class_.reduce((elem, currClass) => {
			elem.classList.add(currClass)
			return elem
		}, image)
	}

export { elemCreator, appendElemToParent, addTextToElem, addAttributeToElem, createImage }
