import React, { Component } from 'react'
import "../Styles/ColorBox.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom"
import chroma from 'chroma-js';
import { withStyles } from "@material-ui/styles";
import styles from "../Styles/ColorBoxStyles";


class ColorBox extends Component {

    state = {
        copied: false
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1000)
        })
    }

    render() {
        const { name, background, id, paletteId, classes, showingFullPalette } = this.props
        const isDarkColor = chroma(background).luminance() <= 0.18
        const isLightColor = chroma(background).luminance() >= 0.18
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div style={{ background }} className={`copy-overlay ${this.state.copied && "show"}`} />
                    <div className={`copy-msg ${this.state.copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette &&
                    <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);






