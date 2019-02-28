import * as _ from "lodash";

function withStyles(styles: any) {
    return function (Component) {
        function Com(props) {
            const {styles: overrides, ...restProps} = props
            const style = _.mergeWith({}, styles, overrides, (org, src) => ({...org, ...src}))
            return <Component styles={style} {...restProps}/>;
        }

        return Com
    }
}
