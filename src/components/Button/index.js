import { Btn } from "./styles";
import PropTypes from 'prop-types'

export const Button = ({children, backroundColor, color,width,margin, boderColor, boder, boderWidth, onClick}) => {
    return(
        <Btn
        backroundColor={backroundColor}
        boder={boder}
        color={color}
        width={width}
        margin={margin}
        boderColor={boderColor}
        boderWidth={boderWidth}
        onClick={onClick}
        >{children}</Btn>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    backroundColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    margin: PropTypes.string,
    boderColor: PropTypes.string,
    boder: PropTypes.string,
    boderWidth: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps={
    backroundColor: "#000080",
    color: "#fff",
    width: "120px",
    margin: "20px",
    boderColor: "#FF4500",
    onClick: () => {}
}