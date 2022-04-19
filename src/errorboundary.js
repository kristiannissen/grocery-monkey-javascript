import React, {Component} from "react"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        log(error, errorInfo)
    }

    render() {
        if (this.state.hasErrro) {
            return <div>Error!</div>
        }

        return this.props.children
    }
}
