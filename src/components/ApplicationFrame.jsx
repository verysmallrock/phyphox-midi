import React from 'react'
import PhyphoxApp from './PhyphoxApp'
import S from './ApplicationFrame.scss'

console.log(S)
export default class ApplicationFrame extends React.Component {
	render() {
		return <div className={ S.root } >
			<PhyphoxApp />
		</div>
	}
}
