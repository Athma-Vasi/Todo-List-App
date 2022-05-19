import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { Div } from '../types'

const header = function () {
	const log = (i: unknown) => console.log('\n', i)
	const root: Div = document.querySelector('#root')

	const header = elemCreator('div')(['header'])
	appendElemToParent(root)(header)
}

export { header }
